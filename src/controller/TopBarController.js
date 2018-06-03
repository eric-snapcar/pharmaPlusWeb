import React from 'react';
import {Button,ControlGroup,InputGroup, Intent} from "@blueprintjs/core";
import FirebaseService from '../service/FirebaseService';
export default class TopBarController extends React.Component {
  constructor(props){
    super(props)
    // this.state = {email:null}
  }
  logOut(){
    FirebaseService.signOut((error) =>{
        if(error){
          console.log(error);
        }
    }
  );
  }
  render() {
    return (
      <div className="topBarController">
      <img className="loginControllerSnapcarIcon" src="/static/logo.svg" onClick={() => this.logOut()} alt="" />
      </div>
    );
  }
}
