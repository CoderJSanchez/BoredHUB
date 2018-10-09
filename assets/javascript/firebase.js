
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
  var hideLogIn = $('#logIn');
  var hideSignUp = $('#signUp')


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
    //allows firebase time to log in the user
    setTimeout(returnHome, 1000);  
  });
  //allows the page to return to index signed in
  function returnHome(){
      if(passTxt.val().length > 5){
        window.location.href = 'index.html';
      }else{
          alert("password not long enough");
      }
      
  }


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
    //this will call returnHome() and should send user back to homepage after login
    setTimeout(returnHome, 1000);
  });

  //Logout the user
  logOut.on('click', function(){
      firebase.auth().signOut();
      window.location.reload();
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
          hideLogIn.removeClass('invisible');
          hideSignUp.removeClass('invisible');
          
      }
  });