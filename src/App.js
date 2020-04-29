import React, { Component } from "react";
import "./App.css";

import MainPage from "./Components/MainPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: "",
      variant: "",
    };
  }
componentWillMount(){
  var pathName = window.location.href.toLowerCase();
  var v=[];
  var p=[];
  var url = pathName.split("?");
  if (url.length > 1)
   {
    var url2 = url[1].split("&");
    if(url2.length==1)
    {
      v.push("variant");
      v.push("1");
      p = url2[0].split("=");
      this.setState({variant:v[1],product:p[1]})
    }else

    if(url2.length==2)
    {
      v = url2[1].split("=");
      p = url2[0].split("=");
     this.setState({variant:v[1],product:p[1]})
      }
}
 
  }

  render() {
    
    return (
      <div>
        <MainPage
          product={this.state.product}
          variant={this.state.variant} />
      </div>
    );
  }
}
export default App;
