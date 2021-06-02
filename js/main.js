(function ($) {
	"use strict";

	// preloader
	function preloader() {
		$('#preloader').delay(0).fadeOut();
	};

	$(window).on('load', function () {
		preloader();
		wowanimation();
	});


	// One Page Nav
	var top_offset = $('.main-header').height() - 10;
	$('.main-menu nav ul').onePageNav({
		currentClass: 'active',
		scrollOffset: top_offset,
	});


	// menu toggle
	$(".navbar-toggle").on('click', function () {
		$(".navbar-nav").addClass("mobile_menu");
	});
	$(".navbar-nav li a").on('click', function () {
		$(".navbar-collapse").removeClass("show");
	});


	// sticky-menu
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$("#header-sticky").removeClass("sticky-menu");
		} else {
			$("#header-sticky").addClass("sticky-menu");
		}
	});


	// active
	$('.single-pricing').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.single-pricing').removeClass('active');
	})

	// WOW active
	function wowanimation() {
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: false,
			live: true
		});
		wow.init();
	}


})(jQuery);