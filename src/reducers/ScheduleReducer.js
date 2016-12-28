import { FETCH_SCHEDULE } from '../actions/types';

const INITIAL_STATE = {};

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SCHEDULE:
      return action.payload;
    default:
      return state;
  }
};

