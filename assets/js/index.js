if (jQuery.browser.mobile)  
{  
    console.log("You're using a cellular device!");  
}  
else  
{  
    console.log("You're not using a cellular device!");  
}  

$(document).ready(function(){
    $("button").click(function(){
      $("div").animate({left: '250px'});
    });
  });
