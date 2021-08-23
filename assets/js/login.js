function pageRedirect() {
  window.location.href = "select.html";
}  

// jquery post function
$(document).ready(function(){
  $("button").click(function(){
    $.post("login.html", function(data, status){
      document.getElementById("username").innerHTML = data;
      document.getElementById("password").innerHTML = "status" + status;
    });
  });
});



$(function () {
  $("username, #password").WaterMark();
  $("#username").WaterMark({
      WaterMarkTextColor: '#8B8B8B'
  });
});





//FUNCTION TWO FORM VALIDATION


// Document is ready
$(document).ready(function () { 
     
// Validate Username
    $('#usercheck').hide();    
    let usernameError = true;
    $('#username').keyup(function () {
        validateUsername();
    });
      
    function validateUsername() {
      let usernameValue = $('#username').val();
      if (usernameValue.length == '') {
      $('#usercheck').show();
          usernameError = false;
          return false;
      } 
      else if((usernameValue.length < 3)|| 
              (usernameValue.length > 10)) {
          $('#usercheck').show();
          $('#usercheck').html
("**length of username must be between 3 and 14 and the @ sign include");
          usernameError = false;
          return false;
      } 
      else {
          $('#usercheck').hide();
      }
    }
});


// Validate Password
$('#passcheck').hide();
let passwordError = true;
$('#password').keyup(function () {
    validatePassword();
});
function validatePassword() {
    let passwrdValue = 
        $('#password').val();
    if (passwrdValue.length == '') {
        $('#passcheck').show();
        passwordError = false;
        return false;
    } 
    if ((passwrdValue.length < 6)|| 
        (passwrdValue.length > 10)) {
        $('#passcheck').show();
        $('#passcheck').html
("**length of your password must be between 6 and 10");
        $('#passcheck').css("color", "red");
        passwordError = false;
        return false;
    } else {
        $('#passcheck').hide();
    }
}
      
//button click function effect
$('#button').click(function(){
  validateUsername();
  validatePassword();
  if((usernameError == true)  &&
  passwordError == true)
   return true;{
    
     
   } 
}) 































































