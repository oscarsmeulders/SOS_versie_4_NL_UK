/**
 * Console.x fallbacks
 */
(function() {
    function check(func) {
        if (typeof console[func] !== 'function') {
            console[func] = function() {}
        }
    }
    if (!console) {
        console = {};
    }
    var functions = ['debug', 'log'];
    for (var i=0; i < functions.length; i++) {
        check(functions[i]);
    }
})();


 