const configExpress = require('./config/configExpress');
const config = require('config') //serve para pegar as variaveis de ambiente definidas em config/default.json

app = configExpress()

app.listen(config.get('api.port'), () => {
  console.log('Servidor Rodando');
})
