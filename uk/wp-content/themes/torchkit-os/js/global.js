(function($, Modernizr) {
    var root = document.body;//.querySelectorAll('.reveal')[0];

    function isFullScreen() {
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
            return false;
        }
        return true;
    }

    function toggleFullScreen() {
        var prefixed;
        if (isFullScreen()) {
            prefixed = Modernizr.prefixed('cancelFullScreen', document);
            $('nav .fullscreen').parent().removeClass('active');
        } else {
            prefixed = Modernizr.prefixed('requestFullScreen', root);
            $('nav .fullscreen').parent().addClass('active');
        }
        prefixed();
    }
       // Remove ASAP
    $('[target="_blank"]').on('click', function() {
        window.open( this.href );
    });
    // Check full screen capabilities
    if (!root.requestFullScreen && !root.msRequestFullScreen && !root.mozRequestFullScreen && !root.webkitRequestFullScreen) {
        // Remove full screen option
        $('nav .fullscreen').parent().remove();
    } else {
        root.setAttribute('webkitallowfullscreen', '');
        root.setAttribute('mozallowfullscreen', '');
        root.setAttribute('msallowfullscreen', '');
        root.setAttribute('allowfullscreen', '');
        $('nav .fullscreen').on('click', function() {
            toggleFullScreen();
        });
        $(window).on('resize', function() {
            if (!isFullScreen() && $('nav .fullscreen').parent().hasClass('active')) {
                $('nav .fullscreen').parent().removeClass('active');
            }
        });
    }
    //////////////////
    // langauge click trigger
    $('a.to-language').on('click', function() {
	    event.preventDefault();
	    var hash = window.location.hash;
	    //console.log (hash);
	    window.open( this.href + '/' + hash, "_self");

	});

	//////////////////
    // external trigger
    $('a.to-external').on('click', function() {
	    window.open( this.href );
	});
	//////////////////

	// Index trigger
    $('a.to-index').on('click', function() {
        var $siblings = $(this).parent().siblings(':has(.sub)');
        $siblings.removeClass('active');
        $('.sub', $siblings).css('z-index', 1).slideUp();

        if (Modernizr.csstransforms === true) {
            Reveal.toggleOverview(true);
        } else {
            Reveal.slide(0, 0);
        }
    });

    // Set active states on button that have a sub
    $('nav .sub').prev('a').on('click', function() {
        var $li = $(this).parent(),
            $siblings = $li.siblings(':has(.sub)');
        $li.toggleClass('active');
        $siblings.removeClass('active');
        $('.sub', $siblings).css('z-index', 1).fadeOut().slideUp();
        $('.sub', $li).css('z-index', 2).slideToggle();
        // Check for input
        //$('input:first', $li).focus();
    });

    // Close subs on click on document elsewhere
    $('.reveal').on('click contextmenu', function() {
        $('nav .sub').slideUp();
        $('nav li.active:has(.sub)').removeClass('active');
    });

    // Menu toggle
    $('.menu-toggle').on('click', function() {
        $('header').slideToggle();
    });

    // To slide
    $(document).on('click', '.to-slide[data-target-id]', function() {
        var id = $(this).data('target-id');
        Reveal.slideToId(id);
        Reveal.toggleOverview(false);
    });
    $(document).on('click', '.to-previous-flip', function() {
        SlideActionHandler.toPreviousFlip();
    });
    $(document).on('click', '.to-home-flip', function() {
        SlideActionHandler.toHomeFlip();
    });

})(jQuery, Modernizr);

// Capsulated search
(function($, Search) {
    var query = '',
        $base = $('.sub.search'),
        $item = $('ul li:first', $base).clone(),
        $column = $('ul:first', $base).empty().clone(),
        perColumn = 5,
        columns = 0,
        pages = 0;

    function findNumber(slideId) {
        var numHolders = document.getElementById(slideId).querySelectorAll('.number');
        if (numHolders.length > 0) {
            return numHolders[0].textContent;
        }
        return null;
    }

    function handleSearch(results) {
        $base.addClass('active-query');
        $('.query', $base).text(query);
        $('.results', $base).empty();
        $('.pages', $base).empty();
        pages = 0;
        columns = 0;
        if (typeof results !== 'object' || results.length < 1) {
            $('.title h4', $base).text('Er zijn geen resultaten voor:');
        } else {
            $('.title h4', $base).text('U heeft gezocht op:');
            $(results).each(function(key, result) {
                var $newItem = $item.clone(),
                    slideNumber = findNumber(result.id);
                // Create new UL
                if (key === 0 || key % perColumn === 0) {
                    $('.results', $base).append($column.clone());
                    columns += 1;
                }
                // Create new page link
                if (key === 0 || key % (perColumn * 2) === 0) {
                    pages += 1;
                    $('.pages', $base).append('<a href="javascript:void(0);">'+pages+'</a>');
                }

                // Add slide number
                if (slideNumber) {
                    result.title = slideNumber + ' - ' + result.title;
                }

                // Fill her up!
                $('h6', $newItem).html(result.title);
                $('p', $newItem).html(result.snippet);
                $('a', $newItem).attr('data-slide', result.id).on('click', function() {
                    Reveal.slideToId($(this).data('slide'));
                    Reveal.toggleOverview(false);
                });
                $('.results ul:last', $base).append($newItem);
            });
            showPage(1);
        }
        if (columns < 3) {
            $('.pager', $base).hide();
        } else {
            $('.pager', $base).show();
        }
    }
    function showPage(page) {
        var pageWidth = 800;
        $('.results', $base).css({
            left: '-' + (pageWidth * page - pageWidth) + 'px'
        });
        $('.pages a:eq('+(page-1)+')', $base).addClass('active').siblings().removeClass('active');

        $('.results ul:lt('+((page-1) * 2)+'), .results ul:gt('+((page-1)*2 + 1)+')', $base).css({
            opacity: 0
        }).siblings().css({
            opacity: 1
        });
    }
    function lockSearch() {
        $base.addClass('locked');
        $('button, input', $base).attr('disabled', '');
    }
    function unlockSearch() {
        setTimeout(function() {
            $base.removeClass('locked');
            $('button, input', $base).removeAttr('disabled');
        }, 500);
    }

    // Search event
    $('form', $base).on('submit', function() {
        query = $(this).find('input').val();
        if (query.length >= 1) {
            lockSearch();
            Search.query(query);
        }
        return false;
    });
    // Search result event
    $(document).on('tk.search.result', function(event, result) {
        unlockSearch();
        handleSearch(result);
    });

    // Pager first click
    $('.pager .first', $base).on('click', function() {
        showPage(1);
    });
    // Pager last click
    $('.pager .last', $base).on('click', function() {
        showPage($('.pager .pages a', $base).length);
    });
    // Pager page click
    $('.pager .pages', $base).on('click', 'a', function() {
        showPage($(this).text() * 1);
    });
})(jQuery, Search);