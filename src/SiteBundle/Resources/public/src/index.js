'use strict';

$(document).ready(function () {
  // Variables
  const $hamburger = $('.hamburger');
  const $mobileNav = $('nav.mobile');
  const $mobileOverlay = $('.mobile-menu-overlay');
  const $submenuToggle = $('.submenu-toggle > a');
  const $siteWrapper = $('site-wrapper');
  const $header = $('header');
  const $body = $('body');

  let isMenuVisible = false;

  // Hamburger Event Listener
  $hamburger.on('click', () => {
    toggleMenu();
  });

  // Overlay Event listener
  $mobileOverlay.on('click', () => {
    toggleMenu();
  });

  // Escape closes menu
  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      toggleMenu();
    }
  });

  function toggleMenu() {
    $siteWrapper.toggleClass('push');
    //$header.toggleClass('push');
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


  /**
   * Tab Code
   * from: http://inspirationalpixels.com/tutorials/creating-tabs-with-html-css-and-jquery
   */
  $('.tabs .tab-links a').on('click', function(e)  {
    var currentAttrValue = $(this).attr('href');
    // Show/Hide Tabs
    $('.tabs ' + currentAttrValue).show().siblings().hide();
    // Change/remove current tab to active
    $(this).parent('li').addClass('active').siblings().removeClass('active');
    e.preventDefault();
  });

});
