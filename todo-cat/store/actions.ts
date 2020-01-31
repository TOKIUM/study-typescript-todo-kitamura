

export interface CounterParams {
  delta: number
}

export const ActionTypes = {
  // TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
} as const;

interface IncrementAction {
  type: typeof ActionTypes.INCREMENT,
  payload: CounterParams,
}

interface DecrementAction {
  type: typeof ActionTypes.DECREMENT,
  payload: CounterParams,
}

interface ResetAction {
  type: typeof ActionTypes.RESET,
}

export type CounterAction = IncrementAction | DecrementAction | ResetAction;

export function increment(param: CounterParams): CounterAction {
  return {
    type: ActionTypes.INCREMENT,
    payload: { ...param },
  };
};

export function decrement(param: CounterParams): CounterAction {
  return {
    type: ActionTypes.DECREMENT,
    payload: { ...param },
  };
}

export function reset(): CounterAction {
  return {
    type: ActionTypes.RESET,
  };
}
