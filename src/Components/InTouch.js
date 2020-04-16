import React from 'react';
import '../assets/Css/InTouch.scss';
import  {faEnvelope,faMapMarkerAlt,faPhoneAlt,faGlobe} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function InTouch() {
    return (
        <div className="InTouchBanner1">
            <div className="InTouchBanner2">
                <p className="InTouchBannerheading">Get In Touch</p>
                <p className="InTouchText1">Our mission is to deliver reliable, latest news and opinions</p>
                <div className="InTouchContainer">
                <div className="InTouch">
                
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <p className="InTouchText">#123, 5th Avenue, 8th Main, opposite ABC Hotel</p>
                </div>
                <div className="InTouch">
                <FontAwesomeIcon icon={faGlobe} />
                <p className="InTouchText">www.abcd.com<br/>www.abcd.com </p>
                </div>
                <div className="InTouch">
                <FontAwesomeIcon icon={faEnvelope} />
                <p className="InTouchText">Sales@icicicards.com <br/>creditcard@icicibank.com </p>
                </div>
                <div className="InTouch">
                <FontAwesomeIcon icon={faPhoneAlt} />
                <p className="InTouchText">+91-1235467895 <br/>+91-04-56323538</p>
                </div>
</div>
</div>
</div>
    );
  }
  export default InTouch;