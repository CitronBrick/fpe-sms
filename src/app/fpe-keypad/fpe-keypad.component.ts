import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import {KeyService} from '../key.service';

@Component({
	selector: 'fpe-keypad',
	templateUrl: './fpe-keypad.component.html',
	styleUrls: ['./fpe-keypad.component.css']
})
export class FpeKeypadComponent implements OnInit {

	lastKeyTime:Date = new Date();
	keyCollection : Array<Array<string>>;

	constructor(private keyService : KeyService) {
		this.keyCollection = Object.entries({'1':'.,?!','2':'abc','3':'def','4':'ghi','5':'jkl','6':'mno','7':'pqrs','8':'tuv','9':'wxyz'});
		this.keyCollection = this.keyCollection.concat([['#',''],['0',' '],['*','Aa1']]);
	}

	ngOnInit(): void {
	}

}
