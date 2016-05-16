'use strict';

$(document).ready(function () {
  // Variables
  const $hamburger = $('.hamburger');
  const $mobileNav = $('nav.mobile');
  const $mobileOverlay = $('.mobile-menu-overlay');
  const $submenuToggle = $('.submenu-toggle > a');
  const $main = $('main');
  const $header = $('header');
  const $body = $('body');

  let isMenuVisible = false;

  // Hamburger Event Listener
  $hamburger.on('click', () => {
    $main.toggleClass('push');
    $header.toggleClass('push');
    $mobileNav.toggleClass('hidden');
    $mobileOverlay.toggleClass('hidden');
    isMenuVisible = !isMenuVisible;
    $body.toggleClass('noflow');
  });

  // Overlay Event listener
  $mobileOverlay.on('click', () => {
    closeMenu();
  });

  // Escape closes menu
  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      if (isMenuVisible) {
        closeMenu();
      }
    }
  });

  function closeMenu() {
    $main.toggleClass('push');
    $header.toggleClass('push');
    $mobileOverlay.toggleClass('hidden');
    $mobileNav.toggleClass('hidden');
    $body.toggleClass('noflow');
    isMenuVisible = !isMenuVisible;
  }

  $submenuToggle.on('click', (e) => {
    let thisMenu = $(e.target).parent();
    thisMenu.toggleClass('open');
    // Set text to 'schließen' or get the original topic name from the first list item
    if (thisMenu.children().eq(0).text() !== 'Schließen') {
      thisMenu.children().eq(0).text('Schließen');
    } else {
      thisMenu.children().eq(0).text(thisMenu.children().eq(1).children().eq(0).text());
    }

  }).bind(this);

});
