import { Component, OnInit, Input } from '@angular/core';
import { KeyService } from '../key.service';

@Component({
  selector: 'fpe-key',
  templateUrl: './fpe-key.component.html',
  styleUrls: ['./fpe-key.component.css']
})
export class FpeKeyComponent implements OnInit {


	@Input('primary') primary :string = '';
	@Input('secondary') secondary :string = '';

	constructor(private keyService : KeyService) { }

	ngOnInit(): void {
	}

	handleClick() {
		this.keyService.keyInput$.next({primary: this.primary, secondary: this.secondary, time: Date.now()});
	}

	isSpaceKey(): boolean {
		return this.secondary == ' ';
	}

}
