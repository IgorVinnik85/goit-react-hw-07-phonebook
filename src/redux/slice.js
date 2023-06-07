import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContacts, addContacts } from './operations';

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
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContacts.pending]: state => {
      state.isLoading = true;
    },
    [addContacts.fulfilled]: (state, action) => {
      state.contacts.push(action.payload);
      state.isLoading = false;
    },
    [addContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContacts.pending]: state => {
      state.isLoading = true;
    },
    [deleteContacts.fulfilled]: (state, action) => {
      const idToDelete = action.payload.id;
      state.contacts = state.contacts.filter(
        contact => contact.id !== idToDelete
      );
      state.isLoading = false;
    },
    [deleteContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fillterContacts, filltered } = filterSlice.actions;
export const filterToolKit = filterSlice.reducer;
export const contactsToolKit = contactsSlice.reducer;
