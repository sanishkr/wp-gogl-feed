import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './Header';
import Carditem from './CardItem';
import { gClientId } from '../resources/react-config';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loginState: false,
      email: '',
      feeds : []
    }
    console.log("Current State",this.state);
    
  }
  responseGoogle = (response) => {
    console.log(response);
    //console.log(this.search(response.profileObj.email))
    if(response.googleId){
      this.setState({loginState: true,email:response.profileObj.email})
      this.search(this.state.email)
    }else{
      console.log("Login Failed",response)
    }
  }
  search(email){
    // console.log('Search Button Clicked',this.state.query);
    let url = `http://localhost:3001/getAllFeedsbasedOnUser/${email}`;
    //console.log(url);
    fetch(url,{
        method: 'GET'
    }).then(response=>response.json())
    .then(jsonObj=>{
      this.setState({feeds:jsonObj});
      console.log("Current State",this.state);
    });
  }
  logout = () => {
    this.setState({loginState: false,email:'', feeds: []})
    console.log("Logged out");
    console.log("Current State",this.state);
  }
  
  render() {
    return (
      <div>
        <Header/>
        <div className="container container-main">
        {
            (this.state.loginState) ?
            <GoogleLogout
            buttonText="Logout"
            onLogoutSuccess={this.logout}></GoogleLogout> : <GoogleLogin
            clientId={gClientId}
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
          />
        }


          <div className="card-deck">
            {this.state.feeds.map(item=>{
              return <Carditem feeditem={item} key={item._id} />
            })}
          </div>
          <div className="row">
            {/* <Router>
              <Switch>
                <Route exact path='/' component={dashboard} />
              </Switch>
            </Router> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;