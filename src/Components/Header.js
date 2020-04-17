import React from 'react';
import '../assets/Css/Header.scss';
import logo from '../assets/images/icici_bank_logo_symbol.png'

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
        </div> 
        </div>
     
      </div>
    );
  }
  export default Header;