
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
            
            <Link to='About' className='nav-link' spy={true} smooth={true}>About</Link>
            <Link to='Art' className='nav-link' spy={true} smooth={true}> Art </Link>
            <Link to="Team" className='nav-link' spy={true} smooth={true}> Team </Link>
            <Link to='RoadMap' className='nav-link' spy={true} smooth={true}>Road Map</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}

export default Header