$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		anchors:['Home', 'Projects', 'Lifetime', 'Contact'],
		menu: '#menu',

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
		sectionsColor : ['#24305e', '#24305e', '#24305e', "#24305e"],

		//Selectors
		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});

	$('.fp-controlArrow.fp-next').click(function() {
		$('#freshman').css('visibility','visible').hide().fadeIn(3000);
		$('#sophomore').css('visibility','visible').hide().fadeIn(5000);
		$('#junior').css('visibility','visible').hide().fadeIn(7000);
		$('#senior').css('visibility','visible').hide().fadeIn(9000);
	});

	$('i').hover(function() {
		$(this).css('color','#fff');
	}, function() {
		$(this).css('color','black');
	})
});
