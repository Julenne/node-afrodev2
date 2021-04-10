class CampoQtdMinima extends Error {
  contructor(campo){
    const mensagem = `O campo ${campo} tem que ter no minimo 8 caracteres!`
    super(mensagem);
    this.name = 'CampoQtdMinima';
    this.idError = 2;
  }
}

module.exports = CampoQtdMinima