const { v4 } = require('uuid');

const contacts = [{
  id: v4(),
  name: 'Marco',
  email: 'marcoaring@marcoaring.com.br',
  phone: '21985979964',
  category_id: v4(),
}];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
