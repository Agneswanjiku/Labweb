//button picking the object 
$("products").submit(function(event){
  console.log($(this).serializeArray());
});





 //button fading after product selection

  var form = $('#form');
  var button = $ ('#button');

  button .on('click', function(){
    form.toggle();
    form.is(":visible") ? $(this).html('hide') : $(this).html('show');
  });


//submit form

$(document).ready(function(){
  $("#button").click(function(){
    $('#form').submit();
  });
});





   
// Prevent form submission
$( "form" ).submit(function( event ) {
  event.preventDefault();
});










