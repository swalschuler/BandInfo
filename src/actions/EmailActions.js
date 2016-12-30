import firebase from 'firebase';
import { FETCH_EMAILS } from './types';

export const fetchEmails = () => {
  return (dispatch) => {
    firebase.database().ref('/emails')
      .on('value', snapshot => {
        console.log("Test");
        dispatch({ type: FETCH_EMAILS, payload: snapshot.val() });
      });
  };
};
