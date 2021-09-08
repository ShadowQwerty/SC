
  var firebaseConfig = {
    apiKey: "AIzaSyBjmWHeY98N_cTK5njt921jMqZOFUyw6KU",
    authDomain: "fir-135ee.firebaseapp.com",
    databaseURL:"https://fir-135ee-default-rtdb.firebaseio.com/",
    projectId: "fir-135ee",
    storageBucket: "fir-135ee.appspot.com",
    messagingSenderId: "662619496697",
    appId: "1:662619496697:web:5572300accdb2f79064228"
  };
  
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("Welcome").innerHTML="Welcome "+user_name+"!!!";
function Add_room() {
  room_name=document.getElementById("AddRoom").value;
  firebase.database().ref("/").child(room_name).update({Room_Name:"Chocolate"});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}

getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function Log_out(){
  window.location="index.html";
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
}