import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReminderStore } from './rems-list/reminder-data/reminder-store.service';
import { Subscription } from 'rxjs';
import { ReminderModel } from './rems-list/reminder-data/reminder.model';

@Component({
  selector: 'qpx-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit, OnDestroy {
  public reminders: ReminderModel[];
  private remStoreSub: Subscription;

  constructor(
    private remStore: ReminderStore
  ) { }

  ngOnInit() {
    this.remStoreSub = this.remStore.getAll().subscribe((data: ReminderModel[]) => {
      this.reminders = [];
      for (const item of data) {
        const rem = new ReminderModel(item.time, item.name);
        this.reminders.push(rem);
      }
      console.log('data', data);
      console.log('rems', this.reminders);
    });
  }

  ngOnDestroy(): void {
    if (this.remStoreSub) {
      this.remStoreSub.unsubscribe();
    }
  }
}
