$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		anchors:['Home', 'Projects', 'About', 'Contact'],

		//Scrolling
		css3: true,
		scrollingSpeed: 1000,
		autoScrolling: true,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#fff', '#fff', '#fff', "#fff"],

		//Selectors
		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){
			/*
			if (direction == 'down') {
				$('#menu').fadeOut();
			}
			else if (direction == 'up') {
				$('#menu').fadeIn();
			}
			*/

			if (index == 3) {
				$('.about').fadeOut();
			}
		},

		afterLoad: function(anchorLink, index){
			if(index == 3) {
				$('.about').fadeIn();
			}
		},

		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
			$('.fp-section').find('.fp-slidesContainer').fadeIn(1000);
			$.fn.fullpage.setScrollingSpeed(1000);
		},

		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
			$.fn.fullpage.setScrollingSpeed(0);
			$('.fp-section').find('.fp-slidesContainer').hide();
		}
	});

	$('i').hover(function() {
		$(this).css('color','#3D9970');
	}, function() {
		$(this).css('color','black');
	});

});
