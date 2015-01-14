<script type='text/javascript'>
    (function() {
        function onLoad()
        {
            <?= $onLoad; ?>
        }
        if(window.attachEvent) {
            window.attachEvent("onload", onLoad);
        } else {
            window.addEventListener("load", onLoad);
        }
    })();
</script>
