$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		anchors:['Home', 'Projects', 'Lifetime', 'Contact'],
		menu: '#menu',

		//Scrolling
		css3: true,
		scrollingSpeed: 1000,
		autoScrolling: false,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#fff', '#2ecc71', '#fff', "#2ecc71"],

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

});
