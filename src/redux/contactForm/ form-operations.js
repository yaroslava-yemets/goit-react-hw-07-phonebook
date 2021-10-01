import * as contactsActions from './form-actions';

const fetchContacts = () => async dispatch => {
    dispatch(contactsActions.fetchContactRequest())

    
};