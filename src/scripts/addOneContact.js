import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async (number) => {
  try {
    const currentContacts = await readContacts();
    const newContact = createFakeContact();

    const updatedContacts = [...currentContacts, newContact];
    await writeContacts(updatedContacts);
    console.log('1 новий контакт успішно додано');
  } catch (err) {
    console.log('Помилка при генераціі контакту:', err);
  }
};

addOneContact(1);
