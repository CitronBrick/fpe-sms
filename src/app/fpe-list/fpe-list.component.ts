import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fpe-list',
  templateUrl: './fpe-list.component.html',
  styleUrls: ['./fpe-list.component.css']
})
export class FpeListComponent implements OnInit {

	@Input() list : Array<any> = [];
	

	constructor() { }

	ngOnInit(): void {
	}

}
