//AÑADE TUS ENLACES DE FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyC_vjL283rf6lf-XGrNApHexMOPghhzOSk",
    authDomain: "kwitter-6981d.firebaseapp.com",
    databaseURL: "https://kwitter-6981d-default-rtdb.firebaseio.com/",
    projectId: "kwitter-6981d",
    storageBucket: "kwitter-6981d.appspot.com",
    messagingSenderId: "378913752389",
    appId: "1:378913752389:web:6a095886c188d61066ea2c"
  };
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Inicio del código

   //Final del código
   });});}
getData();