import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DraftMessageService {


	public messageText$: Subject<string> = new Subject<string>();
	public receiver$: BehaviorSubject<string> = new BehaviorSubject<string>('');

	constructor() {

	}

	
}
