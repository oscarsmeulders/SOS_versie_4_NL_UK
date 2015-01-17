

<script type="text/javascript">
        window._gaq = window._gaq || [];
        var analyticsIds = <?= json_encode($analyticsIds); ?>,
            linkAttribution = <?= json_encode($linkAttribution); ?>,
            analyticsTimeout = 2000,
            analyticsTimeoutId;



        function pushAnalytics(command) {
            var analyticsId;
            var args = Array.prototype.slice.call(arguments);

			//console.log('test');
			//console.log ( analyticsIds +  ' :: ' + linkAttribution);

            for(key in analyticsIds) {
                if (key == 0) {
                    prefix = '';
                } else {
                    prefix = key + '.';
                }
                args[0] = prefix + command;

                console.debug("Analytics", args);
                window._gaq.push(args);
            }
        }

        function trackSlideChange() {
            var slideTitle = Reveal.getCurrentSlide().getAttribute("data-title");
            var slideId = Reveal.getCurrentSlide().id;

            //pushAnalytics("_set", "title", slideTitle);
            document.title = slideTitle;
            pushAnalytics("_trackPageview", window.location.pathname + slideId);
			console.log ( slideTitle +  ' :: ' + slideId);
            analyticsTimeoutId = null;
        }

        function initialTracking() {
            for(key in analyticsIds) {
                if (key == 0) {
                    prefix = '';
                } else {
                    prefix = key + '.';
                }
                console.log("Analytics, initial",
                    [prefix + '_setAccount', analyticsIds[key]],
                    [prefix + '_trackPageview']
                );
                window._gaq.push(
                    [prefix + '_setAccount', analyticsIds[key]],
                    [prefix + '_trackPageview']
                );
            }
        }

        function loadLinkAttribution() {
            window._gaq.push([
                '_require',
                'inpage_linkid',
                '//www.google-analytics.com/plugins/ga/inpage_linkid.js'
            ]);
        }


        function onSlideChanged() {
            if(Reveal.isOverviewActive()) {
                return;
            }
            if(analyticsTimeoutId) {
                clearTimeout(analyticsTimeoutId);
            }
            analyticsTimeoutId = setTimeout(trackSlideChange, analyticsTimeout);
        }

        function onOverviewShown() {
            pushAnalytics("_trackPageview", window.location.pathname + 'overview');
        }

        function init() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);

            initialTracking();
            if(linkAttribution) {
                loadLinkAttribution();
            }

            Reveal.addEventListener('slidechanged', onSlideChanged);
            Reveal.addEventListener('overviewhidden', onSlideChanged);
            Reveal.addEventListener('overviewshown', onOverviewShown);

            // Track actions
            $('[data-track-action]').on('click', function() {
                var data = $(this).data();
                pushAnalytics('_trackEvent', 'click', data.trackAction, data.trackLabel);
            });
        }

        init();

</script>
