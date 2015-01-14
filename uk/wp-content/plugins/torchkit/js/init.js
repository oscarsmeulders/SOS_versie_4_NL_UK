head.feature("backface-visibility", function() {
    return ('webkitBackfaceVisibility' in document.body.style
            || 'MozBackfaceVisibility' in document.body.style
            || 'OBackfaceVisibility' in document.body.style
            || 'backfaceVisibility' in document.body.style)
});
