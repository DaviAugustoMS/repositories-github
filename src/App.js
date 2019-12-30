import React, { Component } from 'react';
import Router from './routes';

import './global/global.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from './global/styles.global';


class App extends Component {
  render() {
    return (
      <Container>
        <Router/>
      </Container>
    );
  }
}

export default App;
