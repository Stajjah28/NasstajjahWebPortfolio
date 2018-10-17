$(document).ready(function() {
  //initialize common variables
  input = $("input[type=text]");
  inputP = $("input[type=password]");
  // output = $("div:nth-child(3)");
  button = $("button");

  toggleButton();

  // alert('I am a horrible alert msg. Please delete me')
  input.keypress(toggleButton).keyup(toggleButton);

  inputP.keypress(toggleButton).keyup(toggleButton);
  function toggleButton() {
    len = input.val().length;
    pass = inputP.val().length;

    if (len != 0 && pass != 0) {
      button
        .text("Sign-in!")
        .removeAttr("disabled")
        .addClass("activeButton");
    } else {
      button.attr("disabled", "disabled");
      button.text("Sign-in");
      button.removeClass("activeButton");
    }
  }

  $(".alert-msg").hide();

  var alert =
    "<b>Your session has expired! </b> You have been signed out to protect your privacy.";

  var caution = "<b>Session Expired.</b> Please Login.";

  var info = "<b>Info:</b> Someting happening..Update acc't maybe.";
  var success = "<b>Hooray!</b> All systems go!";

  function displayAlertMsg(msg) {
    $(".alert-msg")
      .addClass("info")
      .html(msg)
      //.delay(2000)
      .slideDown(1000);
  }

  displayAlertMsg(alert);

  $("#Sign-in").click(function() {
    document.getElementById("success").style.display = "block";
  });
});
function Function() {
  alert("Successfully Login!");
}

/**$('document').ready({
  
 

  
  

 function enableSignIn() {
//put this in a function
//see if AppleID has a value appleID
var appleIDElem = document.getElementById('appleID');      var idLength = appleIDElem.value.length; 
//see if PWD has a value password
var passElem = document.getElementById('password'); 
  console.log("password:"+ passElem.value.length);
 //if they both do, enable the button signInBtn 
  if (idLength != 0) {
    
 console.log("not equal zero");
   //if they both do, enable the button signInBtn
  document.getElementById('signInBtn').disabled = false;
  } else if
    (idLength == 0){
    console.log("is zero");
       document.getElementById('signInBtn').disabled = true;
  }
}
 enableSigIn();
});**/

/**var x = document.getElementById('apple ID');
x.value= "enter your id";
 document.getElementsByTagName('h1')[0].innerText= 'hi there';

var flexDivs = document.getElementsTagName('div');

console.log(flexDivs.length);
flexDivs[1].classList.add("item-box");

for (i = 0; i < flexDivs.length; i++){
  flexDivs[i].classList.add('item-box');
}
**/