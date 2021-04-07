const ModeloTabelaAgendamento = require('../agendamentos/modelTabelaAgendamento')
ModeloTabelaAgendamento.sync() //sincronizar
  .then(() => { //se der certo
    console('Tabela criada com sucesso')
  })
  .catch( // se der errado
    console.log('Erro, tabela não criada')
  );