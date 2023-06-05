import axios from 'axios';
import { fetchingInProgress, fetchingSuccess, fetchingError } from './slice';

axios.defaults.baseURL = 'https://647dd937af984710854a773a.mockapi.io';

export const fetchContacts = () => async dispatch => {
    try {
      dispatch(fetchingInProgress());
        const response = await axios.get('/contacts');
           dispatch(fetchingSuccess(response));
    } catch (error) {
         dispatch(fetchingError(error.message));
  }
};
