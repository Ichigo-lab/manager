import React from 'react';
import { Container } from 'react-bootstrap'
import General from './components/general'
import Settings from './components/settings'
import Alerts from './components/alerts'


function App() {

  return (
    <Container>
      <General />
      <Settings />
      <Alerts />
    </Container>

  );
}

export default App;
