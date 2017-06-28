import { Action } from '@ngrx/store';

import { Counter } from './models/counter.model';

import { COUNTERS } from './mocks/counters.mock';


export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const RESET_ALL = 'RESET_ALL';


export const counters = (state: Counter[] = COUNTERS, action: Action): Counter[] => {
    switch (action.type) {
      case INCREMENT:
        return state
          .map(counter => counter.id === action.payload.id ?
            Object.assign({ }, counter, { count: ++counter.count }) : counter);

      case DECREMENT:
        return state
          .map(counter => counter.id === action.payload.id && counter.count ?
            Object.assign({ }, counter, { count: --counter.count }) : counter);

      case RESET:
        return state
          .map(counter => counter.id === action.payload.id ?
            Object.assign({ }, counter, { count: 0 }) : counter);

      case ADD:
        return [
          ...state,
          new Counter({ id: state.length + 1 })
        ];

      case REMOVE:
        return state
          .slice(0, state.length - 1);

      case RESET_ALL:
        return state
          .map(counter => Object.assign({ }, counter, { count: 0 }));

      default:
        return state;
    }
};


export function increment(id) {
  return {
    type: INCREMENT,
    payload: {
      id
    }
  };
}

export function decrement(id) {
  return {
    type: DECREMENT,
    payload: {
      id
    }
  };
}

export function reset(id) {
  return {
    type: RESET,
    payload: {
      id
    }
  };
}

export function add() {
  return {
    type: ADD
  };
}

export function remove() {
  return {
    type: REMOVE
  };
}

export function resetAll() {
  return {
    type: RESET_ALL
  };
}
