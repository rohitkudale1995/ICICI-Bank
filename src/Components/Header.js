import React from 'react';
import '../assets/Css/Header.scss';
import logo from '../assets/images/icici_bank_logo_symbol.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
function Header() {
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
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    <div  className="dropdown nav-item">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </div>
        </NavDropdown>
</Navbar>

            </div>
        </div> 
        </div>
     
      </div>
    );
  }
  export default Header;