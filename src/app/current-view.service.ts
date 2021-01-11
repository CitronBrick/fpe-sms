import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CurrentView } from './current-view.enum';

@Injectable({
	providedIn: 'root'
})
export class CurrentViewService {


	public view$ = new BehaviorSubject<CurrentView>(CurrentView.MAIN);

	constructor() { }


}
