import logo from './assets/BL_logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      title: 'Hello from Bridgelabz'
    }
  }
  render(){
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} alt="The Bridgelabz logo: a Bridge to Employment through lab works"></img>
      </div>
    );
  }
}

export default App;
