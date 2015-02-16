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
	////////////////////////////////////////////////////////////////////////////////
	rnddly = function (timerAdd) {
		var tmp = Math.ceil(Math.random() * 500) + timerAdd;
		//console.log(tmp);
		return tmp
	}
	rndimg = function(amount) {
		return Math.floor((Math.random() * amount));
	}
	////////////////////////////////////////////////////////////////////////////////
	function Shuffle(o) {
		for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};
	$home_imageUrl = new Array (
		"/nl/wp-content/uploads/home_1.jpg",
		"/nl/wp-content/uploads/home_2.jpg",
		"/nl/wp-content/uploads/home_3.jpg",
		"/nl/wp-content/uploads/home_4.jpg",
		"/nl/wp-content/uploads/home_5.jpg",
		"/nl/wp-content/uploads/home_6.jpg",
		"/nl/wp-content/uploads/home_7.jpg",
		"/nl/wp-content/uploads/home_8.jpg",
		"/nl/wp-content/uploads/home_9.jpg",
		"/nl/wp-content/uploads/home_10.jpg",
		"/nl/wp-content/uploads/home_11.jpg",
		"/nl/wp-content/uploads/home_12.jpg",
		"/nl/wp-content/uploads/home_13.jpg",
		"/nl/wp-content/uploads/home_14.jpg",
		"/nl/wp-content/uploads/home_15.jpg",
		"/nl/wp-content/uploads/home_16.jpg",
		"/nl/wp-content/uploads/home_17.jpg",
		"/nl/wp-content/uploads/home_18.jpg",
		"/nl/wp-content/uploads/home_19.jpg",
		"/nl/wp-content/uploads/home_20.jpg",
		"/nl/wp-content/uploads/home_21.jpg",
		"/nl/wp-content/uploads/home_22.jpg",
		"/nl/wp-content/uploads/home_23.jpg",
		"/nl/wp-content/uploads/home_24.jpg",
		"/nl/wp-content/uploads/home_25.jpg",
		"/nl/wp-content/uploads/home_26.jpg",
		"/nl/wp-content/uploads/home_27.jpg",
		"/nl/wp-content/uploads/home_28.jpg",
		"/nl/wp-content/uploads/home_29.jpg",
		"/nl/wp-content/uploads/home_30.jpg",
		"/nl/wp-content/uploads/home_31.jpg",
		"/nl/wp-content/uploads/home_32.jpg",
		"/nl/wp-content/uploads/home_33.jpg",
		"/nl/wp-content/uploads/home_34.jpg",
		"/nl/wp-content/uploads/home_35.jpg",
		"/nl/wp-content/uploads/home_36.jpg",
		"/nl/wp-content/uploads/home_37.jpg",
		"/nl/wp-content/uploads/home_38.jpg",
		"/nl/wp-content/uploads/home_39.jpg",
		"/nl/wp-content/uploads/home_40.jpg",
		"/nl/wp-content/uploads/home_41.jpg",
		"/nl/wp-content/uploads/home_42.jpg",
		"/nl/wp-content/uploads/home_43.jpg",
		"/nl/wp-content/uploads/home_44.jpg",
		"/nl/wp-content/uploads/home_45.jpg"
	);

	sos_home_fill_divs_front = function () {
		Shuffle($home_imageUrl);
		$('.sos-theme.content-image-txt li').each(function(i) {
			$(this).find('div.front').css('background-image', 'url(' + $home_imageUrl[i] + ')');
		});
	}
	sos_home_fill_divs_back = function () {
		Shuffle($home_imageUrl);
		$('.sos-theme.content-image-txt li').each(function(i) {
			$(this).find('div.back').css('background-image', 'url(' + $home_imageUrl[i] + ')');
		});
	}

	sos_home_rotate = function () {
		if ($dir == 'back'){
			//console.log ('sos_home back');
			sos_home_fill_divs_back();
			$('.sos-theme.content-image-txt li').each(function() {
				$(this).delay( rnddly(2000) ).queue(function(next){
					$(this).addClass('flipped');
					$(this).dequeue();
				});
			});
			$dir = 'front';
			$timer = setTimeout(sos_home_rotate, 5000);
		} else {
			//console.log ('sos_home front');
			sos_home_fill_divs_front();
			$('.sos-theme.content-image-txt li').each(function() {
				$(this).delay( rnddly(2000) ).queue(function(next){
					$(this).removeClass('flipped');
					$(this).dequeue();
				});
			});
			$dir = 'back';
			$timer = setTimeout(sos_home_rotate, 5000);
		}
	}
	sos_home_rotate_stop = function () {
		clearInterval($timer);
		clearInterval($timerStarter);
	};
	$dir = 'back';
	sos_home_fill_divs_front();
	$timerStarter = setTimeout(sos_home_rotate, 2000);
	////////////////////////////////////////////////////////////////////////////////

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


