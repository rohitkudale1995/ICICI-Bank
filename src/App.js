import React from 'react';
import './App.css';
import PlatinumChip from './Components/PlatinumChip';
import Header from './Components/Header';
import ApplyNow from './Components/ApplyNow';
import OurFeatures from './Components/OurFeatures';
import HappyClient from './Components/HappyClient';
import InTouch from './Components/InTouch';
import Footer from './Components/Footer';
function App() {
  return (
    <div>
      <Header/>
    <PlatinumChip/>
  <ApplyNow/>
  <OurFeatures/>
  <HappyClient/>
  <InTouch/>
  <Footer/>
    </div>
  );
}

export default App;
