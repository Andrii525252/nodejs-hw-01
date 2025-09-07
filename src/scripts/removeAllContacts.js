import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = writeContacts([]);
    return contacts;
  } catch (error) {
    console.error('Remove All Contacts');
    throw error;
  }
};

removeAllContacts();
