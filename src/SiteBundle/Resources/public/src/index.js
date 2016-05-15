
$(document).ready(function() {
  console.log('Document ready');


  // Menu code
  let $hamburger = $('.hamburger');
  let $mobileNav = $('nav.mobile');
  let $mobileOverlay = $('.mobile-menu-overlay');
  let $main = $('main');
  let $header = $('header');

  $hamburger.on('click', () => {
    $main.toggleClass('push');
    $header.toggleClass('push');
    $mobileNav.toggleClass('hidden');
    $mobileOverlay.toggleClass('hidden');
  });

  $mobileOverlay.on('click', () => {
    $main.toggleClass('push');
  $header.toggleClass('push');
  $mobileOverlay.toggleClass('hidden');
    $mobileNav.toggleClass('hidden');
  })
});
