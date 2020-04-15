import React from 'react';
import '../assets/Css/InTouch.scss'
import location from '../assets/images/location.png'
import web from '../assets/images/web.png'
import Mail from '../assets/images/Mail.png'
import phone from '../assets/images/phone.jpg'
function InTouch() {
    return (
        <div className="InTouchBanner1">
            <div className="InTouchBanner2">
                <p className="InTouchBannerheading">Get In Touch</p>
                <p className="InTouchText1">Our mission is to deliver reliable, latest news and opinions</p>
                <div className="InTouchContainer">
                <div className="InTouch">
                <img src={location} ></img>
                <p className="InTouchText">#123, 5th Avenue, 8th Main, opposite ABC Hotel</p>
                </div>
                <div className="InTouch">
                <img src={web} ></img>
                <p className="InTouchText">www.abcd.com<br/>www.abcd.com </p>
                </div>
                <div className="InTouch">
                <img src={Mail} ></img>
                <p className="InTouchText">Sales@icicicards.com <br/>creditcard@icicibank.com </p>
                </div>
                <div className="InTouch">
                <img src={phone} ></img>
                <p className="InTouchText">+91-1235467895 <br/>+91-04-56323538</p>
                </div>
</div>
</div>
</div>
    );
  }
  export default InTouch;