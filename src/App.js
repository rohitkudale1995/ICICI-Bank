import React, { Component }  from 'react';
import './App.css'; 

import MainPage from './Components/MainPage';

class App extends Component {
constructor(props){
super(props);
}
render(){
  
  var Url=window.location.href.split("?");
  var Url2=Url[1].split("&");
  var product=Url2[0].split("=");
  var variant=Url2[1].split("=");
  return (
  <div>
   <MainPage product={product[1]} variant={variant[1]}></MainPage>
  </div>
  );
}
}
export default App;
