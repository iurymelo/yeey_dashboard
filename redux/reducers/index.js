import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import lojaReducer from "./lojaReducer";

const rootReducer = combineReducers({
  loja: lojaReducer,
  form: formReducer,
});

export default rootReducer;