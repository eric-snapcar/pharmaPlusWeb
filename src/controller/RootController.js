import React from 'react';
import LoginController from './LoginController';
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
    var app = firebase.initializeApp(config);
    var db = firebase.database();
    var ref = db.ref("users");
    ref.on("value", function(snapshot) {
        console.log(snapshot.val());
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }
  render() {
    return (
      <div className="rootController">
        <LoginController/>
      </div>
    );
  }
}
