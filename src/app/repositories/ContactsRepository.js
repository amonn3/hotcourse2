const { v4 } = require('uuid');

// eslint-disable-next-line prefer-const
let contacts = [
  {
    id: v4(),
    name: 'Amon',
    email: 'amon@mail.com',
    phone: '83 996175703',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Joshua',
    email: 'joshua@mail.com',
    phone: '82 999999999',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
