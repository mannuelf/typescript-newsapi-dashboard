import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { articlesReducer } from './reducers/articles';

export const store = createStore(
  combineReducers({
    articles: articlesReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
