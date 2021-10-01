import * as contactsActions from './form-actions';
import * as contactsApi from '../../services/contactsApi';
import * as formActions from './form-actions';

const fetchContacts = () => async dispatch => {
    dispatch(contactsActions.fetchContactRequest())

    try {
        const contacts = await contactsApi.fetchContacts();
        dispatch(formActions.fetchContactSuccess(contacts));
    } catch (error) {
        dispatch(formActions.fetchContactError(error));
    }
};