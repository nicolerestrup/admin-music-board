import { 
  NEW_TOP_FOLDER, 
  FETCH_MENU_ITEMS_WITH_CATEGORIES,
  FETCH_MENU_ITEMS_WITHOUT_CATEGORIES,
  GET_META_DATA
} from '../actions/types';

const initialState = {
  topLevels: {},
  metaData: {}
};

const example = {
  topLevels: {
    nicole: {
      categories: ['category1', 'category2']
      // categories: {
      //   category1: {
      //     title: "JAMMIN ON LOVE",
      //     fileMade: "2019-03-01",
      //     status: "on hold",
      //     link: "http://google.com",
      //     key: "C",
      //     ipi: 123,
      //     bpm: 92,
      //     artist: ['Nicole', 'Victor'],
      //     publishers: [
      //       "TONEFISH",
      //       "Someone"
      //     ],
      //   },
        // category2: {
        //  // ... 
        // }
      // }
    }
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_TOP_FOLDER:
      return {
        ...state,
        topLevels: {...state.topLevels, [action.payload]: {}}
      };
      case FETCH_MENU_ITEMS_WITH_CATEGORIES:
        return {
          ...state,
          topLevels: {
            ...state.topLevels, 
            [action.payload.topFolder.name]: {
              ...state.topLevels[action.payload.topFolder.name], 
              [action.payload.category.categoryName]: [action.payload.category.songs]
            },
          }
        }
      case FETCH_MENU_ITEMS_WITHOUT_CATEGORIES:
        return {
          ...state,
          topLevels: {...state.topLevels, [action.payload]: {}}
        }
      case GET_META_DATA:
        return {
          ...state,
          metaData: action.metaData
        }
    // case NEW_PROJECT:
    //   return {
    //     ...state,
    //     item: action.payload
    //   };
    // case NEW_SONG:
    //   return {
    //     ...state,
    //     item: action.payload
    //   };
    default:
      return state;
  }
}