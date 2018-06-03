import React from 'react';
import {Button,ControlGroup,InputGroup, Intent} from "@blueprintjs/core";
import * as firebase from 'firebase';
export default class TopBarController extends React.Component {
  constructor(props){
    super(props)
    // this.state = {email:null}
  }
  logOut(){
      firebase.auth().signOut().then(function() {
          console.log("signOut OK");
      }).catch(function(error) {
          console.log(error);
      });
  }
  render() {
    return (
      <div className="topBarController">
      <img className="loginControllerSnapcarIcon" src="/static/logo.svg" onClick={() => this.logOut()} alt="" />
      </div>
    );
  }
}
