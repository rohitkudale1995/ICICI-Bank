import React from 'react';
import '../assets/Css/PlatinumChipCard.scss'
import  {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function PlatinumChipCard() {
    return (
        <div className="PlatinumChipCardBanner">
            <div className="PlatinumChipCardCard1">
                <div className="PlatinumChipCardCardIn1"> 
                <p className="PlatinumChipCardCard1text1">Silver Chip Credit Card</p>
                <p className="PlatinumChipCardCard1text2">ICICI Bank makes online payments safe and easy, with a new virtual card for each place you pay online. </p>
                <button>Apply Now</button>
                </div>
            </div>
            <div className="PlatinumChipCardCard2">
            <div className="PlatinumChipCardCardIn2"> 
            <FontAwesomeIcon icon={faCheckCircle} />&nbsp;&nbsp;<p className="PlatinumChipCardCard1text2">  No Joining Fee. No Annual Fee</p>
            </div>
            <div className="PlatinumChipCardCardIn2"> 
            <FontAwesomeIcon icon={faCheckCircle} />&nbsp;&nbsp; <p className="PlatinumChipCardCard1text2">  Earn PAYBACK Points on your spends except fuel</p>
                </div>
                <div className="PlatinumChipCardCardIn2"> 
                <FontAwesomeIcon icon={faCheckCircle} />&nbsp;&nbsp;<p className="PlatinumChipCardCard1text2"> Min. 15% savings on dining at participating restaurants</p>
              </div>
              <div className="PlatinumChipCardCardIn2"> 
              <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;&nbsp;<p className="PlatinumChipCardCard1text2"> Save on 1% fuel surcharge , waived off at HPCL petrol pumps</p>
                </div>
                </div>
                </div>
      
        );
      }
      export default PlatinumChipCard;