import { createSlice } from '@reduxjs/toolkit';

const tasksInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    fillterContacts(state, action) {
      return action.payload;
    },
  },
});

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: tasksInitialState,
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fillterContacts } = filterSlice.actions;
export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;
export const filterToolKit = filterSlice.reducer;
export const contactsToolKit = contactsSlice.reducer;
