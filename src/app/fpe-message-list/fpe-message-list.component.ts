import { Component, OnInit } from '@angular/core';
import {MessageStorageService} from '../message-storage.service';
import {CurrentViewService} from '../current-view.service';
import {CurrentView} from '../current-view.enum';

import { Message } from '../message';


@Component({
  selector: 'fpe-message-list',
  templateUrl: './fpe-message-list.component.html',
  styleUrls: ['./fpe-message-list.component.css']
})
export class FpeMessageListComponent implements OnInit {

	messageList : Message[] = [];
	view : CurrentView = CurrentView.INBOX;
	selectedIndex: number = 0;

	constructor(private mss :MessageStorageService , private cvs: CurrentViewService) {
		mss.message$.subscribe((msg) => {
			this.messageList.push(msg);
		})
		cvs.view$.subscribe((arg)=>{
			this.view = arg;
		});
	}

	ngOnInit(): void {
	}

	isInboxActive(): boolean {
		return this.view == CurrentView.INBOX;
	}

	handleTopPadClick(arg: string) {
		if(arg == 'selectRight') {
			this.cvs.view$.next(CurrentView.MAIN);
		}
		if(arg == 'selectLeft') {
			
		}
		if(arg=='up') {
			this.selectedIndex = Math.max(0, this.selectedIndex-1);
		}
		if(arg=='down') {
			this.selectedIndex = Math.min(this.messageList.length - 1, this.selectedIndex+1);
		}
	}

}
