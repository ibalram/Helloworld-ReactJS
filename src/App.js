import logo from './assets/BL_logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  url = 'https://www.bridgelabz.com/'
  constructor(){
    super()
    this.state = {
      title: 'Hello from Bridgelabz'
    }
  }
  onClick = ($event) => {
    console.log("save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
  render(){
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} onClick = {this.onClick}
          alt="The Bridgelabz logo: a Bridge to Employment through lab works"></img>
      </div>
    );
  }
}

export default App;
