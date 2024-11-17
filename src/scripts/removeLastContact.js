import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const currentContacts = await readContacts();
    if (currentContacts.length > 0) {
      const newArray = currentContacts.slice(0, currentContacts.length - 1);
      await writeContacts(newArray);
      console.log('Останній контакт успішно видалений');
    } else {
      console.log('Немає контактів для видалення');
    }
  } catch (err) {
    console.log(err);
  }
};

removeLastContact();
