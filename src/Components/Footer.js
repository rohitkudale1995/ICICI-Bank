import React from 'react';
import '../assets/Css/Footer.scss'
import Lsq from '../assets/images/Lsq Logo SVG2.svg'
function Footer() {
    return (
        <div className="InTouchBanner1">
            <div className="InTouchBanner2">
                <div className="InTouchContainer">
                <div className="InTouchContainer1">
                    <p>© 2020 Leadsquared Money</p>
                </div>
                <div className="InTouchContainer2">
                <div className="InTouchContainerIn1">
                    <p>Powered by</p>
                </div>
                <div className="InTouchContainerIn2">
                     <img src={Lsq}/> 
                    </div>
                </div>
                </div>
            </div>
            </div>
    );
  }
  export default Footer;