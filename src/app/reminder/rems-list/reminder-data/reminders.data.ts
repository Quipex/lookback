import { ReminderModel } from './reminder.model';

export const REMINDERS = [
    new ReminderModel(new Date(), 'now'),
    new ReminderModel(new Date(2019, 1, 15), 'today 00:00'),
    new ReminderModel(new Date(2019, 1, 8), 'week ago'),
    new ReminderModel(new Date(2019, 1, 7), 'week and day ago'),
    new ReminderModel(new Date(2019, 0, 15), 'month ago'),
    new ReminderModel(new Date(2018, 1, 15), 'year ago'),
    new ReminderModel(new Date(2014, 1, 15), 'five years ago')
];
