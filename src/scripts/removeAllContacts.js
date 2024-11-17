import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await readContacts();
    const emptyArray = [];
    await writeContacts(emptyArray);
    console.log('Всі контакти успішно видалені.');
  } catch (err) {
    console.log('Помилка при видаленні контактів:', err);
  }
};

removeAllContacts();
