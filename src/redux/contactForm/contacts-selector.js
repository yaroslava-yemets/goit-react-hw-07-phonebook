export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.loading;
export const getFilter = state => state.contacts.filter;
export const getVisibleContacts = state => {
    const allContacts = getContacts(state);
    const filter = getFilter(state);
    const lowerCasedFilter = filter.toLocaleLowerCase();

    return allContacts.filter(contact => 
        contact.name.toLocaleLowerCase().includes(lowerCasedFilter));
};

// const getVisibleContacts = (allContacts, filter) => {
//     const lowerCasedFilter = filter.toLocaleLowerCase();
//     return allContacts.filter(contact => contact.name.toLocaleLowerCase().includes(lowerCasedFilter))
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//     contacts: getVisibleContacts(items, filter) 
// });