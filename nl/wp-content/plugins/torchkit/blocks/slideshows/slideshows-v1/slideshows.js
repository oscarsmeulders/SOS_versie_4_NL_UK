jQuery(function($) {
	//
	// house of green slideshows
	var hog_slides1 = [
	    "<img data-cycle-title='Etalage Noordeinde Den Haag' src='/nl/wp-content/uploads/houseofgreen-home.jpg'>",
	];
	// call this init in the WP onActive of the slide
	init_hog_slideshow1 = function() {
		//console.log ('init_hog_slideshow1 called');
		$('#hog-slideshow1').cycle({
	    	progressive: hog_slides1,
	    	speed: 250
		});
		$('#hog-slideshow1').cycle('resume');
	}
	//
	stop_hog_slideshow1 = function() {
		$('#hog-slideshow1').cycle('pause');
	};
	// end house of green
	//
	// MIST BRIC slideshows
	var mist_slides1 = [
	    "<img data-cycle-title='Animatie van bollen naar het logo.' src='/nl/wp-content/uploads/bricmist_slide4.jpg'>",
	    "<img data-cycle-title='Pakhuis de Zwijger en zijn 9 schermen.' src='/nl/wp-content/uploads/bricmist_slide3.jpg'>",
	    "<img data-cycle-title='Scherm om alle powerpoints te openen.' src='/nl/wp-content/uploads/bricmist_slide1.jpg'>",
	];
	// call this init in the WP onActive of the slide
	init_mist_slideshow1 = function() {
		//console.log ('init_hog_slideshow1 called');
		$('#mist-slideshow1').cycle({
	    	progressive: mist_slides1,
	    	speed: 250
		});
		$('#mist-slideshow1').cycle('resume');
	}
	//
	stop_mist_slideshow1 = function() {
		$('#mist-slideshow1').cycle('pause');
	};
	// end MIST BRIC


	// SOS
	var sos_slides1 = [
	    "<img data-cycle-title='' src='/nl/wp-content/uploads/bricmist_slide4.jpg'>",
	    "<img data-cycle-title='' src='/nl/wp-content/uploads/bricmist_slide3.jpg'>",
	    "<img data-cycle-title='' src='/nl/wp-content/uploads/bricmist_slide1.jpg'>",
	];
	// call this init in the WP onActive of the slide
	init_sos_slideshow1 = function() {
		//console.log ('init_sos_slideshow1 called');
		$('#sos-slideshow1').cycle({
	    	progressive: sos_slides1,
	    	delay: 1000,
	    	speed: 250
		});
		$('#sos-slideshow1').cycle('resume');
	}
	//
	stop_sos_slideshow1 = function() {
		$('#sos-slideshow1').cycle('pause');
	};
	// end SOS
	init_sos_slideshow1();
})