import {Component, OnDestroy, OnInit} from '@angular/core';
import {ReminderStore} from './rems-list/reminder-data/reminder-store.service';
import {Subscription} from 'rxjs';
import {ReminderModel} from './rems-list/reminder-data/reminder.model';

@Component({
  selector: 'qpx-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit, OnDestroy {
  public reminders: Set<ReminderModel>;
  private remStoreSub: Subscription;

  constructor(
    private remStore: ReminderStore,
  ) {
  }

  ngOnInit() {
    this.remStoreSub = this.remStore.getAll().subscribe((data: Set<ReminderModel>) => {
      this.reminders = data;
    });
  }

  ngOnDestroy(): void {
    if (this.remStoreSub) {
      this.remStoreSub.unsubscribe();
    }
  }

  addReminder() {
    const newRem = new ReminderModel(new Date(), 'sampleRem');
    this.remStore.add(newRem);
  }

  deleteRem(rem: ReminderModel) {
    this.remStore.delete(rem);
  }
}
