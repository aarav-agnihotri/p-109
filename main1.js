
function addUser(){
    user_name = document.getElementById("user_name").value;
//store username in the local storage using-- setItem("user_name",user_name)

 localStorage.setItem("user_name",user_name)     ;
 
 window.location = "room2.html";
}