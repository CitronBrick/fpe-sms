import { Component, OnInit } from '@angular/core';
import {CurrentViewService} from '../current-view.service';
import { CurrentView } from '../current-view.enum';
import { TextView } from '../text-view';

@Component({
  selector: 'fpe-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {


	list : Array<TextView> = [{text:'Write new message',view: CurrentView.COMPOSE},{text:'Inbox',view:CurrentView.INBOX},{text:'Outbox',view:CurrentView.OUTBOX}];

	selectedIndex: number = 0;

	constructor(private cvs: CurrentViewService) {

	}

	ngOnInit(): void {
	}

	handleTopPadClick(arg: string) {
		if(arg == 'selectRight') {

		}
		if(arg == 'selectLeft') {
			this.cvs.view$.next(this.list[this.selectedIndex].view);			
		}
		if(arg == 'up') {
			this.selectedIndex = Math.max(0, this.selectedIndex -1 );
		}
		if(arg == 'down') {
			this.selectedIndex = Math.min(this.list.length, this.selectedIndex +1 );
		}
	}


}
