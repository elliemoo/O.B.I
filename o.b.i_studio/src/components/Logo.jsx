import OBI_logo from "../Images/OBI_logo.gif";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const Logo = () => {
    return(
        
        <div>
            <img className="App-logo"src={OBI_logo} alt="O.B.I Logo"/>
            <Button>Test Button</Button>
        </div>
        
    )
}

export default Logo;