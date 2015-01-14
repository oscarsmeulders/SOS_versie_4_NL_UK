<?php

namespace TorchKit;

use \RevealJS\RevealJS;

/**
 * Handles initializing a slideshow
 */
class SlideshowInitializer
{
    /**
     * @var Slideshow
     *
     * Gets populated once initAction gets triggered
     */
    protected $slideshow;

    /**
     * Construct and register the SlideshowInitializer
     */
    public static function create()
    {
        $initializer = new SlideshowInitializer();
        add_action('init', array($initializer, 'register'));

        return $initializer;
    }

    /**
     * Register actions
     */
    public function register()
    {
        Search::init();

        add_action('tkslideshow_init', array($this, 'initAction'));
        add_action('tkslideshow', array($this, 'slideshowAction'));
        add_action('template_redirect', array($this, 'initIframeSlideAction'));
    }

    /**
     * Handle slideshow action, assembling and printing the slideshow
     *
     * @param integer $slideshowId Slideshow ID to handle
     */
    public function slideshowAction($slideshowId)
    {
        $slidePrinter = new SlidePrinter($this->slideshow);
        $slidePrinter->printSlideshow();
    }

    /**
     * Action triggered on tkslideshow_init, registers revealJs and slideshow
     * related hooks, and assigns the actual slideshow to the initializer
     */
    public function initAction($slideshowId)
    {
        $this->slideshow = Factory\SlideshowFactory::fromId($slideshowId);
        $this->registerForSlideshow();
    }

    public function initIframeSlideAction()
    {
        if(!is_single()) {
            return;
        }
        $slidePost = get_post(get_the_ID());
        if($slidePost->post_type !== "slide") {
            return;
        }

        $scriptUrl = plugins_url("js/iframe.js", __TORCHKIT_PLUGIN_PATH);
        wp_enqueue_script("tk-iframe-script", $scriptUrl);
    }

    /**
     * Register hooks/actions for a slideshow
     */
    public function registerForSlideshow()
    {
        wp_enqueue_script(
            'modernizr-min',
            plugins_url('js/modernizr-latest.js', __TORCHKIT_PLUGIN_PATH),
            array(),
            null,
            true
        );

        wp_enqueue_script(
            'feature-check',
            plugins_url('js/feature-check.js', __TORCHKIT_PLUGIN_PATH),
            array('head-js', 'modernizr-min'),
            null,
            true
        );

        wp_enqueue_script(
            'slide-actions',
            plugins_url('js/slide-actions.js', __TORCHKIT_PLUGIN_PATH),
            array('reveal-js'),
            null,
            true
        );

        add_action('wp_footer', array($this, 'printInit'), 999);

        $this->reveal = \RevealJS\Plugin::init(__REVEALJS_PLUGIN_PATH, false);
        $this->reveal->registerJs();
        $this->reveal->registerCss();

        $this->slideshow->registerBlocks();

        add_action('wp_head', array($this, 'printHeadHtml'));
        add_action('wp_head', array($this, 'printOnLoad'));

        add_action('wp_footer', array($this, 'printFootHtml'), 11);
        add_action('wp_footer', array($this, 'printGoogleAnalytics'), 11);
    }

    /**
     * Echo the RevealJS init javascript
     */
    public function printInit()
    {
        $revealJS = new RevealJS(NULL, array(
            "startOnOverview" => $this->slideshow->getStartOnOverview()
        ));
        $revealJS->dependencyManager->addDependencies(array(
            array(
                $this->reveal->getAbsoluteUrl("lib/js/classList.js"),
                'return !document.body.classList'

            ),
            array(plugins_url('/js/iframe-handler.js', __TORCHKIT_PLUGIN_PATH)),
            array($this->reveal->getAbsoluteUrl("lib/js/walker.js")),
            array($this->reveal->getAbsoluteUrl("lib/js/reveal-walker.js")),
            array($this->reveal->getAbsoluteUrl("lib/js/handlebars.js")),
        ));

        echo Plugin::renderTpl("init", array(
            "reveal_init" => $revealJS->renderInit()
        ));
        echo $this->renderSlidesScripts();
    }

    public function renderSlidesScripts()
    {
        $onActiveSlides = array_filter($this->slideshow->allSlides, function($slide) {
            return ($slide instanceof Slide\PostSlide) && $slide->getOnActiveJs();
        });

        $onInactiveSlides = array_filter($this->slideshow->allSlides, function($slide) {
            return ($slide instanceof Slide\PostSlide) && $slide->getOnInactiveJs();
        });

        return Plugin::renderTpl("slides-scripts", array(
            "onActiveSlides" => $onActiveSlides,
            "onInactiveSlides" => $onInactiveSlides
        ));
    }

    /**
     * Print this slideshow's additional header HTML
     */
    public function printHeadHtml()
    {
        echo $this->slideshow->getAdditionalHead();
    }

    /**
     * Print this slideshow's additional footer HTML
     */
    public function printFootHtml()
    {
        echo $this->slideshow->getAdditionalFoot();
    }

    /**
     * Print this slideshow's onLoad javascript
     */
    public function printOnLoad()
    {
        echo Plugin::renderTpl("on-load", array(
            'onLoad' => $this->slideshow->getOnloadJs()
        ));
    }

    public function printGoogleAnalytics()
    {
        if(count($this->slideshow->getAnalyticsIds()) === 0) {
            return;
        }

        echo Plugin::renderTpl("analytics", array(
            'analyticsIds' => $this->slideshow->getAnalyticsIds(),
            'linkAttribution' => $this->slideshow->getLinkAttribution()
        ));
    }
}
?>
