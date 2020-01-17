import axios from '../../axios-config'
import * as actionTypes from '../actions/actionTypes'

export const cadastroLojaSuccess = ( formData ) => {
  return {
    type: actionTypes.CADASTRO_LOJA_SUCCESS,
    formData: formData,
  };
};


export const cadastroLojaStart = () => {
  return {
    type: actionTypes.CADASTRO_LOJA_START,
  };
};

export const cadastroLojaFail = ( error ) => {
  return {
    type: actionTypes.CADASTRO_LOJA_FAIL,
    error: error,
  };
}

export const cadastroLoja = ( formData ) => {
  return dispatch => {
    dispatch( cadastroLojaStart() );
    axios.post( '/orders.json' + formData )
      .then( response => {
        dispatch( cadastroLojaSuccess( response.data.name, formData ) );
      } )
      .catch( error => {
        dispatch( purchaseBurgerFail( error ) );
      } );
  };
};