import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReminderComponent } from './reminder/reminder.component';
import { RemsListComponent } from './reminder/rems-list/rems-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReminderComponent,
    RemsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
