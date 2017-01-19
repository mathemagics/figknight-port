import React from 'react';
import Header from './header';

export default (props) => {
  // const fadeConfig = { stiffness: 200, damping: 22 };
  return (
    <div className="app">
      <div className="background-image" />
      <Header links={['Products', 'About Us', 'Contact']} />
      <div className="content">
        {props.children}
      </div>
    </div>
  );
};
