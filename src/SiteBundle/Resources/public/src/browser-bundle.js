/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	$(document).ready(function () {
	  // Variables
	  var $hamburger = $('.hamburger');
	  var $mobileNav = $('nav.mobile');
	  var $mobileOverlay = $('.mobile-menu-overlay');
	  var $submenuToggle = $('.submenu-toggle > a');
	  var $siteWrapper = $('site-wrapper');
	  var $header = $('header');
	  var $body = $('body');
	
	  var isMenuVisible = false;
	
	  // Hamburger Event Listener
	  $hamburger.on('click', function () {
	    toggleMenu();
	  });
	
	  // Overlay Event listener
	  $mobileOverlay.on('click', function () {
	    toggleMenu();
	  });
	
	  // Escape closes menu
	  $(document).keyup(function (e) {
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
	
	  $submenuToggle.on('click', function (e) {
	    var thisMenu = $(e.target).parent();
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
	  $('.tabs .tab-links a').on('click', function (e) {
	    var currentAttrValue = $(this).attr('href');
	    // Show/Hide Tabs
	    $('.tabs ' + currentAttrValue).show().siblings().hide();
	    // Change/remove current tab to active
	    $(this).parent('li').addClass('active').siblings().removeClass('active');
	    e.preventDefault();
	  });
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=browser-bundle.js.map