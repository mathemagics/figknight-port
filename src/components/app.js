import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header';

export default (props) => {
  // const fadeConfig = { stiffness: 200, damping: 22 };
  return (
    <MuiThemeProvider>
      <div className="app">
        <div className="background-image" />
        <Header links={['Fig Knight', 'Products', 'About Us', 'Contact']} />
        <div className="content">
          {props.children}
        </div>
      </div>
    </MuiThemeProvider>
  );
};
