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
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
          if(callback != null){
              callback(error);
          }else {
            if(error ){
                console.log(error);
            }
          }
      });
    }
    static signOut(callback){
      firebase.auth().signOut().then(function() {
      }).catch(function(error) {
        if(callback){
          callback(error);
        }else{
          if(error ){
              console.log(error);
          }
        }
      });
    }
}
