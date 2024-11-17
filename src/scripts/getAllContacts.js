import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const currentContacts = await readContacts();
    return currentContacts;
  } catch (err) {
    console.log('Помилка', err);
  }
};

const showContacts = async () => {
  const contacts = await getAllContacts();
  console.log(contacts);
};

showContacts();
