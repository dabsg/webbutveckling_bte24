
$("#window").css("overflow","hidden")
$("#left").show();


$( "#window ,#left" ).on( "click", function() {
 let p = $("#bilder").position();
 console.log(p.left);
 
  $( "#bilder" ).animate({
    left: "-=200"
  }, 2000, function() {
    
    console.log("klar")
  });
});