import * as contactsApi from '../../services/contactsApi';
import * as formActions from './form-actions';

export const fetchContacts = () => async dispatch => {
    dispatch(formActions.fetchContactRequest())

    try {
        const contacts = await contactsApi.fetchContacts();
        dispatch(formActions.fetchContactSuccess(contacts));
    } catch (error) {
        dispatch(formActions.fetchContactError(error));
    }
};