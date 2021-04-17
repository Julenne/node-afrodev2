const Agendamento = require('../../services/agendamentos/Agendamento')
const SerializadorAgendamento = require('../../shared/Serializar').SerializarAgendamento;
const TabelaAgendamento = require('../../models/agendamentos/TabelaAgendamento')

module.exports = {
  criarAgendamento: async (req, resp, next) => {
    try{
        const reqAgendamento = req.body;
        const agendamento = new Agendamento(reqAgendamento);
        await agendamento.criar()
        resp.send(JSON.stringify(agendamento));
    } catch(error){
        next(error)
    }   
  },
  carregarAgendamento: async (req, resp, next) => {
    try {
        const id = req.params.idAgendamento;
        const agendamento = new Agendamento({id:id});
        await agendamento.buscar();
        resp.send(JSON.stringify(agendamento));
    } catch(error){
        next(error)
    }
  },

  carregarTodosAgendamentos: async (req, resp, next) => {
    try{
        const results = await TabelaAgendamento.listar()
        const serializador = new SerializadorAgendamento(
            resp.getHeader('Content-Type'),
            ['nome_servico','status']
        );
        agendamentos = serializador.transformar(results)
        resp.status(200).send(agendamentos);
    } catch(error) {
        next(error)
    }   
  },

  deletarAgendamento: async (req, resp, next) => {
    try{
        const id = req.params.idAgendamento;
        const agendamento = new Agendamento({id:id});
        await agendamento.remover();
        resp.status(204).send(JSON.stringify({
            mensagem: 'Registro removido'}))
    } catch(error){
        next(error)
    }
  },

  alterarAgendamento: async (req, resp, next) => {
    try {
        const id = req.params.idAgendamento;
        const dadosBody = req.body;
        const dados = Object.assign({}, dadosBody, {id:id})
        const agendamento = new Agendamento(dados);
        await agendamento.atualizar();
        resp.send();
    } catch (error){
        next(error)
    }
  }

}
