import { 
  NEW_TOP_FOLDER, 
  FETCH_MENU_ITEMS_WITH_CATEGORIES,
  FETCH_MENU_ITEMS_WITHOUT_CATEGORIES 
} from '../actions/types';

const initialState = {
  topLevels: {},
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
        topLevels: {...state.topLevels, [action.payload]: { categories: [] }}
      };
      case FETCH_MENU_ITEMS_WITH_CATEGORIES:
        return {
          ...state,
          topLevels: {...state.topLevels, 
            [action.payload]: action.categories.categoryName}
        }
      case FETCH_MENU_ITEMS_WITHOUT_CATEGORIES:
        return {
          ...state,
          topLevels: {...state.topLevels, [action.payload]: { categories: [] }}
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