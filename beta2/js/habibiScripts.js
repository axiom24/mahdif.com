$( document ).ready(function() {


  // Hamburger menu showing and hiding with animation
  $( '.hamburgerMenuButton' ).click(function(){
    $( '.hamburgerMenuButton' ).toggleClass('closeIcon');
    if ($('.stickyMenuCont ul').is(":hidden")){
      $('.stickyMenuCont ul').slideDown(300);
    } else {
      $('.stickyMenuCont ul').slideUp(300);
    }
  });



  // If the hamburger menu is visible then hide the menu after you click a link
  $('.stickyMenu a').click(function(){
    if ($('.hamburgerMenuButton').is(":visible")){
      $('.stickyMenuCont ul').slideUp(300);
      $( '.hamburgerMenuButton' ).toggleClass('closeIcon');
    }
  });



// Show sticky menu after the first 2 sections
  $(window).scroll(function(){
    if ($(window).scrollTop() > viewportHeight*2){
      // $('.stickyMenu').show();
      $('.stickyMenu').slideDown(300);
    } else {
      // $('.stickyMenu').hide();
      $('.stickyMenu').slideUp(300);
    }
  });




// Get the browser's viewport height and assign it to sections min-height
  divHeightVP();

  $(window).resize(function(){
    divHeightVP();
  });

  function divHeightVP(){
    viewportHeight = $(window).height();
    $('.sectionCont').css({'min-height': viewportHeight + 'px'});
  }



// Smooth scrolling like a baws
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 400);
          return false;
        }
      }
    });
  });


});
