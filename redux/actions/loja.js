import axios from '../../axios-config'
import * as actionTypes from '../actions/actionTypes'
import Router from "next/router";

export const fetchLojasFail = () => {
  return {
    type: actionTypes.FETCH_LOJAS_FAIL,
  };
};

export const fetchLojaSuccess = (formData) => {
  return {
    type: actionTypes.FETCH_LOJAS_SUCCESS,
    formData: formData,
  }
};

export const fetchLojasStart = () => {
  return dispatch => {
    axios.get('/lojas.json')
      .then(res => {
        console.log(res);
          const fetchedLojas = [];
          for (let key in res.data) {
            fetchedLojas.push({
              ...res.data[key],
              id: key
            });
          }
          console.log('LOJAS FETCHED!!')
          console.log(fetchedLojas);
          dispatch(fetchLojaSuccess(fetchedLojas));
        }
      )
      .catch(err => {
        console.log(err)
        dispatch(fetchLojasFail());
      })
  }
};