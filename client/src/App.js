import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from './BarGolfLogo.png'
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img src={logo} alt="Bar Golf Square Logo" width="50"/>
          {'  Bar Golf'}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/tournament">Tournaments</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default App;
