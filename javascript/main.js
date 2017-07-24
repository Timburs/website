$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		anchors:['Home', 'Projects', 'About', 'Contact'],

		//Scrolling
		css3: false,
		scrollingSpeed: 1000,
		autoScrolling: true,
		scrollBar: true,

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
			if (index == 1) {
				$('.intro-wrapper').fadeOut();
			}
			if (index == 2) {
				$('.projects').fadeOut();
			}
			if (index == 3) {
				$('.about').fadeOut();
			}
			if (index == 4) {
				$('.contact-wrapper').fadeOut();
			}
		},

		afterLoad: function(anchorLink, index){
			if (index == 1) {
				$('.intro-wrapper').fadeIn();
			}
			if (index == 2) {
				$('.projects').fadeIn();
			}
			if(index == 3) {
				$('.about').fadeIn();
			}
			if (index == 4) {
				$('.contact-wrapper').fadeIn();
			}
		},

		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
			$('.fp-section').find('.fp-slidesContainer').fadeIn(1000);
			$.fn.fullpage.setScrollingSpeed(1000);
			if (index == 3 && slideIndex == 2) {
				$('.skillbar').each(function(){
					$(this).find('.skillbar-bar').animate({
						width:$(this).attr('data-percent')
					},6000);
				});
			}
		},

		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
			$.fn.fullpage.setScrollingSpeed(0);
			$('.fp-section').find('.fp-slidesContainer').hide();
		}
	});

	$('i').hover(function() {
		$(this).css('color','#3D9970');
	}, function() {
		$(this).css('color','gray');
	});
});
