import React from 'react';
import '../assets/Css/Header.scss'

function Header() {
    return (
      <div className="HeaderDiv">
        <div className="HeaderDivlogo">
            <ul>
            <li><a>Product</a></li>
            <li><a>Payments</a></li>
            <li><a>AboutUs</a></li>
            </ul>
          
        </div> 
      </div>
    );
  }
  export default Header;