import React from 'react';
import ReactDOM from 'react-dom';
import RootController from './controller/RootController';
import * as firebase from 'firebase';
var config = {
  apiKey: "AIzaSyA6J9pwWx--tFULFe9zMg7WT2IiVX7gGYs",
  authDomain: "pharmaplus-782c8.firebaseapp.com",
  databaseURL: "https://pharmaplus-782c8.firebaseio.com",
  projectId: "pharmaplus-782c8",
  storageBucket: "pharmaplus-782c8.appspot.com",
  messagingSenderId: "191482422002"
};
firebase.initializeApp(config);
ReactDOM.render(<RootController />, document.getElementById('app'));
