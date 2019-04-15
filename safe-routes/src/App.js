import React, { Component } from 'react';
import './App.scss';

// Style imports
import { Container } from './styles'

//Component imports
import Login from './views/Login'
class App extends Component {
  render() {
    return (
      <Container>
        <Login />
      </Container>
    );
  }
}

export default App;
