import { Link } from "react-router-dom";
import "./style.scss";


const Header = () =>(
  <header id="header" className="row align-items-center">
    
    <Link to="/">
      <div className="hamburger-box">
        <span></span>
      </div>
    </Link>
    <Link to="/">
      <div className="logo">
        <h1>Github Dashboard Sample</h1>
      </div>
    </Link>
  </header>
)

export default Header;