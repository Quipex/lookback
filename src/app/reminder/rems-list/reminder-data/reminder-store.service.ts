/* tslint:disable:no-trailing-whitespace */
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {ReminderModel} from './reminder.model';
import {REMINDERS} from './reminders.data';

@Injectable({
  providedIn: 'root'
})
export class ReminderStore {
  // tslint:disable-next-line: variable-name
  private _reminders = new BehaviorSubject<Set<ReminderModel>>(new Set());
  public readonly reminders = this._reminders.asObservable();

  constructor() {
    of(REMINDERS).subscribe((data: ReminderModel[]) => {
      const newSet = new Set();
      for (const item of data) {
        const newItem = new ReminderModel(item.time, item.name);
        newSet.add(newItem);
      }
      this._reminders.next(newSet);
    });
  }

  update(items: Set<ReminderModel>): void {
    this._reminders.next(items);
  }

  getAll(): Observable<Set<ReminderModel>> {
    return this.reminders;
  }

  add(newRem: ReminderModel) {
    const newValues = this._reminders.getValue();
    newValues.add(newRem);
    this._reminders.next(newValues);
  }

  delete(rem: ReminderModel) {
    const newValues = this._reminders.getValue();
    newValues.delete(rem);
    this._reminders.next(newValues);
  }
}
