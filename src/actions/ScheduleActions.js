import firebase from 'firebase';
import { FETCH_SCHEDULE } from './types';

export const fetchSchedule = () => {
  return (dispatch) => {
    firebase.database().ref('/schedule')
      .on('value', snapshot => {
        console.log("Test");
        dispatch({ type: FETCH_SCHEDULE, payload: snapshot.val() });
      });
  };
};
