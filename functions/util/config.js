const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyC7cczCLcwmP7rG4oP6HYPcUK5rTKMdro0",
  authDomain: "pc-api-6428177944420861021-845.firebaseapp.com",
  projectId: "pc-api-6428177944420861021-845",
  storageBucket: "pc-api-6428177944420861021-845.appspot.com",
  messagingSenderId: "360941968942",
  appId: "1:360941968942:web:57e3282e2d8739773049bf",
  measurementId: "G-ZX5HKZZ72L",
};

firebase.initializeApp(firebaseConfig);

module.exports = { firebase, firebaseConfig };
