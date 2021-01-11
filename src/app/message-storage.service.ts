import { Injectable } from '@angular/core';
import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';
//import { scan, pipe } from 'rxjs/operators';

import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessageStorageService {

	private messageList :Message[] = [];

	message$: ReplaySubject<Message>;
	//message$: BehaviorSubject<Message>;

	constructor() {
		this.message$ = new ReplaySubject<Message>();
		//this.message$ = new BehaviorSubject<Message>();
		[new Message('Hi! This is Sachin. This is my new number.', '023457218','me'),new Message('Your account balance is 2500 $', 'TRBD Bank','me'),  new Message('Where are you ?','me','Collegue 3'),new Message('When is your train leaving ?','me','098235213',false)].forEach((m)=>{
			this.message$.next(m);
		});
		
	}
}
