import React from 'react';
import {Button,ControlGroup,InputGroup, Intent} from "@blueprintjs/core";
import * as firebase from 'firebase';
import CarteVitale from '../object/CarteVitale';
export default class CarteVitaleController extends React.Component {
  constructor(props){
    super(props)
    this.state = {carteVitales:null};
    var wakuUpsRef = firebase.database().ref("carte_vitale");
    let callback_ = function(snapshot) {
        let snapshotValue = snapshot.val()
        let carteVitales = []
        for (var key in snapshotValue) {
          let json = snapshotValue[key];
          let carteVitale = new CarteVitale(json);
          carteVitales.push(carteVitale);
        }
        this.setState({carteVitales:carteVitales});
    }
    callback_ = callback_.bind(this);
    wakuUpsRef.on("value", callback_, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }
  render() {
    return (
      <div className="carteVitaleController">
        Carte Vitale
        {this.state.carteVitales && this.state.carteVitales.map(function(carteVitale, idx){
        return (
          <CarteVitaleCell carteVitale={carteVitale} />
        )
      },this)}
      </div>
    );
  }
}


class CarteVitaleCell extends React.Component {
  render(){
    return  (
      <div onClick={() => this.props.onClick(this.props.carteVitale)} >
        <div>{this.props.carteVitale.email}</div>
        <div>{this.props.carteVitale.imageUrl}</div>
    </div>)
  }
}
