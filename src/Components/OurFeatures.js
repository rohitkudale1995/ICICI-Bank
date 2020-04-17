import React from 'react';
import '../assets/Css/OurFeatures.scss'
import Group2236 from '../assets/images/Group 2236.svg'
import Group2238 from '../assets/images/Group 2238.svg'
import Group2197 from '../assets/images/Group 2197.svg'
import Group2195 from '../assets/images/Group 2195.svg'
import Group2182 from '../assets/images/Group 2182.svg'
function OurFeatures() {
    return (
        <div className="OurFeaturesBanner1">
            <div className="OurFeaturesBanner2">
                <p className="OurFeaturesBannerheading">Our Features</p>
                <div className="OurFeaturesContainer1">
                <div className="OurFeatures1">
                    <img src={Group2236} ></img>
<p>Smaller EMIs</p>
<p className="OurFeaturesText">Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a </p>
                </div>
                <div className="OurFeatures2">
                <img src={Group2238} ></img>
<p>No PrePayment Charges</p>
<p className="OurFeaturesText">Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a </p>
                </div>
                <div className="OurFeatures3">
                <img src={Group2197} ></img>
<p>Floating & Fixed Interest Rates</p>
<p className="OurFeaturesText">Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a </p>
</div>
</div>
<div className="OurFeaturesContainer2">
                
                <div className="OurFeatures4">
                <img src={Group2182} ></img>
<p>Minimum Loan Amount Rs. 3 Lakhs</p>
<p className="OurFeaturesText">Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a </p>
                </div>
                <div className="OurFeatures5">
                <img src={Group2195} ></img>
<p>Tenure up to 20 years&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
<p className="OurFeaturesText">Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a</p>
                </div>
                </div>
            </div>
    </div>
    );
  }
  export default OurFeatures;