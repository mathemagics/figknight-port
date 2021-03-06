import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header';
import Modal from './modal';

export default (props) => {
  // const fadeConfig = { stiffness: 200, damping: 22 };
  return (
    <MuiThemeProvider>
      <div className="app">
        <Header links={['Alchemist', 'Products', 'About Us', 'Contact']} />
        <div className="content">
          {props.children}
        </div>
      </div>
    </MuiThemeProvider>
  );
};
