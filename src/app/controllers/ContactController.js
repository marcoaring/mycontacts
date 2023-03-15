class ContactController {
  index(request, response) {
    // listar todos os registros
    response.send('Send from contact controller');
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
