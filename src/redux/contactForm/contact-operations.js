import { createAsyncThunk } from '@reduxjs/toolkit'
import * as contactsApi from 'services/contactsApi';
import * as formActions from './form-actions';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await contactsApi.fetchContacts();
    return contacts;
  }
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