$("td").click(function(){
    if($(this).attr("contentEditable") == true){
        $(this).attr("contentEditable","false");
    } else {
        $(this).attr("contentEditable","true");
    }
})

//fetching HTML table data values and save in JSON object

// $(document).ready(function(){
// 	$("#button").function('click', function(){
// 		var arrData = [];

// 		// looping over each table row(tr)

// 		$("#tests tr").each(function(){
// 			var currentRow = $(this);


//          var col1_value = currentRow.find("td.eq(0)").text();         
// 		 var col2_value = currentRow.find("td.eq(1)").text();
// 		 var col3_value = currentRow.find("td.eq(2)").text();
// 		 var col4_value = currentRow.find("td.eq(3)").text();
// 		 var col5_value = currentRow.find("td.eq(4)").text();
// 		 var col6_value = currentRow.find("td.eq(5)").text();
// 		 var col7_value = currentRow.find("td.eq(6)").text();
// 		 var col8_value = currentRow.find("td.eq(7)").text();


// 		 var object = {};

// 		 object.col1=col1_value;
// 		 object.col2=col2_value;
// 		 object.col3=col3_value;
// 		 object.col4=col4_value;
// 		 object.col5=col5_value;
// 		 object.col6=col6_value;
// 		 object.col7=col7_value;
// 		 object.col8=col8_value;

//    arrData.push(object);

// 		});
// 		console.log(arrData)
// 	})
// })



// // / save output in a variable
// var data = $( "#tests" ).tableMatrix();



// var myCallback = function( data ){
//     // do something with the data...
//   };
  
//   $( "#tests" ).tableMatrix( myCallback );
  

// ( function( $ ){
// 	$.function.tableMatrix = function( callback ){
// 		var matrix = [];
// 		this.find( "tr" ).each( function( index, tableRow ) {
// 			var row = [];
// 			$( tableRow ).find( "td, th" ).each( function( i, value ){
// 				row.push( $( value ).text() );
// 			});
// 			matrix.push( row );
// 		});
// 		if( callback ) {
// 			return callback( matrix );
// 		}
// 		return matrix;
// 	};
// }( jQuery ) );























