$( "#window" ).on( "click", function() {
  $( "#bilder" ).animate({
    left: "-=200"
  }, 2000, function() {
    
    console.log("klar")
  });
});