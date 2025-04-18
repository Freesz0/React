import './App.css';
import Header from './Header';
import Aside from './Aside';
import Main from './Main';
import CardContador from './CardContador';
import Footer from './Footer';
import Cep from './Cep'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import logo from './logo.svg';


function App() {
  const [menu, setMenu] = useState(0)

  return (
    <>
      {/* <> Fragment React - encapsula html */}

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand> <img className='App-logo' src={logo} width={50} alt=" logo "/> Minha App React  </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setMenu(1)}>Header</Nav.Link>
              <Nav.Link onClick={() => setMenu(2)}>Aside</Nav.Link>
              <Nav.Link onClick={() => setMenu(3)}>Simulador</Nav.Link>
              <Nav.Link onClick={() => setMenu(6)}>Consulta CEP</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => setMenu(4)}>Main</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setMenu(5)}>Footer</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {}
      {menu === 1 && <Header menu="sim"/>}
      {menu === 2 && <Aside
        prop1 = 'abc'
        prop2 = '123'/>}
      {menu === 3 && <CardContador/>}
      {menu === 4 && <Main/>}
      {menu === 5 && <Footer   
        insta="@marcosamiguel"
        whats="32 98401-5080"
      />}
      {menu === 6 && <Cep/>}


    </>
  );
}

export default App;
