import React from 'react';
import '../assets/Css/PlatinumChip.scss'
import Group2833 from '../assets/images/Group 2833.png'
import Header from './Header'
function PlatinumChip() {
    return (
        <div className="Banner">
<Header/>
            <div className="Card">
                <div className="Card1"> 
                <p className="Card1text1">Platinum Chip Credit Card</p>
                <p className="Card1text2">ICICI Bank makes online payments safe and easy, with a new virtual card for each place you pay online.</p>
                </div>
                <div className="Card2"> 
                <img src={Group2833} alt="card"  ></img>
                </div>
            </div>
        </div>
        );
      }
      export default PlatinumChip;