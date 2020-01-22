import actionCreatorFactory, { Action, AsyncActionCreators } from 'typescript-fsa';

const actionCreator = actionCreatorFactory('next:example:counter');

export interface CounterParams {
  delta: number
}

export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
}

export const increment = actionCreator<CounterParams>(actionTypes.INCREMENT);
export const decrement = actionCreator<CounterParams>(actionTypes.DECREMENT);
export const reset = actionCreator<void>(actionTypes.RESET);

// export const incrementAsync = actionCreator.async<CounterParams, number>('INCREMENT_ASYNC');
// export const decrementAsync = actionCreator.async<CounterParams, number>('DECREMENT_ASYNC');

export type CounterAction = Action<CounterParams>; // | AsyncActionCreators<CounterParams, number, any>;


