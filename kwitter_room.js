
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAjsnZr6Ek0Gz_18bIMuIVOBcPI0YO1-ow",
      authDomain: "kwitter-bc245.firebaseapp.com",
      databaseURL: "https://kwitter-bc245-default-rtdb.firebaseio.com",
      projectId: "kwitter-bc245",
      storageBucket: "kwitter-bc245.appspot.com",
      messagingSenderId: "109730007589",
      appId: "1:109730007589:web:92d04be93f950640d78dcc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    username=localStorage.getItem("username");
    document.getElementById("user").innerHTML="Welcome  "+username+" !";
    function addroom(){
          Room_name=document.getElementById("roomname").value;
          firebase.database().ref("/").child(Room_name).update({purpose:"adding roomname"});
          localStorage.setItem("roomname",Room_name);
          window.location="kwiter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname="+Room_names);
row="<div id="+Room_names+"onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirect(name){
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
window.location="index.html";
}