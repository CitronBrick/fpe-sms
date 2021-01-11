import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fpe-toppad',
  templateUrl: './fpe-toppad.component.html',
  styleUrls: ['./fpe-toppad.component.css']
})
export class FpeToppadComponent implements OnInit {

	@Output() emitter :EventEmitter<string> = new EventEmitter<string>();

	constructor() { }

	ngOnInit(): void {
	}

	sendClick(arg :string): void {
		this.emitter.emit(arg);
	}

}
