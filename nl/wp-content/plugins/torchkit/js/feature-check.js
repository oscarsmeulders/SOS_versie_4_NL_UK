var FeatureCheck = (function() {
    // TODO: Fix checks for more things
    function isCompatible() {
        if (navigator.appVersion.indexOf("MSIE") != -1
           && parseFloat(navigator.appVersion.split("MSIE")[1]) > 8) {
            return true;
        }
        return Modernizr.postmessage
                && Modernizr.csstransitions
                && Modernizr.csstransforms3d;
    }

    return {
        isCompatible: isCompatible
    };
})();
