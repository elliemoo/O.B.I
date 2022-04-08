
import React, { useState } from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavDropdown, NavLink, } from 'react-bootstrap';
import Logo from '../Images/OBI_logo.gif';
import {Link} from 'react-scroll';
import { HashLink } from 'react-router-hash-link';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import BrandLogos from './BrandLogos';

const scrollToRef = (ref) => window.scrollTo(0, ref.currnet.offsetTop)

const Header = () => {
  const NavExpand = () =>{

    if(window.location.pathname === '/') {
      return (
        <Navbar  onMouseLeave={handleLeave} className = {visible} bg='dark' variant='dark' sticky='top' expand="lg" >
        <Container fluid>
          <Nav Nav className='ms-2'>
            <Link to='About' offset={-86} className='nav-link'>About</Link>
            <Link to='RoadMap' offset={-86} className='nav-link'>Road Map</Link>              
          </Nav>
        </Container>
        </Navbar>
      )
    } 
  }
  const [visible, setVisible] = useState('d-none');

  const handleEnter = () => {
    setVisible((prevVisible) => (prevVisible = 'd-block'));
  };
  const handleLeave = () => {
    setVisible((prevVisible) => (prevVisible = 'd-none'));
  }
  

  return (
    <div className='sticky-top m-0 p-0'>
      
      <Navbar bg='dark' variant='dark' sticky='top' expand='md' >
        <Container fluid className='navbarInnerContainer'>
          
  
          <Navbar.Brand href='/' onMouseEnter={handleLeave} >
            <img height='60' className='d-inline-block ms-0 me-3' alt='obi logo' src={Logo}/>
          </Navbar.Brand>
          <Navbar.Brand href='/' onMouseEnter={handleEnter}>
            <div>O.B.I. Studio</div>
          </Navbar.Brand>

          <BrandLogos onMouseEnter={handleLeave}></BrandLogos>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav onMouseEnter={handleLeave} className='ms-2'>
              <Nav.Link href='/Art' className='nav-link'> Art </Nav.Link>
              {/* not displaying yet  */}
              {/* <Nav.Link href='/Team' className='nav-link'> Team </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <NavExpand/>

    </div>

  );
}

export default Header