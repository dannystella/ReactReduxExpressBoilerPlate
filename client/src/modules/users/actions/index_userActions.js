import axios from 'axios';
// import * as utils from '../../../utils/utils.js';

export const FETCH_PING = 'fetch_ping';

export const fetchPing = () => async(dispatch) => {
  try {
    const response = await axios.get('/ping');
    dispatch(
      {
        type: FETCH_PING,
        payload: response.data
      }  
    ) 
  }
  
  catch(e) {
    dispatch(
      {
        type: FETCH_PING,
        payload: "ERROR"
      }  
    ) 
  }

}