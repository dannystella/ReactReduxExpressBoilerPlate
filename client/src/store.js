import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import {generalReducer} from './modules/users/reducers/index_userReducers';

const appReducer = combineReducers({
  users: generalReducer
});

const rootReducer = ( state, action ) => {
  return appReducer(state, action)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
)

module.exports = store;
