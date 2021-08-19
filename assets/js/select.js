//button picking the object 
$("products").submit(function(event){
  console.log($(this).serializeArray());
});


$("select").change(function(){
  document.getElementById("loc").innerHTML="You selected:" + document.getElementById("products").nodeValue;
  document.getElementById("loc").innerHTML="You selected:" + document.getElementById("type").nodeValue;
  document.getElementById("loc").innerHTML="You selected:" + document.getElementById("sizes").nodeValue;


});

// function for selecting mutiple products
$("select option:selected").each(function(){
  selectedValues += $(this).val() + ',';
});






//submit form

function pageRedirect() {
  window.location.href = "form.html";
}  












