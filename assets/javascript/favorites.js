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
    $("#favs").empty(); 
    var favorites = snapshot.child("users/" + email + "/favorites").val();
     console.log(favorites);
    for(var sha in favorites) {
        //console.log(favorites[sha]);
        let holder = $("<div>");
        $(holder).attr("class", "col-3");

        let image = $("<img>");
        $(image).attr("src", favorites[sha]);
        $(image).attr("alt", "Hilarious GIF!");

        let button = $("<button>");
        $(button).attr("class", "btn btn-danger btn-sm btn-block unfavorite");
        $(button).text("Unfavorite");

        $(holder).append(image);
        $(holder).append(button);
        $("#favs").prepend(holder);
    }
  });