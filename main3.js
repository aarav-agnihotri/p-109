

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCSxHUCwl73cwnw85zBaQi-5bo5oEArcCE",
      authDomain: "letschatweb-app-adc12.firebaseapp.com",
      databaseURL: "https://letschatweb-app-adc12-default-rtdb.firebaseio.com",
      projectId: "letschatweb-app-adc12",
      storageBucket: "letschatweb-app-adc12.appspot.com",
      messagingSenderId: "766257870099",
      appId: "1:766257870099:web:56fb4d751f06c8bdd956e6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");




 function back(){
  window.location = "room2.html";
 }

 function send(){

//take the value of the text input from html-- document.getElementById('msg').value
 msg = document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
    }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;



//start code
    

console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+ name+"<img class='user_tick' src='logo.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="+ firebase_message_id+"value=" +like+"onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
row = name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+= row;










    //End code
} });  }); }
getData();

    //Add the code for the logout button
    
function logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");    
window.location="index.html";


}