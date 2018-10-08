
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAmqBOMa3ihtUD1j1V0SEKpdaVx_N_y2l0",
    authDomain: "bored-hub.firebaseapp.com",
    databaseURL: "https://bored-hub.firebaseio.com",
    projectId: "bored-hub",
    storageBucket: "bored-hub.appspot.com",
    messagingSenderId: "589336015645"
  };
  firebase.initializeApp(config);

  var emailTxt = $('#emailInput');
  var passTxt = $('#passwordInput');
  var subBtn = $('#realSignUpButton');
  var logIn = $('#logInButton');
  var logOut = $('#logOutButton');
  var favsBtn = $('#favsButton');


  //log in event
  logIn.on('click', function(e){
    e.preventDefault();
    //get email and password text
    var email = emailTxt.val().trim();
    var password = passTxt.val().trim();
    var auth = firebase.auth();
    //sign in
    var promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));

    //this should send user back to homepage after login
    //window.location.href="index.html";
  })

  //add signup event
  subBtn.on('click', function(e){
    e.preventDefault();
    //get email and password text
    var email = emailTxt.val().trim();
    var password = passTxt.val().trim();
    var auth = firebase.auth();
    //sign in
    var promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
    //this should send user back to homepage after login
    window.location.href="index.html";

    //clear input fields
    var email = emailTxt.text('');
    var password = passTxt.text('');
  });

  //Logout the user
  logOut.on('click', function(){
      firebase.auth().signOut();
  });


  //add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
          console.log(firebaseUser);
          logOut.removeClass('invisible');
          favsBtn.removeClass('invisible');

      }else{
          console.log('not logged in');
          logOut.addClass('invisible');
          favsBtn.addClass('invisible');

      }
  });