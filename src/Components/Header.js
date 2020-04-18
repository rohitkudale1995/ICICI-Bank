
import '../assets/Css/Header.scss';
import logo from '../assets/images/icici_bank_logo_symbol.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import  {faCheckCircle,faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from "react";
import menu from '../assets/images/DropDown.png'


class Header extends Component {
  constructor(props) {
    super(props);
  }
 symbol=()=> {
    return( <FontAwesomeIcon icon={faBars} />);
    //return (<img src={menu}></img>)
  }
 render() {

    return (
      <div className="HeaderBanner1">
      <div className="HeaderBanner2">
          <div className="HeaderContainer">
          <div className="HeaderContainer1">
              <img src={logo} />
          </div>
          <div className="HeaderContainer2">
          <nav role="full-horizontal">
           <ul>
          <li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Payments</a></li>
        <a href="#">AboutUs</a></li>
    </ul>
</nav>
          </div>
          <div className="HeaderContainer3">
          <Navbar>
          <NavDropdown title={this.symbol()} id="basic-nav-dropdown">
    <div  className="dropdown nav-item">
        <NavDropdown.Item href="">Product</NavDropdown.Item>
        <NavDropdown.Item href="">Payments</NavDropdown.Item>
        <NavDropdown.Item href="">AboutUs</NavDropdown.Item>
        </div>
        </NavDropdown>
</Navbar>

            </div>
        </div> 
        </div>
     
      </div>
    );
  }
}
  export default Header;