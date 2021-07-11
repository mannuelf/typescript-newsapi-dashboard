const initialState = {
  searchQuery: '',
  articles: [],
};

export function articlesReducer(state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_ARTICLES:
      return { ...state, searchQuery: payload.searchQuery };
    default:
      return state;
  }
}

// selectors
export const getSearchQuery = (state: IRootState) => state.searchQuery;

// actions
export const SEARCH_ARTICLES = 'articles/SEARCH_ARTICLES';

// action creators, public api for modifying the store
export const searchArticles = (searchQuery: string) => ({
  type: SEARCH_ARTICLES,
  payload: searchQuery,
});

// thunks