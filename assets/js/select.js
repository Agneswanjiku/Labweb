$( "products" ).submit(function( event ) {
    console.log( $( this ).serializeArray() );
    event.preventDefault();
  });

















