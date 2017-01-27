import {
  SET_SLIDE,
  TOGGLE_MODAL,
} from '../actions/types';

const INITIAL_STATE = {
  slide: 0,
  modal: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SLIDE:
      return { ...state, slide: action.payload };
    case TOGGLE_MODAL:
      return { ...state, modal: action.payload };
    default:
      return state;
  }
};
