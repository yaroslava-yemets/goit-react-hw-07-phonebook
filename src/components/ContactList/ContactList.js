import { connect, useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { contactsOperations, contactsSelectors } from 'redux/contactForm';
// import * as contactsAcrions from 'redux/contactForm/contacts-actions';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact, fetchContacts }) => {
    // const dispatch = useDispatch();
    // const contacts = useSelector(contactsSelectors.getContacts);

    // useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch])
    useEffect(() => {
        fetchContacts();
    }, []);
    
    return (
        <>
        {contacts.length > 0 && (
            <ul className={s.list}>
                {contacts.map(({ id, name, number }) => (
                    <li key={id} className={s.item}>
                        <span>{name}:</span>
                        <span>{number}</span>
                        <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
                    </li>
                ))}
            </ul>
        )}
        </>
    )
};


const getVisibleContacts = (allContacts, filter) => {
    const lowerCasedFilter = filter.toLocaleLowerCase();
    return allContacts.filter(contact => contact.name.toLocaleLowerCase().includes(lowerCasedFilter))
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
    contacts: getVisibleContacts(items, filter) 
});

const mapDispatchToProps = dispatch => ({
    onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
    fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    onDeleteContact: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
// export default ContactList ;