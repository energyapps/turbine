// Initial Script

var content = document.getElementById('r-n-sc-info2');
var whichDiv = document.getElementById('cover');
console.log(whichDiv.children)
var text = "";
var title = "";
var o = 1;
//iterations is total number of description iterations plus one (home screen)
var iterations = data.length + 1;

(function ($) { 

  $(document).ready(function() { 


  $('.nav-buttons').on("click", function(e) {
    //if click next and gray on previous, remove
    //if click previous and gray on next, remove
    //Add a step to o, remove a step from o
    current = $(this).attr('id')
    status = $(this).attr('class')
       // var q = o;
       
       // Turn all tooltips off
       $('.parts').children('div').removeClass('turnon');

    if (current == "next-nav") {  
       //turn the right one on.
       
    }

    if (current == "previous-nav" && o > 1) {  

      panda = o - 2
      if (o >= 0) {
        $('.parts:nth-child('+ panda + ')').children('div').toggleClass('turnon');    
       }

      // remove gray from next on end
      if (o == iterations) {$('#next-nav').toggleClass('gray')};
      if (o == 2) {$('#previous-nav').toggleClass('gray')};
      
      // reduce o by 1;
      o -= 1;
    } else if (current == "next-nav" && o < iterations) {
console.log(o)
      if (o >= 0) {
        $('.parts:nth-child('+ o + ')').children('div').toggleClass('turnon');    
       }

      if (o == 1) {$('#previous-nav').toggleClass('gray')};
      if (o == (iterations - 1)) {$('#next-nav').toggleClass('gray')};
      // increase o by 1;
      o += 1;
    };

    if (o > 1) {
      //Add the data description to the DOM
      content.innerHTML = "<center><h4>" + data[o-2].name + "</h4></center>" + 
                            "<p>" + data[o-2].description + "</p>" +
                            "<p class='numbers'>" + o + "/17</p>";      
    } else {
      content.innerHTML = "<center><h4>Info</h4></center>" + 
      "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodt empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>" +
                            "<p class='numbers'>" + o + "/17</p>";
    };
  });

    $('.parts').on( "mouseover", function(e) {
        e.preventDefault();
        
        // Turn all tooltips off
       $('.parts').children('div').removeClass('turnon');

      // Add's a current class "hover_effect"
        $(this).toggleClass('hover_effect');
      // console.log('TEST')
        $(this.firstElementChild).toggleClass('turnon');
      // grabs the hovers data name and matches it with the data
        layer = $(this).attr('data-name')

        for (var i = 0; i < data.length; i++) {

          if (layer == data[i].cls) {
            var text = data[i].description; 
            var title = data[i].name;
          };  
        };

      //Add the data description to the DOM
        content.innerHTML = "<center><h4>" + title + "</h4></center>" + 
                            "<p>" + text + "</p>";
    });

// On mouseout, return to position within rotation of information. 
    $('.parts').on("mouseout", function(e) {

      
      //turn the original one on.
      p = o -1;
       if (o >= 0) {
        $('.parts:nth-child('+ p + ')').children('div').toggleClass('turnon');    
       }        
       
      
      $(this.firstElementChild).toggleClass('turnon');

      if (o > 1) {
    
      content.innerHTML = "<center><h4>" + data[o-2].name + "</h4></center>" + 
                              "<p>" + data[o-2].description + "</p>" +
                            "<p class='numbers'>" + o + "/17</p>";      
      } else {
        content.innerHTML = "<center><h4>Info</h4></center>" + 
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodt empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>" +
                            "<p class='numbers'>" + o + "/17</p>"; 
      };
    });




  });  
}(jQuery));  
