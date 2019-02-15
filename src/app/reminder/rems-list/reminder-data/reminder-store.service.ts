import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, interval } from 'rxjs';
import { ReminderModel } from './reminder.model';
import { REMINDERS } from './reminders.data';

@Injectable({
  providedIn: 'root'
})
export class ReminderStore {
  // tslint:disable-next-line: variable-name
  private _reminders = new BehaviorSubject<ReminderModel[]>([]);
  public readonly reminders = this._reminders.asObservable();

  constructor() {
    of(REMINDERS).subscribe(data => {
      this._reminders.next(data);
    });
    interval(1000).subscribe(n => {
      const rems = this._reminders.getValue();
      for(const rem of rems) {
        
      }
    });
  }

  update(items: ReminderModel[]): void {
    this._reminders.next(items);
  }

  getAll(): Observable<ReminderModel[]> {
    return this.reminders;
  }
}
