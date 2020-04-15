import React from 'react';
import '../assets/Css/HappyClient.scss';
import Carousel from 'react-bootstrap/Carousel';
import p1 from '../assets/images/p1.jpg';
import p2 from '../assets/images/p2.jpg';
import p3 from '../assets/images/p3.jpg';
import p4 from '../assets/images/p4.jpg';
import p5 from '../assets/images/p5.jpg';
function HappyClient() {
    
    return (
        <div className="HappyClientBanner1">
            <div className="HappyClientBanner2">
            <p className="HappyClientBannerheading">Our Happy Client</p>
            <Carousel>
             <Carousel.Item>
                <div className="HappyClientContainer1">
                <div className="HappyClient1">
                <img src={p1} ></img>
                <div className="HappyClientBorder">
                <p className="HappyClientText">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
                </div>
                <p className="HappyClientText2">Jonathan Vargas </p>
                <p className="HappyClientText1">CEO, GrayGrids</p>
                </div>
                <div className="OurFeatures2">
                <img src={p3} ></img>
                <div className="HappyClientBorder">
                <p className="HappyClientText">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
                </div>
                <p className="HappyClientText2">Jonathan Vargas </p>
                <p className="HappyClientText1">CEO, GrayGrids</p>
                </div>
                <div className="OurFeatures3">
                <img src={p4} ></img>
                <div className="HappyClientBorder">
                <p className="HappyClientText">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
                </div>
                <p className="HappyClientText2">Jonathan Vargas </p>
                <p className="HappyClientText1">CEO, GrayGrids</p>
                </div>
                </div>

   
  </Carousel.Item>
  <Carousel.Item>
             <div className="HappyClientContainer1">
                <div className="HappyClient1">
                <img src={p3} ></img>
                <div className="HappyClientBorder">
                <p className="HappyClientText">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
                </div>
                <p className="HappyClientText2">Jonathan Vargas </p>
                <p className="HappyClientText1">CEO, GrayGrids</p>
                </div>
                <div className="OurFeatures2">
                <img src={p1} ></img>
                <div className="HappyClientBorder">
                <p className="HappyClientText">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
                </div>
                <p className="HappyClientText2">Jonathan Vargas </p>
                <p className="HappyClientText1">CEO, GrayGrids</p>
                </div>
                <div className="OurFeatures3">
                <img src={p2} ></img>
                <div className="HappyClientBorder">
                <p className="HappyClientText">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
                </div>
                <p className="HappyClientText2">Jonathan Vargas </p>
                <p className="HappyClientText1">CEO, GrayGrids</p>
                </div>
                </div>
                </Carousel.Item>
  <Carousel.Item>
                <div className="HappyClientContainer1">
                <div className="HappyClient1">
                <img src={p2} ></img>
                <div className="HappyClientBorder">
                <p className="HappyClientText">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
                </div>
                <p className="HappyClientText2">Jonathan Vargas </p>
                <p className="HappyClientText1">CEO, GrayGrids</p>
                </div>
                <div className="OurFeatures2">
                <img src={p5} ></img>
                <div className="HappyClientBorder">
                <p className="HappyClientText">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
                </div>
                <p className="HappyClientText2">Jonathan Vargas </p>
                <p className="HappyClientText1">CEO, GrayGrids</p>
                </div>
                <div className="OurFeatures3">
                <img src={p3} ></img>
                <div className="HappyClientBorder">
                <p className="HappyClientText">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
                </div>
                <p className="HappyClientText2">Jonathan Vargas </p>
                <p className="HappyClientText1">CEO, GrayGrids</p>
                </div>
                </div>
              </Carousel.Item>
                </Carousel>
            </div>
        </div>
        
        );
      }
      export default HappyClient;