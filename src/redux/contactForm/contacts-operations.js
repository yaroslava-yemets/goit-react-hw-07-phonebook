import { createAsyncThunk } from '@reduxjs/toolkit'
import * as contactsApi from 'services/contactsApi';
import shortid from 'shortid';
import * as formActions from './form-actions';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error)
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/fetchContacts',
  async (name, number) => {
    try {
      const contacts = await contactsApi.addContact(name, number);
      return contacts;
    } catch (error) {
      return error
    }
  },
);


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