


document.getElementById("button").onclick = function () {
  location.href = "select.html";
};




// $(document).ready(function() {
//   $("#form").validate();
//   });























// $(document).ready(function(){
//   $("button").click(function(){
//     $.post("demo_test_post.asp",
//     {
//       username: "shikonorman@gmail.com",
//       password: "12dfg@"
//     },
//     function(data,status){
//       alert("Data: " + data + "\nStatus: " + status);
//     });
//   });
// });


// function post_to_url(url, params) {
//   var form = document.createElement('form');
//   form.action = url;
//   form.method = 'POST';

//   /*var postParam = encodeURIComponent(params);
//   postParam = decodeURIComponent(postParam);*/
  
//   var input = document.createElement('input');
//   input.type = 'hidden';
//   input.name = 'requestString=';
//   input.value = params;
//   document.body.appendChild(input);
//   form.appendChild(input); 
//   form.submit();

//   }