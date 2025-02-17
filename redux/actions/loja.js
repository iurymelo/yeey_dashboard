import axios from '../../axios-config'
import * as actionTypes from '../actions/actionTypes'


export const fetchLojasFail = () => {
  return {
    type: actionTypes.FETCH_LOJAS_FAIL,
  };
};

export const fetchLojaSuccess = (listaLojas) => {
  return {
    type: actionTypes.FETCH_LOJAS_SUCCESS,
    listaLojas: listaLojas,
  }
};

export const fetchLojasStart = () => {
  return {
    type: actionTypes.FETCH_LOJAS_START,
    lojas: []
  }
};

export const fetchLojas = () => {
  return dispatch => {
    dispatch(fetchLojasStart());
    axios.get('/lojas.json')
      .then(res => {
          const fetchedLojas = [];
          for (let key in res.data) {
            if (!res.data[key].deleted) {
              fetchedLojas.push({
                ...res.data[key],
                id: key
              });
            }
          }
          dispatch(fetchLojaSuccess(fetchedLojas));
        }
      )
      .catch(err => {
        dispatch(fetchLojasFail(err))
      });
  }
};