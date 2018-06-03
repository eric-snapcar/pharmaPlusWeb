import User from '../object/User';
import * as firebase from 'firebase';
export default class FirebaseService {
    static observeAuth(callback){
      firebase.auth().onAuthStateChanged(function(firebaseUser) {
          if (firebaseUser) {
            let user = new User(firebaseUser);
            callback(user);
          } else {
            callback(null);
          }
      });
    }
    static createUser(email,password,callback){
        // TO DO
    }
    static signOut(callback){
      firebase.auth().signOut().then(function() {
      }).catch(function(error) {
        if(callback){
          callback(error);
        }else{
          console.log(error);
        }
      });
    }
}
