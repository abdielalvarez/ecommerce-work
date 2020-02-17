const firebase = require('firebase');
const { config } = require('./index');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  projectId: String(config.projectId),
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

module.exports = {
  firebase,
  firestore,
  firebaseConfig,
};
