import { useState } from 'react'
import { FETCH_DATA, NEW_TOP_FOLDER } from './types';
import * as firebase from 'firebase';
const db = firebase.firestore();
const colRef = db.collection('theData');

const [name, setName] = useState();
const [category, setCategory] = useState();
const [data, setData] = useState();

export const fetchData = () => dispatch => {
  const colRef = db.collection('theData');
  colRef.get()
    .then(snap => snap.docs.map(doc => {
      if(doc && doc.exists) {
        setName(doc.data().name);
      }
      const catRef = colRef.doc(doc.id).collection('categories')
      catRef.get()
        .then(categoriesRef => categoriesRef.docs.map(categories => {
          if(categories && categories.exists) {
            setCategory(categories.data())
            categories.data().categoryName.map(category => {
              catRef.doc(categories.id).collection(category).get()
                .then(specCat => specCat.docs.map(data => {
                  setData(data.data())
                }))
            })
          }
        }))
    }))
    .then(data =>
      dispatch({
        type: FETCH_DATA,
        payload: data
      })
    );
};

export const createTopFolder = postData => dispatch => {
  colRef.add({name: postData})
    .then(post =>
      dispatch({
        type: NEW_TOP_FOLDER,
        payload: post
      })
    );
};