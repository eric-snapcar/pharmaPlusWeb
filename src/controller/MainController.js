import React from 'react';
import * as firebase from 'firebase';
import moment from 'moment';
import Location from '../object/Location';
export default class MainController extends React.Component {
  constructor(props){
    super(props)
    var db = firebase.database();
    this.state = {locations:null}
    var usersRef = db.ref("users");
    usersRef.on("value", function(snapshot) {
        console.log(snapshot.val());
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });

    //

    var locationBackgroundRef = db.ref("locationBackground");
    let callback = function(snapshot) {
        let snapshotValue = snapshot.val()
        let locations = []
        for (var key in snapshotValue) {
          let location = new Location(snapshotValue[key]);
          locations.push(location);
        }
        this.setState({locations:locations});
    }
    callback = callback.bind(this);
    locationBackgroundRef.on("value", callback, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }
  render() {
    console.log(this.state.locations);
    return (
      <div className="mainController">
      MAIN
          {this.state.locations && this.state.locations.map(function(location, idx){
          return (
            <div>
            {this.display( new Date(location.timestamp * 1000))}
             </div>
          )
        },this)}
      </div>
    );
  }
  display(date){
  return moment(date).format('dddd D MMMM h:mm');
  }
}
