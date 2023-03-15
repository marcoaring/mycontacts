const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // listar todos os registros
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  show() {
    // Obter um registro
  }

  store() {
    // Criar novo registro
  }

  update() {
    //  editar um registro
  }

  delete() {
    // deletar um registro
  }
}

// singleton
module.exports = new ContactController();
