import { Counter } from '../models/counter.model';


export const COUNTERS: Counter[] = Array
  .from({ length: 2 }, (v, i) => new Counter({ id: ++i }));
