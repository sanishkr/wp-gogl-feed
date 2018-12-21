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

function set_cookie(name, value) {
  document.cookie = name +'='+ value +'; Path=/;';
}
var delete_cookie = function(name) {
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
const RedLogoutPicture = "https://img.icons8.com/color/180/shutdown.png";
var forceMyOwnLogout = ((response) => {
  delete_cookie('MyGoogleID');
  if (window.gapi) {
      const auth2 = window.gapi.auth2.getAuthInstance()
      if (auth2 != null) {
          auth2.signOut().then(
              auth2.disconnect().then(this.props.onLogoutSuccess)
          )
      }
  }
  this.forceUpdate()
})
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
      set_cookie('MyGoogleID',response.googleId);
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
    delete_cookie('MyGoogleID');
    const auth2 = window.gapi.auth2.getAuthInstance()
    // if (auth2 != null) {
        auth2.signOut().then(
        auth2.disconnect().then(this.props.onLogoutSuccess)
      )
    // }
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
            onLogoutSuccess={this.logout}></GoogleLogout>
            // <img onClick={this.logout} src={RedLogoutPicture} alt="LO" width="100" />
            : <GoogleLogin
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