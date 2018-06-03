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
}
