import { Component, OnInit } from '@angular/core';

import { KeyService } from '../key.service';
import { MessageStorageService } from '../message-storage.service';
import { DraftMessageService } from '../draft-message.service';
import { CurrentViewService } from '../current-view.service';
import { Message } from '../message';
import { InputMode } from '../input-mode.enum';
import { CurrentView } from '../current-view.enum';

@Component({
	selector: 'fpe-compose',
	templateUrl: './fpe-compose.component.html',
	styleUrls: ['./fpe-compose.component.css']
})
export class FpeComposeComponent implements OnInit {

	text:string = '';
	receiver: string = '';
	_inputMode: InputMode = InputMode.SMALL;

	constructor(private keyService: KeyService, private storageService: MessageStorageService , private draftMessageService:DraftMessageService, private cvs: CurrentViewService, private dms: DraftMessageService ) {
		this.keyService.keyOutput$.subscribe((arg)=>{
			if(arg.erasePrevious) {
				this.text = this.text.slice(0,this.text.length-1);
			}
			this.text += arg.letter;
		});

		this.keyService.inputMode$.subscribe((arg)=>{
			this._inputMode = arg;
		});

		this.dms.receiver$.subscribe((arg)=>{
			this.receiver = arg;
		})

	}

	ngOnInit(): void {
	}

	sendMessage():void {
		this.storageService.message$.next(new Message(this.text,'me',this.receiver,false));
		this.text = '';
	}

	saveMessage(): void {
		this.draftMessageService.messageText$.next(this.text);
	}

	get inputMode() {
		switch(this._inputMode) {
			case InputMode.SMALL: return 'abc';
			case InputMode.CAPS: return 'ABC';
			case InputMode.NUM: return '123';
		}
	}

	handleTopPadClick(arg :string) {
		if(arg == 'selectLeft') {
			if(this.receiver) {
				this.saveMessage();
				this.cvs.view$.next(CurrentView.CHOOSE_RECEIVER);
			} else {
				this.sendMessage();
				this.cvs.view$.next(CurrentView.OUTBOX);
			}
		} else if(arg == 'selectRight') {
			this.text = this.text.slice(0,this.text.length-1);
		}
	}

}
