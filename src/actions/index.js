import { useState } from 'react'
import { FETCH_DATA, NEW_TOP_FOLDER } from './types';
import * as firebase from 'firebase';





export const createTopFolder = name => dispatch => {
  const firestore = firebase.firestore();
  const authId = firebase.auth().currentUser.uid
  const colRef = firestore.collection(authId);
  colRef.add({name})
    .then(post =>
      {console.log(post)
      dispatch({
        type: NEW_TOP_FOLDER,
        payload: name
      })}
    );
};