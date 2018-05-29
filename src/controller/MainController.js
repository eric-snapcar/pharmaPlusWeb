import React from 'react';
import {Button,ControlGroup,InputGroup, Intent} from "@blueprintjs/core";
import CarteVitaleController from './CarteVitaleController';
export default class MainController extends React.Component {
  constructor(props){
    super(props)
    this.state = {email:null}
  }
  render() {
    return (
      <div className="mainController">
        <CarteVitaleController />
      </div>
    );
  }
}
