import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { 
  addContactError, 
  addContactSuccess, 
  addContactRequest, 
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess, 
  changeFilter,
} from './contacts-actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) => state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, action) => action.payload,
  [addContactError]: (_, action) => action.payload,
  [deleteContactError]: (_, action) => action.payload,
});
  
export default combineReducers({
  items,
  filter, 
  loading, 
  error,
});


// =====  reducers for thunk

// const entities = createReducer([], {
//   [fetchContacts.fulfilled]: (_, action) => action.payload,
//   [addContact.fulfilled]: (state, { payload }) => [...state, payload],
// });


// const isLoading = createReducer(false, {
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
// })

// const error = createReducer(null, {
//   [fetchContacts.rejected]: (_, action) => action.payload,
//   [fetchContacts.pending]: () => null,
// })


// export default combineReducers({
//   entities,
//   isLoading,
//   error,
// });

