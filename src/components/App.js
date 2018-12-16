import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './Header';
// import Carditem from './Carditem';
import { gClientId } from '../resources/react-config';

const responseGoogle = (response) => {
  console.log(response);
}
const logout = () => {
  console.log("Logged out");
}

class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div>
        <Header/>
        <div className="container container-main">
          <div className="card-deck">
            {/* {orderItems.map(item=>{
              return <Carditem order={item} key={item.id} />
            })} */}

            <GoogleLogin
              clientId={gClientId}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
            <GoogleLogout
              buttonText="Logout"
              onLogoutSuccess={logout}
            >
            </GoogleLogout>
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