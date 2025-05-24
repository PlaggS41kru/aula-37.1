const { Usuario } = require("../models/Usuario");

class RepositorioDeUsuario {
  buscarTodos() {
    return Usuario.buscarTodos();
  }

  criar(usuario) {
    return usuario.salvar();
  }

  buscarPeloEmail(email) {
    return Usuario.buscarPeloEmail(email);
  }

  deletar(id){
    return Usuario.deletarUmUsuario(id)
  }
}

module.exports = new RepositorioDeUsuario();
