import { createAsyncThunk } from '@reduxjs/toolkit'
import * as contactsApi from 'services/contactsApi';
import { 
  addContactError, 
  addContactSuccess, 
  addContactRequest, 
  deleteContactError,
  deleteContactSuccess,
  deleteContactRequest,
  fetchContactsError,
  fetchContactsSuccess,
  fetchContactsRequest, 
} from './contacts-actions';

import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3000';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios.get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

export const addContact = (name, number) => dispatch => {
  const contact = {
      name,
      number,
  };

  dispatch(addContactRequest());

  axios.post('/contacts', contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  axios.delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const contacts = await contactsApi.fetchContacts();
//       return contacts;
//     } catch (error) {
//       return rejectWithValue(error)
//     }
//   },
// );

// export const addContact = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (name, number) => {
//     try {
//       const contacts = await contactsApi.addContact(name, number);
//       return contacts;
//     } catch (error) {
//       return error
//     }
//   },
// );


// ====  without redux thunk

// export const fetchContacts = () => async dispatch => {
//     dispatch(formActions.fetchContactRequest())

//     try {
//         const contacts = await contactsApi.fetchContacts();
//         dispatch(formActions.fetchContactSuccess(contacts));
//     } catch (error) {
//         dispatch(formActions.fetchContactError(error));
//     }
// };