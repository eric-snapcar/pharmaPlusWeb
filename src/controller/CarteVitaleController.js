import React from 'react';
import {Button,ControlGroup,InputGroup, Intent, Spinner} from "@blueprintjs/core";
import * as firebase from 'firebase';
import CarteVitale from '../object/CarteVitale';
import TableLoading from '../component/Table';
export default class CarteVitaleController extends React.Component {
  constructor(props){
    super(props)
    this.state = {carteVitales:null};
    var carteVitaleRef = firebase.database().ref("carte_vitale").orderByKey();
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
        {this.state.carteVitales && this.state.carteVitales.map(function(carteVitale, idx){
            return (
              <CarteVitaleCell carteVitale={carteVitale} onValidate={this.onValidate} last={ idx == (this.state.carteVitales.length - 1) } />
            )
        },this)}
        {!this.state.carteVitales && <TableLoading/>}
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
        console.log(error);
    });
  }
  render(){
    return  (
        <div className={"carteVitaleCell" }>
            <div className="title">{this.props.carteVitale.email}</div>
            <div className="details">{this.props.carteVitale.descriptionDate()}</div>
            <div className="carteVitaleCellImageWrapper">
                { this.state.imageUrl && <img src={this.state.imageUrl}  alt="" />}
                { !this.state.imageUrl && <Spinner className="pt-small"/>}
            </div>
            <div className="carteVitaleCellButtons" >
              <Button className="pt-small"  onClick={() => this.props.onValidate(this.props.carteVitale)}>Valider</Button>
            </div>
        </div>
    )
  }
}
