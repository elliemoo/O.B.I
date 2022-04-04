import Logo from "./Logo";
import OBI_logo from "../Images/OBI_logo.gif";
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';

//Above is example of how we use the boostrap in react.js 

const Header = () => {
    return(
        <Navbar bg="light" expand="lg">
        <Container>
            
            <Navbar.Brand href="#home">
                 <img width="100" height="100" align="left" className="d-inline-block"src={OBI_logo} alt="O.B.I Logo"/>
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#About">About</Nav.Link>
                <Nav.Link href="#Art">Art</Nav.Link>
                <Nav.Link href="#MeetTheTeam">Meet The Team</Nav.Link>
                <Nav.Link href="#Roadmap">Roadmap</Nav.Link>
                <NavDropdown title="Social Media" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Twitter</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Discord</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Instagram</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">OpenSea</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

    )
}

export default Header;