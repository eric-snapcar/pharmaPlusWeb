import React from 'react';
import {Button,ControlGroup,InputGroup, Intent, Spinner} from "@blueprintjs/core";
import * as firebase from 'firebase';
import CarteVitale from '../object/CarteVitale';
import TableLoading from '../component/Table';
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
              <CarteVitaleCell carteVitale={carteVitale} onValidate={this.onValidate} last={ idx == (this.state.carteVitales.length - 1) } />
            )
        },this)}
        {!this.state.carteVitales && <TableLoading/>}
      </table>
      </div>
    );
  }
}

class CarteVitaleCell extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    var storageRef = firebase.storage().ref();
    storageRef.child(this.props.carteVitale.imageUrl).getDownloadURL().then(function(imageUrl) {

      this.setState({imageUrl:imageUrl});
    }.bind(this)).catch(function(error) {

    });
  }
  render(){
    console.log(this.state.imageUrl);
    return  (
        <div className={this.props.last ? "carteVitaleTableRow last" : "carteVitaleTableRow"}>
          <div>
            <div className="title">{this.props.carteVitale.email}</div>
            <div className="details">{this.props.carteVitale.imageUrl}</div>
            <img className="loginControllerSnapcarIcon" src={this.state.imageUrl}  alt="" />
            <div className={ "carteVitaleTableRowButtons"} >
              <Button className="pt-small"  onClick={() => this.props.onValidate(this.props.carteVitale)}>Validate</Button>
            </div>
          </div>
        </div>
    )
  }
}
