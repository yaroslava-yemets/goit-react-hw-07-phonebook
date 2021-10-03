import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { contactsSelectors } from 'redux/contactForm';
import * as contactsActions from 'redux/contactForm/contacts-actions';
import shortid from 'shortid';
import s from './Filter.module.css';

const Filter = ({value, onChange}) => {
    const inputId = shortid.generate();
    const labeltId = shortid.generate();
    return (
    <>
        <div className={s.form}>
            <label htmlFor={labeltId} className={s.label}> Find contacts by name</label>
            <input className={s.input} id={inputId} type="text" value={value} onChange={onChange}/>
        </div>
    </>
    )
}    

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

const mapStateToProps = state => ({
    value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
    onChange: evt => dispatch(contactsActions.changeFilter(evt.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);