const jwt = require('jsonwebtoken')
const crypto = require('crypto') //criptografia

function criarToken(usuario){
  const payload = {
    id: usuario.id
  };

  return jwt.sign(payload, process.env.JWT_KEY, {expiresIn: '15m'})
}

module.exports = criarToken

