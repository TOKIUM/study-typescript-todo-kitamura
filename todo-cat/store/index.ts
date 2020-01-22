import { increment, decrement, reset } from './actions';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

const initialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
}

export default reducerWithInitialState(initialState)
  .case(increment, (state, payload) => {
    const { delta } = payload
    return {
      ...state,
      count: state.count + delta,
    };
  })
  .case(decrement, (state, payload) => {
    const { delta } = payload;
    return {
      ...state,
      count: state.count - delta,
    };
  })
  .case(reset, (state) => {
    return {
      ...state,
      count: 0,
    };
  });
