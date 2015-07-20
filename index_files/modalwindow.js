//Don't judge me on this crappy code! This is just a simple landing page, and I'm not familiar with JS :p
$(document).ready(function () {
  $('.modal-link-returns').click(function () {
    $('.modal-background-returns').fadeIn();
    return false;
  }); 
  $('.modal-link-terms').click(function () {
    $('.modal-background-terms').fadeIn();
    return false;
  });
  $('.close-modal').click(function () {
    $('.modal-background-returns').fadeOut();
    $('.modal-background-terms').fadeOut();
    ga('send','pageview'); //sends current (as in index) pageview
    return false;
  });
  $('.modal-background-returns').click(function () {
    $('.modal-background-returns').fadeOut();
    ga('send','pageview'); //sends current (as in index) pageview
    return false;
  });
    $('.modal-background-terms').click(function () {
    $('.modal-background-terms').fadeOut();
    ga('send','pageview'); //sends current (as in index) pageview
    return false;
  });
  $('.modal-window-returns').click(function(event) {
  event.stopPropagation();
  });
  $('.modal-window-terms').click(function(event) {
  event.stopPropagation();
  });
});
$(document).keyup(function(e) { 
    if (e.keyCode == 27) { 
       $('.modal-background-returns').fadeOut();
       $('.modal-background-terms').fadeOut();
       ga('send','pageview'); //sends current (as in index) pageview
    }
});