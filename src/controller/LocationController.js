import React from 'react';
import * as firebase from 'firebase';
import moment from 'moment';
import Location from '../object/Location';
import User from '../object/User';
export default class LocationController extends React.Component {
  constructor(props){
    super(props)
    var db = firebase.database();
    this.state = {locations:null,users:null,wakeUps:null}
    var usersRef = db.ref("users");
    usersRef.on("value", function(snapshot) {
        let snapshotValue = snapshot.val()
        let users = []
        for (var key in snapshotValue) {
          let user = new User(snapshotValue[key]);
          users.push(user);
        }
        this.setState({users:users});
    }.bind(this), function (errorObject) {
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


    var wakuUpsRef = db.ref("testLocationWakeUp");
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
    console.log(this.state.locations);
    return (
      <div className="mainController">
      MAIN
      <div>LOCATION</div>
          {this.state.locations && this.state.locations.map(function(location, idx){
          return (
            <div>
            {this.display( new Date(location.timestamp * 1000))}
             </div>
          )
        },this)}
        <div>USERS</div>
        {this.state.users && this.state.users.map(function(user, idx){
        return (
          <div>
          {user.email}
           </div>
        )
      },this)}
      <div>WAKE UP</div>
      {this.state.wakuUps && this.state.wakuUps.map(function(wakuUp, idx){
      return (
        <div>
        {this.display( new Date(wakuUp * 1000))}
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
