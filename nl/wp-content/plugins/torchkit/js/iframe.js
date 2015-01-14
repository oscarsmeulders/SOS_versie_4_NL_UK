var TorchKitIframe = (function() {
    function onClick(evt) {
        // IE uses event.srcElement
        var source = evt.target || evt.srcElement;

        // Get the flip target and type
        var flipTarget = source.getAttribute( "data-flip" ),
            flipType = source.getAttribute( "data-flip-type" ) || "id";

        messageParent({
            msgType: 'flipEvent',
            flipType: flipType,
            flipTarget: flipTarget
        });
    }

    function onKeyDown(evt) {
        messageParent({
            msgType: 'keyboardEvent',
            keyCode: evt.keyCode,
            altKey: evt.altKey,
            ctrlKey: evt.ctrlKey,
            shiftKey: evt.shiftKey,
            metaKey: evt.metaKey
        });
    }

    function messageParent(data) {
        // Check for postMessage support
        if (window.postMessage && window.JSON && window.JSON.stringify && window.top !== window) {
            var str = JSON.stringify(data);
            // Send current document size
            window.top.postMessage(str, '*');
            return true;
        } else {
            // :-(
            return false;
        }
    }

    function register() {
        if(document.attachEvent) {
            document.attachEvent("onkeydown", onKeyDown);
            document.attachEvent("onclick", onClick);
        } else {
            document.addEventListener("keydown", onKeyDown);
            document.addEventListener("click", onClick);
        }
    }

    register();
    return {message: "To Implement when needed"};
})();
