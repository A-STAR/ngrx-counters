export class Counter {
  id: number;
  count: number;

  constructor({ id = undefined, count = 0 } = { }) {
    this.id = id;
    this.count = count;
  }
}
