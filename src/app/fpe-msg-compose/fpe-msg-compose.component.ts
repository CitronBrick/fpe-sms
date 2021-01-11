import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fpe-msg-compose',
  templateUrl: './fpe-msg-compose.component.html',
  styleUrls: ['./fpe-msg-compose.component.css']
})
export class FpeMsgComposeComponent implements OnInit {

	private message:string = '';	

	constructor() { }

	ngOnInit(): void {
	}



}
