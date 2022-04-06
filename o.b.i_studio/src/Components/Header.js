
import React from 'react';
import { Container, Nav, Navbar, NavLink, } from 'react-bootstrap';
import Logo from '../Images/OBI_logo.gif';
import {Link} from 'react-scroll';

const scrollToRef = (ref) => window.scrollTo(0, ref.currnet.offsetTop)

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' sticky='top' expand="lg" collapseOnSelect >

      <Container fluid>
        <Navbar.Brand href='/' className='justify-content-center' >
          <img height='60' className='d-inline-block ms-0 me-3' alt='obi logo' src={Logo}/>
        </Navbar.Brand>
        <Navbar.Brand href='/' className='d-inline-block'>O.B.I Studio</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav className='ms-2'>
            
            <Link href='/' className='nav-link' to='About' spy={true} smooth={true}>About</Link>
            <Nav.Link href='Art'> Art </Nav.Link>
            <Nav.Link href='Team'> Team </Nav.Link>
            <Nav.Link>
              <Link to='RoadMap' spy={true} smooth={true}>Road Map</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}

export default Header