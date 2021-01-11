import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FpeKeyComponent } from './fpe-key/fpe-key.component';
import { FpeKeypadComponent } from './fpe-keypad/fpe-keypad.component';
import { FpeMsgComposeComponent } from './fpe-msg-compose/fpe-msg-compose.component';
import { FpeMessageListComponent } from './fpe-message-list/fpe-message-list.component';
import { FpeComposeComponent } from './fpe-compose/fpe-compose.component';
import { FpeListComponent } from './fpe-list/fpe-list.component';
import { FpeToppadComponent } from './fpe-toppad/fpe-toppad.component';
import { FpeChooseReceiverComponent } from './fpe-choose-receiver/fpe-choose-receiver.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FpeKeyComponent,
    FpeKeypadComponent,
    FpeMsgComposeComponent,
    FpeMessageListComponent,
    FpeComposeComponent,
    FpeListComponent,
    FpeToppadComponent,
    FpeChooseReceiverComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
