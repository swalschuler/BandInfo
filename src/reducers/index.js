import { combineReducers } from 'redux';
import ScheduleReducer from './ScheduleReducer';

export default combineReducers({
  schedule: ScheduleReducer
});
