// Initial Script


(function ($) { 

  $(document).ready(function() { 
      console.log('hello')

    $('.parts').bind('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
        console.log('hover')
    });

    // $( "#anemometer" ).mouseover(
      // console.log('hover')
      // console.log(this)

    // );

  // $('.hover').bind('touchstart touchend', function(e) {
  //       e.preventDefault();
  //       $(this).toggleClass('hover_effect');
  //   });



  });  
}(jQuery));  
