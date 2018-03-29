import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewRestaurant from './NewRestaurant';
import Restaurants from './Restaurants';
import './Application.css';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  //when dom loads
  componentDidMount() {
    //when auth state changes
      //whenever user logged in/logged out
        //returns a promise
          auth.onAuthStateChanged((currentUser) => {
            //console.log(currentUser)//gives us object with current user info(gmail,name,photo,etc..)
            this.setState({
              //set state of current user to info from currently
                //logged in or logged out user
                  currentUser
            })
          })
  }

  render() {
    const { currentUser } = this.state;
    
    return (
      <div className="Application">
        <header className="Application--header">
          <h1>Lunch Rush</h1>
        </header>
        <div>
          {/* Add 'SignIn' component to app*/}
          {/* Show sign in button if user is not logged in */}
            {!currentUser && <SignIn />}
          {/* If user is logged in show his info */}
            {currentUser && <CurrentUser user={currentUser} />}
        </div>
      </div>
    );
  }
}

export default Application;
