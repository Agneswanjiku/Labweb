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



// form validation


function validate(){  
  var username=document.form.username.value;  
  var password=document.form.password.value;  
  var status=false;  
    
  if(username.length<1){  
  document.getElementById("nameloc").innerHTML=  
  " <img src='unchecked.gif'/> Please enter your username";  
  status=false;  
  }else{  
  document.getElementById("nameloc").innerHTML=" <img src='checked.gif'/>";  
  status=true;  
  }  
  if(password.length<6){  
  document.getElementById("passwordloc").innerHTML=  
  " <img src='unchecked.gif'/> Password must be at least 6 char long";  
  status=false;  
  }else{  
  document.getElementById("passwordloc").innerHTML=" <img src='checked.gif'/>";  
  }  
  return status;  
  }  

//FUNCTION TWO FORM VALIDATION

$(document).ready(function(){
  $("#form").validate({
    rules:{
      username:"required"
    }, 
    message:{
      username:"please  insert your username"
    }
  })
})

$("button").click(function(){
  $("#form").validate();
})








// select option
// $("Input").select(function(){
//   $("div").text("Item selected").show().fadeOut(2000);
//   $("div").text("Item selected").show().fadeOut(2000);
// })




































































