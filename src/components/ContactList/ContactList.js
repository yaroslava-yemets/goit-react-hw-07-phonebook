import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { contactsOperations, contactsSelectors } from 'redux/contactForm';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact, fetchContacts }) => {
    useEffect(() => {
        fetchContacts();
    }, [fetchContacts]);
    
    return contacts.length > 0 && (
        <ul className={s.list}>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={s.item}>
                    <span>{name}:</span>
                    <span>{number}</span>
                    <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
};

const mapStateToProps = (state) => ({
    contacts: contactsSelectors.getVisibleContacts(state), 
});

const mapDispatchToProps = dispatch => ({
    onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
    fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    onDeleteContact: PropTypes.func.isRequired,
    fetchContacts: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);