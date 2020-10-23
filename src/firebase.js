import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBbsSkutcEzPoOopF07HGwl_gJX6bQWqp0",
    authDomain: "whatsapp-clone-c7a05.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-c7a05.firebaseio.com",
    projectId: "whatsapp-clone-c7a05",
    storageBucket: "whatsapp-clone-c7a05.appspot.com",
    messagingSenderId: "391883392557",
    appId: "1:391883392557:web:234f36ffac5b0a0ebd5aa4",
    measurementId: "G-5N971DDXZE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;