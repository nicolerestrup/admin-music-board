// import { useState } from 'react'
import { NEW_TOP_FOLDER, FETCH_TOP_FOLDERS } from './types';
import * as firebase from 'firebase';


export const fetchTopFolder = () => async dispatch => {
  const firestore = firebase.firestore();
  const authId = firebase.auth().currentUser.uid
  const colRef = firestore.collection(authId);
  const getData = await colRef.get()
  // dispatch({
  //   type: FETCH_TOP_LEVELS,
  //   payload: getData.docs
  // })
  getData.docs.map(doc => 
      dispatch({
        type: FETCH_TOP_FOLDERS,
        payload: doc.data()
    })
  )
}


export const createTopFolder = name => dispatch => {
  const firestore = firebase.firestore();
  const authId = firebase.auth().currentUser.uid
  const colRef = firestore.collection(authId);
  colRef.add({name})
    .then(post =>
      dispatch({
        type: NEW_TOP_FOLDER,
        payload: name
      })
    );
};