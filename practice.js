// Import the functions you need from the SDKs you need
import { initializeApp } from "firebaseapp";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC94Uz3Wyp2wpSRjs8-YdR6JVGa5M_4YFo",
  authDomain: "class-test-50711.firebaseapp.com",
  databaseURL: "https://class-test-50711-default-rtdb.firebaseio.com",
  projectId: "class-test-50711",
  storageBucket: "class-test-50711.appspot.com",
  messagingSenderId: "811032783212",
  appId: "1:811032783212:web:683c2e9981ff3938232b49"
};

// Initialize Firebase
const app = initializeApp(Config);
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}