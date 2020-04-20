import { FETCH_DATA, NEW_TOP_FOLDER, NEW_PROJECT, NEW_SONG } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        items: action.payload
      };
    case NEW_TOP_FOLDER:
      return {
        ...state,
        item: action.payload
      };
    case NEW_PROJECT:
      return {
        ...state,
        item: action.payload
      };
    case NEW_SONG:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}