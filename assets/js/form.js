
//edit the cell to add records

$("td").click(function(){
    if($(this).attr("contentEditable") == true){
        $(this).attr("contentEditable","false");
    } else {
        $(this).attr("contentEditable","true");
    }
})

//fetching HTML table data values and save in JSON object

$(document).ready(function(){
	$("#button").on('click', function(){
		var arrData = [];

	// looping over each table row(tr)

		$("#tests tr").each(function(){
			var currentRow = $(this);


         var col1_value = currentRow.find("td.eq(0)").text();         
		 var col2_value = currentRow.find("td.eq(1)").text();
		 var col3_value = currentRow.find("td.eq(2)").text();
		 var col4_value = currentRow.find("td.eq(3)").text();
		 var col5_value = currentRow.find("td.eq(4)").text();
		 var col6_value = currentRow.find("td.eq(5)").text();
		 var col7_value = currentRow.find("td.eq(6)").text();
		 var col8_value = currentRow.find("td.eq(7)").text();
		 var col9_value = currentRow.find("td.eq(8)").text();
		 var col10_value = currentRow.find("td.eq(9)").text();
		 var col11_value = currentRow.find("td.eq(10)").text();
		 var col12_value = currentRow.find("td.eq(11)").text();



		 var object = {};

		 object.col1=col1_value;
		 object.col2=col2_value;
		 object.col3=col3_value;
		 object.col4=col4_value;
		 object.col5=col5_value;
		 object.col6=col6_value;
		 object.col7=col7_value;
		 object.col8=col8_value;
		 object.col9=col9_value;
		 object.col10=col10_value;
		 object.col11=col11_value;




   arrData.push(object);

		});
		console.log(arrData)
	})
})


 
// converting a table into a json object

$(document).ready(function(){
	$('#button').click( function() {
	  var table = $('#tests').tableToJSON();
	  var data = {};
	  $.each(table, function(key, value) {
		  var jsonKey = value.sampledimension;
		  var map = {};
		  map = value;
		  map.sampledimension = undefined;
		  data[jsonKey] = map;
	  }); 
	  alert(JSON.stringify(data));
	  console.log(JSON.stringify(data));
  });
  });


//submit form

function pageRedirect() {
	window.location.href = "index.html";
  }  
  
  
  






// delete row function

$(document).ready(function(){
	$('button').on('click', function(e){
		e.preventDefault();
		 var me = $(this);
		 $.alert({
			 title:'Alert!',
			 content : 'Are you sure you want to delete data',
			 buttons:{
				 yes:function(){
					 me.closest('tr').remove
				 },
				 No :function(){

				 }
			 }
			 
		 })
	})
})


//post data
















