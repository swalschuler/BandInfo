import { combineReducers } from 'redux';
import ScheduleReducer from './ScheduleReducer';
import EmailReducer from './EmailReducer';

export default combineReducers({
  schedule: ScheduleReducer,
  emails: EmailReducer
});
