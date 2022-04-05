import Logo from "./Logo";
import OBI_logo from "../Images/OBI_logo.gif";


//Above is example of how we use the boostrap in react.js 

const Header = () => {
    return(
        <div>
            hello this is testing 
            <img width="100" height="100" align="left" className="d-inline-block"src={OBI_logo} alt="O.B.I Logo"/>
        </div>
    )
}

export default Header;