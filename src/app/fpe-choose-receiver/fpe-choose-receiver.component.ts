import { Component, OnInit } from '@angular/core';

import {CurrentViewService } from '../current-view.service';
import {KeyService } from '../key.service';
import {MessageStorageService } from '../message-storage.service';
import {DraftMessageService } from '../draft-message.service';
import {CurrentView} from '../current-view.enum';
import {Message} from '../message';

@Component({
  selector: 'fpe-choose-receiver',
  templateUrl: './fpe-choose-receiver.component.html',
  styleUrls: ['./fpe-choose-receiver.component.css']
})
export class FpeChooseReceiverComponent implements OnInit {

	receiver: string = '';
	messageText: string = '';

	constructor(private cvs: CurrentViewService, private mss : MessageStorageService, private dms: DraftMessageService, private ks:KeyService) {
		dms.messageText$.subscribe((arg)=>{
			this.messageText = arg;
		});
		ks.keyOutput$.subscribe((arg)=>{
			if(arg.erasePrevious) {
				this.receiver = this.receiver.slice(0,this.receiver.length-1);
			}
			this.receiver += arg.letter;
		})

	}

	ngOnInit(): void {
	}

	handleTopPadClick(arg:string): void {
		if(arg=='selectLeft') {
			this.mss.message$.next(new Message(this.messageText,'me',this.receiver,false));
			this.receiver = '';
			this.cvs.view$.next(CurrentView.OUTBOX);
		}
	}

}
