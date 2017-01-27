import {
  SET_SLIDE,
  TOGGLE_MODAL,
} from './types';

export const setSlide = (prev, cur) => {
  return {
    type: SET_SLIDE,
    payload: cur,
  };
};

export const toggleModal = (modalNumber) => {
  return {
    type: TOGGLE_MODAL,
    payload: modalNumber,
  };
};
