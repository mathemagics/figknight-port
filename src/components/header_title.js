import React from 'react';


export default (props) => {
  return (
    <div className="header-title">
      <div className="header-text">{props.children}</div>
      <img
        alt={'fig'}
        src="https://s23.postimg.org/3khusqttn/fig.png"
        className="header-img"
      />
    </div>
  );
};
