import { readContacts } from '../utils/readContacts.js';

export const countContacts = async (number) => {
  try {
    const currentContacts = await readContacts();
    return currentContacts.length;
  } catch (err) {
    console.log('Помилка при підрахунку контактів:', err);
  }
};

console.log(await countContacts());
