import React from 'react';
import {Button,ControlGroup,InputGroup, Intent} from "@blueprintjs/core";
import * as firebase from 'firebase';
import CarteVitale from '../object/CarteVitale';
export default class CarteVitaleController extends React.Component {
  constructor(props){
    super(props)
    this.state = {carteVitales:null};
    var carteVitaleRef = firebase.database().ref("carte_vitale");
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
    carteVitaleRef.on("value", callback_, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }
  onValidate(carteVitale){
    console.log(carteVitale);
  }
  render() {
    return (
      <div className="carteVitaleController">
        <h2>Carte Vitale</h2>
        <table>
        {this.state.carteVitales && this.state.carteVitales.map(function(carteVitale, idx){
        return (
          <CarteVitaleCell carteVitale={carteVitale} onValidate={this.onValidate} />
        )
      },this)}
      </table>
      </div>
    );
  }
}
class CarteVitaleCell extends React.Component {
  render(){
    return  (
        <div className="carteVitaleTableRow">
          <div>
            <div className="title">{this.props.carteVitale.email}</div>
            <div className="details">{this.props.carteVitale.imageUrl}</div>
            <div className="carteVitaleTableRowButtons" >
              <Button className="pt-small"  onClick={() => this.props.onValidate(this.props.carteVitale)}>Validate</Button>
            </div>
          </div>
        </div>
    )
  }
}
