document.addEventListener('DOMContentLoaded', function() {

  // get all the elements!
  var menuButton = document.getElementById('menu-button');
  var headMenu = document.getElementById('head-menu');
  var menuCloseButton = document.getElementById('menu-close-button');

  // Show the menu
  showMobileMenu = function() {
    if (window.innerWidth <= 700) {
      headMenu.style.display = 'block';
      menuCloseButton.style.display = 'block';
    }
  }

  // Hide the menu
  hideMobileMenu = function() {
    if (window.innerWidth <= 700) {
      headMenu.style.display = 'none';
      menuCloseButton.style.display = 'none';
    }
  }

  // When clikcing the menu button
  menuButton.onclick = function() {
    showMobileMenu();
  }

  // When clicking the close button
  menuCloseButton.onclick = function() {
    hideMobileMenu();
  }

  // When clikcing anywhere in the menu's div
  headMenu.onclick = function() {
    hideMobileMenu();
  }

  // Reset everything when resizing the window
  window.onresize = function() {
    if (window.innerWidth >= 700) {
      headMenu.style.display = 'block';
      menuCloseButton.style.display = 'none';
    } else {
      headMenu.style.display = 'none';
      menuCloseButton.style.display = 'block';
    }
  }







});
