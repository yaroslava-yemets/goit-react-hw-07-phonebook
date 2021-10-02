import axios from "axios";
import shortid from 'shortid'; 

axios.defaults.baseURL = 'http://localhost:3000';

export async function fetchContacts() {
    console.log('fetch contacts');
    const { data } = await axios.get('/contacts');
    console.log(data);
    return data;
};

let id = shortid();

export async function addContact(name, number) {
    console.log('add contact');
    const response = await axios.post('/contacts', {
        id: `${shortid()}`,
        name,
        number,
      });
      console.log(response);
};

export async function deleteContact(id) {
    console.log('delete contact');
    const response = await axios.delete(`/contacts/${id}`)
    console.log(response);
};