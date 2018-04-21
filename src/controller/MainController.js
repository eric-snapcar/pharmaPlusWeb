import React from 'react';
import * as firebase from 'firebase';
import Location from '../object/Location';
export default class MainController extends React.Component {
  constructor(props){
    super(props)
    var db = firebase.database();
    var usersRef = db.ref("users");
    usersRef.on("value", function(snapshot) {
        console.log(snapshot.val());
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
    var locationBackgroundRef = db.ref("locationBackground");
    locationBackgroundRef.on("value", function(snapshot) {
        let snapshotValue = snapshot.val()
        for (var key in snapshotValue) {
          let location = new Location(snapshotValue[key]);
          console.log(location);
        }
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }
  render() {
    return (
      <div className="mainController">
      MAIN
      </div>
    );
  }
}
