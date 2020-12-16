import logo from '../../assets/BL_logo_square_png.png';
import './home.css';
import React from 'react';

class Home extends React.Component{
    url = 'https://www.bridgelabz.com/'
    nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}")
    constructor(){
      super()
      this.state = {
        userName: '',
        nameError:''
      }
    }
    onClick = ($event) => {
      console.log("save button is clicked!", $event);
      window.open(this.url, "_blank");
    }
    onNameChange = (event) => {
      console.log("value is ", event.target.value);
      this.setState({userName: event.target.value});
      if (this.nameRegex.test(event.target.value)){
        this.setState({nameError: ''});
      }
      else{
        this.setState({nameError: 'Name is invalid!'});
      }
    }
    render(){
      return (
        <div className="app-main">
          <div className="main">
            <div>
              <h1>Hello {this.state.userName} from Bridgelabz</h1>
              <img src={logo} onClick = {this.onClick}
                alt="The Bridgelabz logo: a Bridge to Employment through lab works"></img>
            </div>
            <div className="text-box">
              <input onChange={this.onNameChange}></input>
              <span className="error-output">{this.state.nameError}</span>
            </div>
            <div>
              <p>At BridgeLabz, we're a techie community of</p>
              <ul>
                  <li>technologists</li>
                  <li>thinkers</li>
                  <li>builders</li>
              </ul>
              <p>
                  Working together to keep the Tech Employability of Engineers
                  alive and accessible, so Tech Companies worldwise can get contributors and creators
                  for  Technology Solutions. We belive this act of human collaboration across an Employability
                  platform is essential to individual growth and our collective future.
              </p>
              <p>
                  To know about us, visit to <a href={this.url} target="_blank">BridgeLabz</a> learn even more about our mission i.e <b>Employability to All</b>.
              </p>
            </div>
          </div>
        </div>
          
      );
    }
  }
  
  export default Home;