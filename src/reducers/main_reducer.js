import {
  SET_SLIDE,
} from '../actions';

const INITIAL_STATE = {
  slide: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SLIDE:
      return { ...state, slide: action.payload };
    default:
      return state;
  }
};
