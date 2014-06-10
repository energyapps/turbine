// Initial Script

var content = document.getElementById('r-n-sc-info2');
var text = "";
var title = "";

(function ($) { 


  $(document).ready(function() { 
      console.log('hello')

    // $('.parts').bind('touchstart touchend', function(e) {
    //     e.preventDefault();
    //     $(this).toggleClass('hover_effect');
    //     console.log('hover')
    // });



    $('.parts').on( "mouseover", function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
        layer = $(this).attr('data-name')
        // console.log(layer)

        for (var i = 0; i < data.length; i++) {

          if (layer == data[i].cls) {
            var text = data[i].description; 
            var title = data[i].name;
          };  
        };

        content.innerHTML = "<center><h4>" + title + "</h4></center>" + 
                            "<p>" + text + "</p>";
    });




  });  
}(jQuery));  
