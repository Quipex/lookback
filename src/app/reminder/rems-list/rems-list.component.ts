import { Component, OnInit, Input } from '@angular/core';
import { ReminderModel } from './reminder-data/reminder.model';

@Component({
  selector: 'qpx-rems-list',
  templateUrl: './rems-list.component.html',
  styleUrls: ['./rems-list.component.scss']
})
export class RemsListComponent implements OnInit {

  @Input() reminder: ReminderModel;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('clicked on reminder', this.reminder);
  }

}
