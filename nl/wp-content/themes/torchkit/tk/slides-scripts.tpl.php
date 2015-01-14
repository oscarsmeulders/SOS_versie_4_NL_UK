<?php use \TorchKit\Slide\AbstractSlide; ?>
<script type="text/javascript">
    var SlideActions = (function() {
        var onActive = {
            <?= implode(",\n", array_map(function(AbstractSlide $slide) {
                return "" . $slide->getSlug() . ": function(slide) {" . "\n" .
                        $slide->getOnActiveJs() . "\n" .
                        "}";
            }, $onActiveSlides)); ?>
        };
        var onInactive = {
            <?= implode(",\n", array_map(function(AbstractSlide $slide) {
                return "" . $slide->getSlug() . ": function(slide) {" . "\n" .
                        $slide->getOnInactiveJs() . "\n" .
                        "}";
            }, $onInactiveSlides)); ?>
        };

        return {
            onActive: onActive,
            onInactive: onInactive
        };
    })();
</script>
