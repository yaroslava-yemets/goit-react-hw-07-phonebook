import { createAction } from '@reduxjs/toolkit'
import shortid from 'shortid';

export const addContact = createAction('contacts/add', (name, number) => ({
    payload: {
        id: shortid.generate(),
        name,
        number,
    },
}));

export const deleteContact = createAction('contacts/delete');

export const changeFilter = createAction('contacts/changeFilter');



// ======  actions for fetch

// export const fetchContactRequest = createAction('contacts/fetchContactRequest');
// export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
// export const fetchContactError = createAction('contacts/fetchContactError');

