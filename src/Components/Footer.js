import React from "react";
import "../assets/Css/Footer.scss";
import Lsq from "../assets/images/Lsq Logo SVG2.svg";
function Footer() {
  return (
    <div className="FooterBanner1">
      <div className="FooterBanner2">
        <div className="FooterContainer">
          <div className="FooterContainer1">
            <p>© 2020 Leadsquared Money</p>
          </div>
          <div className="FooterContainer2">
            <div className="FooterContainerIn1">
              <p>Powered by</p>
            </div>
            <div className="FooterContainerIn2">
              <img src={Lsq} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
