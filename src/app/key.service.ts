import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs';
import {InputMode} from './input-mode.enum';

@Injectable({
	providedIn: 'root'
})
export class KeyService {

	private lastClickedTime: number = Date.now();
	private lastClickFreq: number = 0;
	private lastClickedPrimary :any = -1;
	private static delay: number = 1200;
	
	public keyInput$ = new Subject<any>();
	public keyOutput$ = new Subject<any>();

	public inputMode$ = new BehaviorSubject<InputMode>(InputMode.SMALL);


	constructor() { 
		this.handleKeyInput = this.handleKeyInput.bind(this);
		this.keyInput$.subscribe(this.handleKeyInput);
	}

	handleKeyInput(arg: any) {
		var inputMode = this.inputMode$.getValue();
		if(this.isNumberKey(arg)) {
			if(inputMode == InputMode.NUM) {
				this.keyOutput$.next({ erasePrevious: false, letter: arg.primary });
				return;
			}

			if(arg.primary == this.lastClickedPrimary && ((arg.time - this.lastClickedTime) <= KeyService.delay )) {
				++this.lastClickFreq;
				let letter = arg.secondary.charAt(this.lastClickFreq%arg.secondary.length);
				letter = (inputMode == InputMode.CAPS)? letter.toUpperCase(): letter.toLowerCase();
				this.keyOutput$.next({ erasePrevious: true, letter: letter })
			} else {
				let letter = arg.secondary.charAt(0);
				letter = (inputMode == InputMode.CAPS)? letter.toUpperCase(): letter.toLowerCase();
				this.keyOutput$.next({ erasePrevious: false, letter: letter})
				this.lastClickFreq = 0;
			}
		} else if(arg.primary == '*') {
			this.updateInputMode(inputMode);
		}

		this.lastClickedPrimary = arg.primary;
		this.lastClickedTime = arg.time;
	}

	isNumberKey(arg: any) {
		return arg.primary && !isNaN(Number(arg.primary));
	}

	updateInputMode(inputMode :InputMode) {
		var res:InputMode;
		switch(inputMode) {
			case InputMode.SMALL: res = InputMode.CAPS; break;
			case InputMode.CAPS: res = InputMode.NUM; break;
			case InputMode.NUM: res = InputMode.SMALL; break;
		}
		this.inputMode$.next(res);
	}

}
