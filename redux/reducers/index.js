import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import lojaReducer from "./lojaReducer";
import usuarioReducer from "./usuarioReducer";

const rootReducer = combineReducers({
  loja: lojaReducer,
  usuario: usuarioReducer,
  form: formReducer,
});

export default rootReducer;