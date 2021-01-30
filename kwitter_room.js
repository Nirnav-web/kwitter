var firebaseConfig = {
      apiKey: "AIzaSyBEyCYGVO-ZwC-JobgX-qsOYnOc3A99otc",
      authDomain: "kwitter-f9727.firebaseapp.com",
      projectId: "kwitter-f9727",
      storageBucket: "kwitter-f9727.appspot.com",
      messagingSenderId: "937896257323",
      appId: "1:937896257323:web:61a1d3cd154dcaeb6b876e",
      databaseURL="https://kwitter-f9727-default-rtdb.firebaseio.com"
    };
    var database = firebase.database();
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addRoom() {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"add username"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room_names"+Room_names);
       row="<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML=row;
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_room.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}