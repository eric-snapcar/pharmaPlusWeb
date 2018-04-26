import React from 'react';
import {Button,ControlGroup,InputGroup, Intent} from "@blueprintjs/core";
import * as firebase from 'firebase';
export default class UserController extends React.Component {
  constructor(props){
    super(props)
    this.state = {carteVitales:null};
    var wakuUpsRef = firebase.database().ref("carte_vitale");
    let callback_ = function(snapshot) {
        let snapshotValue = snapshot.val()
        let wakuUps = []
        for (var key in snapshotValue) {
          wakuUps.push(snapshotValue[key].timestamp);
        }
        this.setState({wakuUps:wakuUps});
    }
    callback_ = callback_.bind(this);
    wakuUpsRef.on("value", callback_, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }
  render() {
    return (
      <div className="rootController">
        User
      </div>
    );
  }
}
