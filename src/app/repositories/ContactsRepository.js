const { uuid } = require('uuidv4');

const contacts = [{
  id: uuid(),
  name: 'Marco',
  email: 'marcoaring@marcoaring.com.br',
  phone: '21985979964',
  category_id: uuid(),
}];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
