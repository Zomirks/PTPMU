$(document).ready(function() {

  setInterval(function() {

    $(".slide").first().animate( {
      "margin-left" : "-450"
    }, 3000 , function() {
      $(this).css("margin-left", "0");
      $(this).appendTo(".carousel");
    });
  }, 3000);
});
