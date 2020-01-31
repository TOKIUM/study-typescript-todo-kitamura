import { ActionTypes, CounterAction } from './actions';

const initialState = {
  count: 0,
  lastUpdate: 0,
  light: false,
}

export type State = typeof initialState;

const reducer = (state = initialState, action: CounterAction): State => {
  switch (action.type) {
    case ActionTypes.INCREMENT: {
      return {
        ...state,
        count: state.count + action.payload.delta,
      };
    }
    case ActionTypes.DECREMENT: {
      return {
        ...state,
        count: state.count - action.payload.delta,
      };
    }
    case ActionTypes.RESET: {
      return {
        ...state,
        count: 0,
      };
    }
    default:
      return state;
  }
};

export default reducer;
