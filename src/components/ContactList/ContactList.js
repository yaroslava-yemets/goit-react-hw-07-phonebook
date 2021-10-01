import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as formActions from '../../redux/contactForm/form-actions';
import s from './ContactList.module.css';

const ContactList = ({contacts, onDeleteContact }) => (
    <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
            <li key={id} className={s.item}>
                <span>{name}:</span>
                <span>{number}</span>
                <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
        ))}
    </ul>
);


const getVisibleContacts = (allContacts, filter) => {
    const lowerCasedFilter = filter.toLocaleLowerCase();
    return allContacts.filter(contact => contact.name.toLocaleLowerCase().includes(lowerCasedFilter))
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
    contacts: getVisibleContacts(items, filter)
});

const mapDispatchToProps = dispatch => ({
        onDeleteContact: id => dispatch(formActions.deleteContact(id)),
});

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);