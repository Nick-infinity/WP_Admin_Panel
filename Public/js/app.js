var firebaseConfig = {
    apiKey: "AIzaSyDSaxI_tBQSACsQ3V_kynTa4MmtvoCcSc0",
    authDomain: "wallpaperapp-9064a.firebaseapp.com",
    databaseURL: "https://wallpaperapp-9064a-default-rtdb.firebaseio.com/",
    projectId: "wallpaperapp-9064a",
    storageBucket: "wallpaperapp-9064a.appspot.com",
    messagingSenderId: "698856777079",
    appId: "1:698856777079:web:eae7821b1d96a84ecfed72",
    measurementId: "G-BSB9T0S0KS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //store the user for next session 
  firebase.auth.Auth.Persistence.LOCAL;

$("#btn-login").click(function()
{
    var email = $("#email").val();
    var password = $("#password").val();
    var result = firebase.auth().signInWithEmailAndPassword(email,password);
    result.catch(function(error)
    {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
});

function swtichView(view){
    $.get({
        url:view,
        cache: false,
    }).then(function(data){
$("#container").html(data);
    });
}