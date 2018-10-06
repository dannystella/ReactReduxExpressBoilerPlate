import { FETCH_PING } from '../actions/index_userActions.js';

const INITIAL_STATE = {
  message: ''
}

function generalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PING:
      return {...state, message: action.payload} 
    default: 
      return state;    
  }

}

export {generalReducer};