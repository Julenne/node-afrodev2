const express = require('express');
const routesAgendamentos = require('../routes/agendamentos');
const routesUsuario = require('../routes/usuarios');
const routesLogin = require('../routes/login');
const FormatoInvalido = require('../errors/FormatoInvalido')
const FormatosValidos = require('../Serializar').FormatosValidos;
const NaoEncontrado = require('../errors/NaoEncontrado');
const CampoInvalido = require('../errors/CampoInvalido');
const SerializarError = require('../Serializar').SerializarErro
const DadosNaoInformados = require('../errors/DadosNaoInformados')
const passport = require('../usuarios/autenticacao');
module.exports = () => {
  const app = express();

  app.use((req, resp, next) => {
    let formatoSolicitado = req.header('Accept')
    if(formatoSolicitado === '*/*'){
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
  app.use('/api', routesAgendamentos) // descrição da rota
  app.use('/api', routesLogin)
  app.use('/api', routesUsuario)

  app.use((error,req,resp,next) => {
    let status = 500;
    if(error instanceof CampoInvalido || error instanceof DadosNaoInformados){
      status = 400;
    }
    if(error instanceof FormatoInvalido ){
      status = 406;
    }
    if(error instanceof NaoEncontrado){
      status = 404;
    }
    serializarError = new SerializarError(
      resp.getHeader('Content-Type')
    )

    resp.status(status).send(
      serializarError.transformar({
        id: error.id,
        mensagem: error.message
      })
    )
  })

  return app;
}