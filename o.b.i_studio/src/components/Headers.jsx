import Logo from "./Logo";
import OBI_logo from "../Images/OBI_logo.gif";
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
//Above is example of how we use the boostrap in react.js 

const Header = () => {
    return(
        <Navbar bg="light" expand="lg">
        <Container>
            
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            
            <img width="200" height="200" className="d-inline-block"src={OBI_logo} alt="O.B.I Logo"/>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

    )
}

export default Header;