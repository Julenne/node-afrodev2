const ModeloTabelaAgendamento = require('../agendamentos/modelTabelaAgendamento')
const ModeloTabelaUsuario = require('../usuarios/modelTabelaUsuario')

ModeloTabelaAgendamento.sync() //sincronizar
  .then(() => { //se der certo
    console.log('Tabela criada com sucesso')
  })
  .catch((error) => { // se der errado
    console.log('Erro, tabela não criada', error)
  });

ModeloTabelaUsuario.sync() //sincronizar
  .then(() => { //se der certo
    console.log('Tabela criada com sucesso')
  })
  .catch((error) => { // se der errado
    console.log('Erro, tabela não criada', error)
  });