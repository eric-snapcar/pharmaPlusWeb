import React from 'react';
import LoginController from './LoginController';
import MainController from './MainController';
import FirebaseAuthService from '../service/FirebaseAuthService';
import * as firebase from 'firebase';
export default class RootController extends React.Component {
  constructor(props){
    super(props)
    var config = {
      apiKey: "AIzaSyA6J9pwWx--tFULFe9zMg7WT2IiVX7gGYs",
      authDomain: "pharmaplus-782c8.firebaseapp.com",
      databaseURL: "https://pharmaplus-782c8.firebaseio.com",
      projectId: "pharmaplus-782c8",
      storageBucket: "pharmaplus-782c8.appspot.com",
      messagingSenderId: "191482422002"
    };
    this.state = {currentUser:null};
    firebase.initializeApp(config);
    FirebaseAuthService.observeAuth((currentUser) => {
        this.setState({currentUser : currentUser});
        if(currentUser ==  null){
            console.log("Not Logged In");
        }
    });
  }
  render() {
    return (
      <div className="rootController">
        {this.state.currentUser == null && <LoginController/>}
        {this.state.currentUser != null && <MainController/>}
      </div>
    );
  }
}
