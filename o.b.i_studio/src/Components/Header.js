
import React, { useState } from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import Logo from '../Images/OBI_logo.gif';
import {scroller} from 'react-scroll';
import BrandLogos from './BrandLogos';
import { Link, useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';


const Header = () => {
  
  // const NavExpand = () =>{

  //   if(window.location.pathname === '/') {
  //     return (
  //       <Navbar bg='dark' variant='dark' sticky='top' expand="lg" >
  //       <Container fluid>
  //         <Nav Nav className='ms-2'>
  //           <Link to='About' offset={-86} className='nav-link'>About</Link>
  //         </Nav>
  //       </Container>
  //       </Navbar>
  //     )
  //   } 
  // }
  // const [visible, setVisible] = useState('d-none');

  // const handleEnter = () => {
  //   setVisible((prevVisible) => (prevVisible = 'd-block'));
  // };
  // const handleLeave = () => {
  //   setVisible((prevVisible) => (prevVisible = 'd-none'));
  // }
  const [expanded, setExpanded] = useState("")

  return (
    <div className='sticky-top m-0 p-0'>
      
      <Navbar bg='dark' variant='dark' sticky='top' expand='md' >
        <Container fluid className='navbarInnerContainer'>
          <Navbar.Brand href='/' >
            <img height='60' className='d-inline-block ms-0 me-3' alt='obi logo' src={Logo}/>
          </Navbar.Brand>
          <Navbar.Brand href='/'>
            <div>O.B.I. Studios</div>
          </Navbar.Brand>
          <BrandLogos/>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? "" : " show")}/>
          <div className={`navbar-collapse collapse ${expanded}`}>
            <Nav className='ms-2'>
              <Link onClick={() => setExpanded('')} to='/#About' offset = {150} className='nav-link'>About</Link>
              <Nav.Link href='/Art' className='nav-link'> Art </Nav.Link>
              <Nav.Link href='/Team' className='nav-link'> Team </Nav.Link>
              <Nav.Link href='/RoadMap' className='nav-link'>Road Map</Nav.Link>
              <Nav.Link href='/LuckyBox' className='nav-link'>Lucky Box</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>

    </div>

  );
}

export default Header