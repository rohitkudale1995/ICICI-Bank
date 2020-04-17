import React, { Component } from 'react';

import SilverChip from './SilverChip';
import SilverChipCard from './SilverChipCard';
import PlatinumChip from './PlatinumChip';
import PlatinumChipCard from './PlatinumChipCard';
import Header from './Header';
import ApplyNow from './ApplyNow';
import OurFeatures from './OurFeatures';
import HappyClient from './HappyClient';
import InTouch from './InTouch';
import Footer from './Footer';

class MainPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        variant:this.props.variant,
        product:this.props.product
      }
    }

    card = () => {
    if(this.state.variant==="1" && this.state.product==="silver"){
        return ( <SilverChip/>);
    }else     if(this.state.variant==="2" && this.state.product==="silver") {
        return ( <SilverChipCard/>);
    }else   if(this.state.variant==="1" && this.state.product==="platinum"){
        return (<PlatinumChip/>);
    }else     if(this.state.variant==="2" && this.state.product==="platinum") {
        return ( <PlatinumChipCard/>);
    }else{
        return ( <PlatinumChipCard/>);
    }
 };
    render() {
        console.log("props",this.props);
        return (
     <div>
        <Header/>
        <this.card/>
        <ApplyNow/>
        <OurFeatures/>
         <HappyClient/>
         <InTouch/>
         <Footer/>
     </div>
     
            );
    }
}
export default MainPage