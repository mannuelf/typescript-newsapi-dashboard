import { AnyAction } from 'redux';
import {
  API_BASE_URL,
  API_END_POINT,
  API_KEY,
  API_VERSION,
} from 'config/config';
import { RootState } from 'store/store';

const initialState = {
  all: [],
};

export function articlesReducer(state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case ARTICLES_RECEIVED:
      return { ...state, all: payload };
    default:
      return state;
  }
}

// selectors, public interface to select data from the state
export const getArticles = (state: RootState) => state.articles.all;

// actions
export const ARTICLES_RECEIVED = 'articles/ARTICLES_RECEIVED';

// thunks
export function fetchArticles(query = 'tesla') {
  return async (dispatch: any, getState: any): Promise<void> => {
    const state = getState();
    query = state.search.search;
    console.log(`Fetching articles for ${query}`);

    const response = await fetch(
      `${API_BASE_URL}${API_VERSION}${API_END_POINT}?q=${query}&apiKey=${API_KEY}`
    )
      .then((response) => response.json())
      .catch((res) => console.error(`Server Error ${res.error.info}`))
      .finally(() => console.log('finished'));

    dispatch({ type: ARTICLES_RECEIVED, payload: response });
  };
}
