var firebaseConfig = {
      apiKey: "AIzaSyCl52mVozu_WyIPB05CRD8Mr84O7t-5I7I",
      authDomain: "kwitter-fc8c2.firebaseapp.com",
      databaseURL: "https://kwitter-fc8c2-default-rtdb.firebaseio.com",
      projectId: "kwitter-fc8c2",
      storageBucket: "kwitter-fc8c2.appspot.com",
      messagingSenderId: "744453561097",
      appId: "1:744453561097:web:bbb5e00426da17604a51d8",
      measurementId: "G-1NKMVW63WB"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
 function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value=""
}