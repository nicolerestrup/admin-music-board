import { 
  NEW_TOP_FOLDER, 
  FETCH_MENU_ITEMS_WITH_CATEGORIES, 
  FETCH_MENU_ITEMS_WITHOUT_CATEGORIES,
  GET_META_DATA
} from './types';
import * as firebase from 'firebase';


export const fetchMenuItems = () => async dispatch => {
  const firestore = firebase.firestore();
  const authId = firebase.auth().currentUser.uid
  const colRef = firestore.collection(authId);

  const getData = await colRef.get()
  getData.docs.map(async doc => {
    const catRef = await colRef.doc(doc.id).collection('categories').get()
    if(catRef.docs.length > 0) {
      catRef.docs.map(categories => {
        dispatch({
          type: FETCH_MENU_ITEMS_WITH_CATEGORIES,
          payload: {topFolder: doc.data(), category: categories.data()}
        })
      })
    } else {
      dispatch({
        type: FETCH_MENU_ITEMS_WITHOUT_CATEGORIES,
        payload: Object.values(doc.data())
      })
    }
  })
}

export const fetchMetaData = (topLevelDocId, categoryId, songName) => async dispatch => {
  const firestore = firebase.firestore()
  const authId = firebase.auth().currentUser.uid
  const colRef = firestore.collection(authId)
  
  const getMetaData = await colRef
    .doc(topLevelDocId)
    .collection('categories')
    .doc(categoryId)
    .collection(songName)
    .get()
    dispatch({
      type: GET_META_DATA,
      metaData: getMetaData.docs[0].data()
    })
}

export const createTopFolder = name => async dispatch => {
  const firestore = firebase.firestore();
  const authId = firebase.auth().currentUser.uid
  const colRef = firestore.collection(authId);
 
  await colRef.add({name})
  dispatch({
    type: NEW_TOP_FOLDER,
    payload: name
  })
};
