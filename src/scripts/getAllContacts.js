import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = readContacts();
    return contacts;
  } catch (error) {
    console.error('All Contacts');
    throw error;
  }
};

console.log(await getAllContacts());
