export const SET_SLIDE = 'SET_SLIDE';

export const setSlide = (prev, cur) => {
  return {
    type: SET_SLIDE,
    payload: cur,
  };
};
