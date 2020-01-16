import * as actionTypes from '../actions/actionTypes'

const initialState = {
  id: '',
  DadosCadastrais: {
    razaoSocial: '',
    cnpj: '',
    inscricaoEstadual: '',
    nomeFantasia: '',
    endereco: {
      endereco: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: '',
      telefonePrimario: '',
      telefoneSecundario: '',
      email: '',
    },
  }
};

export default (state = initialState, action) => {

  return state;
};