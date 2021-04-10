const express = require('express');
const router = require('../routes/agendamentos');
const FormatoInvalido = require('../errors/FormatoInvalido')
const FormatosValidos = require('../Serializar').FormatosValidos;
module.exports = () => {
  const app = express();

  app.use((req, resp, next) => {
    let FormatoSolicitado = req.header('Accept')
    if(FormatoSolicitado === '*/*'){
      formatoSolicitado = 'application/json'
    }
    if(FormatosValidos.indexOf(formatoSolicitado) === -1){ //-1 = não está
      resp.status(406);
      return resp.send();
    }

    resp.setHeader('Content-Type', formatoSolicitado);
    next();
  });

  app.use(express.json())
  app.use('/api', router) // descrição da rota

  return app;
}