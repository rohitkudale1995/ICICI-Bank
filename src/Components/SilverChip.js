import React from "react";
import "../assets/Css/SilverChip.scss";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function SilverChip() {
  return (
    <div className="SilverChipBanner">
      <div className="SilverChipCard">
        <div className="SilverChipCard1">
          <p className="SilverChipCard1text1">Silver Chip Credit Card</p>
          <p className="SilverChipCard1text2">
            {" "}
            <FontAwesomeIcon icon={faCheckCircle} /> No Joining Fee. No Annual
            Fee
          </p>
          <p className="SilverChipCard1text2">
            <FontAwesomeIcon icon={faCheckCircle} /> Earn PAYBACK Points on your
            spends except fuel
          </p>
          <p className="SilverChipCard1text2">
            <FontAwesomeIcon icon={faCheckCircle} /> Min. 15% savings on dining
            at participating restaurants
          </p>
          <p className="SilverChipCard1text2">
            <FontAwesomeIcon icon={faCheckCircle} /> Save on 1% fuel surcharge,
            waived off at HPCL petrol pumps
          </p>
        </div>
        <div className="SilverChipCard12">
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
}
export default SilverChip;
