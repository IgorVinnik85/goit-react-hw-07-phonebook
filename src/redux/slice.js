import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContacts } from './operations';

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
    [deleteContacts.fulfilled]: (state, action) => {
      const idToDelete = action.payload;
      state.contacts = state.contacts.filter(
        contact => contact.id !== idToDelete
      );
    },
  },
});

// export const { fillterContacts } = filterSlice.actions;
// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;
export const filterToolKit = filterSlice.reducer;
export const contactsToolKit = contactsSlice.reducer;
