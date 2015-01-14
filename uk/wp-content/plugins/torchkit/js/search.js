var Search = (function($) {
    var config = {
        endPoint:  window.Search.config.endPoint,
        slideshowId: null
    };

    // TODO: Error handling
    function onResult(result, status, request) {
        $(document).trigger("tk.search.result", [filterHidden(result)]);
        console.log(filterHidden(result));
    }

    function query(searchTerm, snippetLength, snippetOnWords) {
        $.ajax({
            type: "POST",
            url: config.endPoint,
            data: {
                slideshowId:      config.slideshowId || document.body.getAttribute("data-slideshow-id"),
                searchTerm:       searchTerm,
                snippetLength:    snippetLength || 80,
                snippetOnWords:   snippetOnWords || false // TODO
            },
            success: onResult,
            dataType: "json"
        });
    }

    function filterHidden(results) {
        // Use Array#slice to convert to array
        var slides = Array.prototype.slice.call(
            document.querySelector(".reveal .slides").getElementsByTagName("section")
        );

        var slideIds = slides.map(function(slide) {
            return slide.id;
        });

        return $.grep(results, function(result) {
            var resultSection = document.getElementById(result.id);
            if(!resultSection) {
                return false;
            }

            for(var i = 0; i < slideIds.length; i++) {
                if(slideIds[i] == result.id) {
                    return true;
                }
            }

            return false;
        });
    }

    function initialize(options) {
        $.extend(config, options);
    }

    return {
        initialize: initialize,
        config: config,
        query: query
    };
})(jQuery);
