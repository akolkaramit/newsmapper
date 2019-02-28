import { RECEIVE_NEWS_TYPE, REQUEST_NEWS, RECEIVE_NEWS } from './actions.js';

const reducer = (state = {}, action) => {
  switch (action.type) {
    // case SELECT_CHANNEL:
    //    return { ...state, channel: action.channel };
    case REQUEST_NEWS:
       return { ...state, loading: true, newsType: action.newsType, CountryOrChType: action.CountryOrChType, CountryOrChValue: {value: action.CountryOrChValue.value, img: action.CountryOrChValue.img, title: action.CountryOrChValue.title} };
    case RECEIVE_NEWS:
       return { ...state, allNewsData: action.json, loading: false };
    case RECEIVE_NEWS_TYPE:
       return { ...state, newsType: action.ntype };
    default:
       return state;
  }
};
export default reducer;

