import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ReminderModel} from './reminder-data/reminder.model';
import {interval, Subscription} from 'rxjs';
import {TimeConverter} from './fancy-time-converter.function';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'qpx-reminder-cell',
  templateUrl: './rem-cell.component.html',
  styleUrls: ['./rem-cell.component.scss']
})
export class RemCellComponent implements OnInit, OnDestroy {


  @Input() reminder: ReminderModel;
  @Output() click = new EventEmitter<ReminderModel>();
  private intervalSub: Subscription;

  constructor(
    // TODO MAKE DIALOG ON CLICK
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.countTimePassed();
    this.intervalSub = interval(1000).subscribe(() => {
      this.countTimePassed();
    });
  }

  ngOnDestroy(): void {
    if (this.intervalSub) {
      this.intervalSub.unsubscribe();
    }
  }

  onClick() {
    this.click.emit(this.reminder);
  }

  private countTimePassed() {
    if (this.reminder) {
      this.reminder.passed = TimeConverter.transform(this.reminder.time);
    }
  }
}
