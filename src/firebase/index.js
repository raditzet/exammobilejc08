import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDBRpMvNzUr2LqF6d3raz6zuGhyXWRV52E",
  authDomain: "raditnjet-f4dc7.firebaseapp.com",
  databaseURL: "https://raditnjet-f4dc7.firebaseio.com",
  projectId: "raditnjet-f4dc7",
  storageBucket: "raditnjet-f4dc7.appspot.com",
  messagingSenderId: "7730290437",
  appId: "1:7730290437:web:dcdc0e877143756c"
};
  // Initialize Firebase
  export const Fire = firebase.initializeApp(firebaseConfig);