jQuery( document ).ready(function( $ ) {


	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-58690391-1', 'auto');
	ga('require', 'linkid', 'linkid.js');
	ga_onSlideChanged();
	function ga_onSlideChanged() {
		ga_TimeoutId = setTimeout(ga_onSlideChanged_timer, 2000);
    }
    function ga_onSlideChanged_timer() {
		clearTimeout(ga_TimeoutId);
		var $page = $('.full.present').attr('data-title');
		var $url  = window.location;
		//console.log( $page );
		ga('send', 'pageview', {
			'page': $url,
			'title': $page
		});

    }
    Reveal.addEventListener('slidechanged', ga_onSlideChanged);


	client_load_images = function() {
		var $i = 0;
		var $j = 0;
		//console.log ( 'create_client_images() is called' );
		$('.content-clients .grid_3').each(function() {
			var tmp = '<img src="/nl/wp-content/uploads/' + $(this).attr('data-img') + '">';


			$(this).css('background-color','white').hover(
				function(){
					$(this).css('background-color', $(this).attr('data-color'));
				},
				function(){
					$(this).css('background-color','white');
				});


			$(this).html(tmp);

			$i++;
			$j = $i;
			if ($j > 12) {
				$j = $j - 12;
			}
			console.log ( 'the j numbers' + $j + ' who :: ' + $(this) );
			client_fade_images( $(this), $j,  $(this).attr('data-color') );
		});
	};

	client_fade_images = function (who, nmb, clr) {
		var dly = 1000;
		var dly_add = 100;
		var dly_back = 1000;

		if ( nmb == 2 || nmb == 5) {
			dly = dly + dly_add;
		}
		if ( nmb == 3 || nmb == 6 || nmb == 9) {
			dly = dly + dly_add + dly_add;
		}
		if ( nmb == 4 || nmb == 7 || nmb == 10) {
			dly = dly + dly_add + dly_add + dly_add;
		}
		if (nmb == 8 || nmb == 11) {
			dly = dly + dly_add + dly_add + dly_add + dly_add;
		}
		if (nmb == 12) {
			dly = dly + dly_add + dly_add + dly_add + dly_add + dly_add;
		}

		var timer = setTimeout(function() {
			who.css('background-color', clr )
				.delay(dly_back)
				.queue(function(){
					$(this).css('background-color', 'white' );
				});

		}, dly );
	};


	init_body_loading = function() {
		// start up after 2sec no matter what
		// console.log ('loading == loaded');
	    timerLoading = setTimeout(function(){
			$('body').removeClass('loading').addClass('loaded');
	    }, 1000);
	}
	init_body_loading();
});



/*

$(window).load(function() {
	// fade in page

});
*/


