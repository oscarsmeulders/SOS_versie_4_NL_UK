jQuery(function($) {
	//
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

	// oo-processing slideshows
	var oo_processing_slides1 = [
	    "<img data-cycle-title='Schetsmatig bewerken van beelden' src='/nl/wp-content/uploads/processing-02.jpg'>",
	];
	// call this init in the WP onActive of the slide
	init_oo_processing_slideshow1 = function() {
		//console.log ('init_hog_slideshow1 called');
		$('#oo_processing-slideshow1').cycle({
	    	progressive: oo_processing_slides1,
	    	speed: 250
		});
		$('#oo_processing-slideshow1').cycle('resume');
	}
	//
	stop_oo_processing_slideshow1 = function() {
		$('#oo_processing-slideshow1').cycle('pause');
	};
	// end house of green
	
})