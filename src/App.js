import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import * as LoadableRoutes from './routes'
import { Private, Guest } from './utils/Auth';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={LoadableRoutes.RegisterPage} />
       
      </Switch>
     </BrowserRouter>
    );
  }
}

export default App;
