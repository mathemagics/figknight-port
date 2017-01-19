import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Main from './components/main';
import AboutUs from './components/about_us';
import Contact from './components/contact';
import Products from './components/products';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="aboutus" component={AboutUs} />
    <Route path="contact" component={Contact} />
    <Route path="products" component={Products} />
  </Route>
);
