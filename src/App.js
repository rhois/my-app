import React, { Component } from 'react';
import { Header } from './components/libraries/header/component';
import { AppRoute } from './components/router/component';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AppRoute />
      </div>
    );
  }
}

export default App;
