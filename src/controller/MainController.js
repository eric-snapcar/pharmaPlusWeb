import React from 'react';
import {Button,ControlGroup,InputGroup, Intent} from "@blueprintjs/core";
import UserController from './UserController';
export default class MainController extends React.Component {
  constructor(props){
    super(props)
    this.state = {email:null}
  }
  render() {
    return (
      <div className="rootController">
        <UserController />
      </div>
    );
  }
}
