import React, { Component }  from 'react';
import './App.css'; 

import MainPage from './Components/MainPage';

class App extends Component {
constructor(props){
super(props);
this.state={
  product:"",
   variant:""
}
}

 
path(){
 var pathName=window.location.href.toLowerCase();
  var Url=pathName.split("?");  
  if(Url.length>1){
  var Url2=Url[1].split("&");
  var v=Url2[1].split("=");
  var p =Url2[0].split("=");
  this.state.variant=v[1]
  this.state.product=p[1]
}
}
render(){
this.path();
  return (
  <div>
   <MainPage product={this.state.product} variant={this.state.variant}></MainPage>
  </div>
  );
}
}
export default App;
