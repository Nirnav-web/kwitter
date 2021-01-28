
var firebaseConfig = {
      apiKey: "AIzaSyCl52mVozu_WyIPB05CRD8Mr84O7t-5I7I",
      authDomain: "kwitter-fc8c2.firebaseapp.com",
      projectId: "kwitter-fc8c2",
      storageBucket: "kwitter-fc8c2.appspot.com",
      messagingSenderId: "744453561097",
      appId: "1:744453561097:web:bbb5e00426da17604a51d8",
      measurementId: "G-1NKMVW63WB"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addRoom() {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"add username"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html"
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