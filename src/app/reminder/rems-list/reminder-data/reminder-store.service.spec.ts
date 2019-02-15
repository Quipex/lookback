import {TestBed} from '@angular/core/testing';

import {ReminderStore} from './reminder-store.service';

describe('ReminderStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReminderStore = TestBed.get(ReminderStore);
    expect(service).toBeTruthy();
  });
});
