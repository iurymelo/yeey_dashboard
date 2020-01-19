import * as actionTypes from '../actions/actionTypes'

const initialState = {
  lojas: [],
};



const lojaReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LOJAS_SUCCESS:
      return {
        ...state,
        lojas: state.lojas.concat(action.formData)

      };

    case actionTypes.FETCH_LOJAS_FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default lojaReducer;