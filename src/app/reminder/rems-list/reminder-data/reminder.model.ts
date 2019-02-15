export class ReminderModel {
  constructor(
    public time: Date,
    public name: string,
    public passed?: string
  ) {
  }
}
