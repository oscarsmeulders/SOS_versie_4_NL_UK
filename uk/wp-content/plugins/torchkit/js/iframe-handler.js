var IframeHandler = (function() {
    function receiveMessage(message) {
        var data = JSON.parse(message.data);
        switch(data.msgType) {
            case 'keyboardEvent':
                handleKey(data);
                break;
            case 'flipEvent':
                handleFlip(data);
        }
    }

    function handleFlip(data) {
        Reveal.handleFlip(data.flipType, data.flipTarget);
    }
    function handleKey(data) {
        data.preventDefault = function() {};
        Reveal.onDocumentKeyDown(data);
    }

    function register() {
        if(window.attachEvent) {
            window.attachEvent("onmessage", receiveMessage, false);
        } else {
            window.addEventListener("message", receiveMessage, false);
        }
    }

    register();
    return {message: "Public facing methods will be implemented when needed"}
})();
