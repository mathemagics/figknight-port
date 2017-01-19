import { combineReducers } from 'redux';
import mainReducer from './main_reducer';

const rootReducer = combineReducers({
  mainSlides: mainReducer,
});

export default rootReducer;
