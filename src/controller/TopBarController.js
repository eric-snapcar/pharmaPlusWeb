import React from 'react';
import {Button,ControlGroup,InputGroup, Intent} from "@blueprintjs/core";
export default class TopBarController extends React.Component {
  constructor(props){
    super(props)
    // this.state = {email:null}
  }
  render() {
    return (
      <div className="topBarController">
      <img className="loginControllerSnapcarIcon" src="/static/logo.svg"  alt="" />
      </div>
    );
  }
}
