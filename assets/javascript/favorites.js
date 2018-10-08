var config = {
    apiKey: "AIzaSyAmqBOMa3ihtUD1j1V0SEKpdaVx_N_y2l0",
    authDomain: "bored-hub.firebaseapp.com",
    databaseURL: "https://bored-hub.firebaseio.com",
    projectId: "bored-hub",
    storageBucket: "bored-hub.appspot.com",
    messagingSenderId: "589336015645"
  };
  firebase.initializeApp(config);
  var db = firebase.database();
  var email = "myfancyemail@gmailDOTcom";

  db.ref().on("value", function(snapshot) {
     var favorites = snapshot.child("users/" + email + "/favorites").val();
     console.log(favorites);
    for(var sha in favorites) {
        //console.log(favorites[sha]);
        
    }
  });