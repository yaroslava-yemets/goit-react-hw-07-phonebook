import axios from "axios";
import shortid from 'shortid'; 

axios.defaults.baseURL = 'http://localhost:3000';

export async function fetchContacts() {
    console.log('fetch contacts');
    const { data } = await axios.get('/contacts');
    console.log(data);
    return data;
};

export async function addContact(contact) {
    console.log('add contact');
    const { data } = await axios.post('/contacts', contact);
    return data;
};

export async function deleteContact(id) {
    console.log('delete contact');
    const { data } = await axios.delete(`/contacts/${id}`)
    return data;
};