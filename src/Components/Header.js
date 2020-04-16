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
          <div className="HeaderContainerIn1"><a>Product</a></div>
          <div className="HeaderContainerIn2"><a>Payments</a></div>
          <div className="HeaderContainerIn3"><a>AboutUs</a></div>
          </div>
        </div> 
        </div>
      </div>
    );
  }
  export default Header;