          
  // Move the Clouds
  $(document).ready(function cloud1(){
      $("#cloud1").
        animate({left:'+=300%'},10500).
        animate({opacity: 0},0).
        animate({left:'-=300%'},0).
        delay(1000).
        animate({opacity: 1},cloud1)   
      $("#cloud2").
        delay(3000).
        animate({left:'+=300%'},9000).
        animate({opacity: 0},0).
        animate({left:'-=300%'},0).
        delay(1000).
        animate({opacity: 1},cloud2)   
      $("#cloud3").
        delay(5000).
        animate({left:'+=300%'},15000).
        animate({opacity: 0},0).
        animate({left:'-=300%'},0).
        delay(1000).
        animate({opacity: 1},cloud3)   
      $("#cloud4").
        animate({left:'+=300%'},10000).
        animate({opacity: 0},0).
        animate({left:'-=300%'},0).
        delay(1000).
        animate({opacity: 1},cloud4)   
      $("#cloud5").
        delay(3000).
        animate({left:'+=300%'},13500).
        animate({opacity: 0},0).
        animate({left:'-=300%'},0).
        delay(4000).
        animate({opacity: 1},cloud5)   
      $("#cloud6").
        delay(1000).
        animate({left:'+=300%'},9000).
        animate({opacity: 0},0).
        animate({left:'-=300%'},0).
        delay(3000).
        animate({opacity: 1},cloud6)               
  }); 

