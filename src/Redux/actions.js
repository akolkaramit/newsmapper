import { MY_API_KEY } from '../Data/secure_keys.js';

//////  https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=731a2e32c6c84f2991b56f3a220b1a58
//////  https://newsapi.org/v2/everything?sources=abc-news&apiKey=731a2e32c6c84f2991b56f3a220b1a58
/////   https://newsapi.org/v2/top-headlines?country=us&apiKey=731a2e32c6c84f2991b56f3a220b1a58
/////   https://newsapi.org/v2/everything?country=us&apiKey=731a2e32c6c84f2991b56f3a220b1a58


// ****************************************************************************************
// **************************************Action Names**************************************
export const SELECT_CHANNEL_COUNTRY = 'SELECT_CHANNEL_COUNTRY';
export const SELECT_CHANNEL_NAME = 'SELECT_CHANNEL_NAME';
// export const SELECT_COUNTRY = 'SELECT_COUNTRY';
export const REQUEST_NEWS= 'REQUEST_NEWS';
export const RECEIVE_NEWS= 'RECEIVE_NEWS';
// **************************************Action Names**************************************
// ****************************************************************************************

// export const getChannel = channel => ({
// type: SELECT_CHANNEL,
// channel,
// });

export const requestNews= (CountryOrChType, newsType, CountryOrChValue) => ({
  type: REQUEST_NEWS,
  CountryOrChType,
  newsType,
  CountryOrChValue
});

export const receivedNews= json => ({
  type: RECEIVE_NEWS,
  json: json.articles,
});


// 1. change loading
// 2. receive news
// 
// 
// 
// 

export function fetchNews(ndata) {
  if(ndata.type == 'country'){
    return function (dispatch) {
      dispatch(requestNews(ndata.type, 'top-headlines', {value: ndata.country.value, img: ndata.country.img, title: ndata.country.title}));
      // return fetch(`https://newsapi.org/v2/${ndata.newstype ? ndata.newstype : 'top-headlines'}?country=${ndata.country.value}&apiKey=${MY_API_KEY}`)
      return fetch(`https://newsapi.org/v2/top-headlines?country=${ndata.country.value}&apiKey=${MY_API_KEY}`)
      .then(
          response => response.json(),
          error => console.log('An error occurred.', error),
      )
      .then((json) => {
        // console.log("json: ",json)
          dispatch(receivedNews(json));
      });
    };
  } else {
    return function (dispatch) {
      dispatch(requestNews(ndata.type, ndata.newstype, {value: ndata.newspaper.value, img: ndata.newspaper.img, title: ndata.newspaper.title}));
      return fetch(`https://newsapi.org/v2/${ndata.newstype ? ndata.newstype : 'top-headlines'}?sources=${ndata.newspaper.value}&apiKey=${MY_API_KEY}`)
      .then(
          response => response.json(),
          error => console.log('An error occurred.', error),
      )
      .then((json) => {
          dispatch(receivedNews(json));
      });
    };
  }
}

// ====================================Select Type of All or Trending ===============================
export const RECEIVE_NEWS_TYPE = 'RECEIVE_NEWS_TYPE';

export const changenewstype = ntype => ({
  type: RECEIVE_NEWS_TYPE,
  ntype,
});

// TO change News Type All News or Top News
export function changeNewsType(ntype) {
    return function (dispatch) {
      dispatch(changenewstype(ntype));
    };
}


