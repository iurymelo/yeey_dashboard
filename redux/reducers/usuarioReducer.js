import * as actionTypes from '../actions/actionTypes'

const initialState = {
  usuarios: [],
};

const usuarioReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USUARIOS_START:
      return {
        usuarios: [],
      };

    case actionTypes.FETCH_USUARIOS_FAIL:
      return {
        ...state,
      };

    case actionTypes.FETCH_USUARIOS_SUCCESS:
      return {
        ...state,
        usuarios: state.usuarios.concat(action.listaUsuarios),
      };

    default:
      return state
  }
};

export default usuarioReducer;