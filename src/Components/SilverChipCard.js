import React from "react";
import "../assets/Css/SilverChipCard.scss";

function SilverChipCard() {
  return (
    <div className="SilverChipCardBanner">
      <div className="SilverChipCardCard">
        <div className="SilverChipCardCard1">
          <p className="SilverChipCardCard1text1">Silver Chip Credit Card</p>
          <p className="SilverChipCardCard1text2">
            {" "}
            ICICI Bank makes online payments safe and easy, with a new virtual
            card for each place you pay online.
          </p>
          <a href="#apply">Apply Now</a>
        </div>
      </div>
    </div>
  );
}
export default SilverChipCard;
