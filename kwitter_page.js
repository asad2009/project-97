var firebaseConfig = {
    apiKey: "AIzaSyAjsnZr6Ek0Gz_18bIMuIVOBcPI0YO1-ow",
    authDomain: "kwitter-bc245.firebaseapp.com",
    databaseURL: "https://kwitter-bc245-default-rtdb.firebaseio.com",
    projectId: "kwitter-bc245",
    storageBucket: "kwitter-bc245.appspot.com",
    messagingSenderId: "109730007589",
    appId: "1:109730007589:web:92d04be93f950640d78dcc"
  };
  firebase.initializeApp(firebaseConfig);

  username=localStorage.getItem("username");
  roomname=localStorage.getItem("roomname");
  function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
          name:username,
          message:msg,
          like:0
      });
      document.getElementById("msg").value="";
  }
 function getdata(){
    firebase.database().ref("/"+roomname).on('value', function(snapshot) 
    { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot)
     { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") 
     { firebase_message_id = childKey; message_data = childData;
        
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
username1="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
message1="<h4 class='message_h4'>"+message+"</h4>";
like1="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+"onclick='updatelike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button>";
row=username1+message1+like1;
document.getElementById("output").innerHTML+=row;
     }});});}
getdata();
 

 function updatelike(message_id){
console.log("click on the like button-"+message_id);
liks=document.getElementById(message_id).value;
updatelikes=Number(liks)+1;
console.log(updatelikes);
firebase.database().ref(roomname).child(message_id).update({like:updatelikes});
 }
