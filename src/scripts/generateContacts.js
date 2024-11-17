import { createFakeContact } from '../utils/createFakeContact.js';

import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const currentContacts = await readContacts();
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }
    const updatedContacts = [...currentContacts, ...newContacts];
    await writeContacts(updatedContacts);
    console.log(`${number} нових контактів успішно додано`);
  } catch (err) {
    console.log('Помилка при генераціі контактів:', err);
  }
};

generateContacts(5);
