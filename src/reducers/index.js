import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import mainReducer from './main_reducer';

const rootReducer = combineReducers({
  main: mainReducer,
  form: formReducer,
});

export default rootReducer;
