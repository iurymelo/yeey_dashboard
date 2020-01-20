import * as actionTypes from './actionTypes'
import axios from '../../axios-config'

export const fetchUsuariosFail = () => {
  return {
    type: actionTypes.FETCH_USUARIOS_FAIL
  }
};

export const fetchUsuariosSuccess = (listaUsuarios) => {
  return {
    type: actionTypes.FETCH_USUARIOS_SUCCESS,
    listaUsuarios: listaUsuarios,
  }
};

export const fetchUsuariosStart = () => {
  return {
    type: actionTypes.FETCH_USUARIOS_START,
    usuarios: [],
  }
};

export const fetchUsuarios = () => {
  return dispatch => {
    dispatch(fetchUsuariosStart());
    axios.get('/usuarios.json')
      .then(res => {
          const fetchedUsuarios = [];
          for (let key in res.data) {
            if (!res.data[key].deleted) {
              fetchedUsuarios.push({
                ...res.data[key],
                id: key
              });
            }
          }
          dispatch(fetchUsuariosSuccess(fetchedUsuarios));
        }
      )
      .catch(err => {
        dispatch(fetchUsuariosFail())
      });
  }
};