var firebaseConfig = {
    apiKey: "AIzaSyCIQLYqlROKiITOmI3VXLwzTAjgMvg8UpQ",
    authDomain: "test-78b83.firebaseapp.com",
    databaseURL: "https://test-78b83-default-rtdb.firebaseio.com",
    projectId: "test-78b83",
    storageBucket: "test-78b83.appspot.com",
    messagingSenderId: "708625814629",
    appId: "1:708625814629:web:f28b66d9a22ba4b104a28c",
    measurementId: "G-8B0KWMYRCK"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function AddUser(){
username=document.getElementById("username").value;
firebase.database().ref("/").child(username).update({
    purpose: "addingUser"
});
}
//ADD YOUR FIREBASE LINKS

