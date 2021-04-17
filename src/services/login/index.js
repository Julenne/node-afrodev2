const criarToken = require('../../shared/gerarToken')

module.exports = {
  login: (req, resp) => {
    const acessToken = criarToken(req.user);
    resp.set('Authorization', acessToken);
    resp.status(200).send();
  }
}