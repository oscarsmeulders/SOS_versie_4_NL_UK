var SlideActionHandler = (function() {
    var overviewShown = false,
        flipHistory = [];

    function onSlideChange(evt) {
        if(Reveal.isOverviewActive()) {
            return;
        }

        var currentSlide = Reveal.getCurrentSlide(),
            previousSlide = Reveal.getPreviousSlide(),
            newFlip = resetFlip(previousSlide);

        if (newFlip) {
            newFlip.className = newFlip.className.replace(/\s?(present)/gim, ' past');
        }

        callOnActive(currentSlide);
        callOnInactive(previousSlide);

    }

    function toPreviousFlip() {
        if (flipHistory.length < 1) {
            return;
        }
        flipHistory = flipHistory.slice(-1);
        Reveal.doFlip(flipHistory[flipHistory.length].id);
    }
    function toHomeFlip() {
        if (flipHistory.length < 1) {
            return;
        }
        Reveal.doFlip(flipHistory[0].id);
    }

    function resetFlip(current) {
        var newFlip, node = document.body.parentNode;
        if (flipHistory.length < 1) {
            return;
        }
        newFlip  = flipHistory[0];

        newFlip.className = newFlip.className.replace(/\s?(front|back|flip|present|full|future|past)/gim, '');
        newFlip.className += ' full present';
        current.parentNode.replaceChild(newFlip, current);

        node.className = node.className.replace(/\sflip(start|end)/gim, '');

        current.className = current.className.replace(/\s?(front|back|flip|present|full|future|past)/gim, ' flip back');
        document.getElementsByClassName('flips')[0].appendChild(current);
        flipHistory = [];
        return newFlip;
    }

    function onOverviewShown(evt) {
        var currentSlide = Reveal.getCurrentSlide(),
            newFlip = resetFlip(currentSlide);
        if (newFlip) {
            Reveal.toggleOverview(true);
        }
        callOnInactive(currentSlide);
    }
    function onOverviewHidden(evt) {
        Reveal.getCurrentSlide().classList.add('full');
        callOnActive(Reveal.getCurrentSlide());
    }

    function onFlipStart(evt) {
        var node      = document.body.parentNode,
            className = node.className,
            oldSlide  = Reveal.getCurrentSlide();
        Reveal.removeEventListeners();
        flipHistory.push(oldSlide);

        if (className.search(/flip(start|end)/) > 0) {
            //node.className = className.replace(/\sflip(start|end)/gim, '');
        } else {
            node.className = className + ' flipstart';
        }
        callOnInactive(oldSlide);
    }
    function onFlipEnd(evt) {
        var node      = document.body.parentNode,
            newSlide  = Reveal.getCurrentSlide();
        Reveal.addEventListeners();
        if (flipHistory[0] === newSlide) {
            node.className = node.className.replace(/\sflip(start|end)/gim, '');
            flipHistory = [];
        } else {
            node.className = node.className.replace('flipstart', 'flipend');
        }
        for (var i=0, l=flipHistory.length; i<l; i++) {
            if (flipHistory[i]=== newSlide) {
                flipHistory = flipHistory.slice(0, i);
                break;
            }
        }

        callOnActive(newSlide);
    }

    function callOnInactive(slide) {
        if(SlideActions.onInactive.hasOwnProperty(slide.id)) {
            SlideActions.onInactive[slide.id](slide);
        }
    }
    function callOnActive(slide) {
        if(SlideActions.onActive.hasOwnProperty(slide.id)) {
            SlideActions.onActive[slide.id](slide);
        }
    }

    function init() {
        Reveal.addEventListener('slidechanged', onSlideChange);
        Reveal.addEventListener('overviewshown', onOverviewShown);
        Reveal.addEventListener('overviewhidden', onOverviewHidden);
        Reveal.addEventListener('flipstart', onFlipStart);
        Reveal.addEventListener('flipend', onFlipEnd);
    }

    init();

    return {
        toPreviousFlip: toPreviousFlip,
        toHomeFlip: toHomeFlip
    }
})();
