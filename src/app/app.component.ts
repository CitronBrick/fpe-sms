import { Component } from '@angular/core';
import { CurrentViewService } from './current-view.service';
import { CurrentView } from './current-view.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Feature Phone : Message App';

	currentView = CurrentView.MAIN;

	constructor(private cvs : CurrentViewService) {
		this.cvs.view$.subscribe((arg)=>{
			this.currentView = arg;
		});
	}

	ngOnInit():void {
	}
}
