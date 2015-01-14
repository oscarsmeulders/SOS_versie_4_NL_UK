<?php

namespace TorchKit;

/**
 * Slideshow, containing slides and various slideshow attributes
 *
 * TODO: Seperate Slide (Post/Page) and Menu, as slide can be in a menu
 *       multiple times
 */
class Slideshow
{
    use Traits\hasChildren;

    /**
     * Array containing this slideshow's flips
     *
     * @var array
     */
    public $flip;

    /**
     * ID of the flip parent
     *
     * @var integer
     */
    protected $flipId;

    /**
     * The Wordpress post of this slideshow
     *
     * @var \WP_Post
     */
    protected $post;

    /**
     * All slides in this slideshow, including flips
     *
     * @var array
     */
    public $allSlides;

    /**
     * @param \WP_Post $post Slideshow post
     */
    public function __construct(\WP_Post $post)
    {
        $this->flip = array();
        $this->post = $post;
        $this->initChildren();
        $this->allSlides = array();
    }

    /**
     * Parse menu items into slides
     *
     * @param array $menu Menu array to load slides from
     */
    public function loadSlidesFromMenu(array $menu)
    {
        array_walk($menu, array($this, 'parseMenuItem'));
    }

    /**
     * Load slides for this slideshow, from the menu linked to it
     */
    public function loadSlides()
    {
        $this->loadSlidesFromMenu($this->getMenu());
    }

    /**
     * Parse a menu item and create a slide, and add it to the slideshow's
     * children, or to a slide's children if the parent is a slide.
     *
     * @param \WP_Post $menuItem Menu item to create a slide from
     */
    public function parseMenuItem(\WP_Post $menuItem)
    {
        if($this->isFlip($menuItem)) {
            $this->flipId = $menuItem->ID;
            return;
        }

        $slide = Factory\SlideFactory::fromMenuItem($menuItem, $this->flipId);
        $this->allSlides[] = $slide;

        if($slide->hasParent()) {
            if($slide->isFlipSlide) {
                $this->flip[] = $slide;
            } else if(!$this->hasChild($slide->getParentId())) {
                // Probably deeper than 2nd level, skip
                return;
            } else {
                $this->getChild($slide->getParentId())->addChild($slide);
            }
        } else {
            if($slide->getTitle() === "404") {
                $this->flip[] = $slide;
            } else {
                $this->addChild($slide);
            }
        }
    }

    /**
     * Return if the current menuItem is the flip parent
     *
     * @param \WP_Post $menuItem The menuItem to check
     *
     * @return boolean Whether it's the flip parent
     */
    protected function isFlip(\WP_Post $menuItem)
    {
        return $menuItem->object == 'category' &&
               get_category($menuItem->object_id)->slug == 'flip';
    }


    /**
     * Get the menu items for this slideshow
     *
     * @return array The menu items
     */
    public function getMenu()
    {
        return wp_get_nav_menu_items($this->getMenuSlug());
    }

    /**
     * Get the slideshow's menu slug
     *
     * @return string The menu slug
     */
    public function getMenuSlug()
    {
        return get_post_meta($this->post->ID, 'wpcf-slideshow-menu-slug', true);
    }

    /**
     * Get the onLoad JS for the slideshow
     *
     * @return string The JS
     */
    public function getOnLoadJs()
    {
        return get_post_meta($this->post->ID, 'wpcf-onload', true);
    }

    /**
     * Get the additional head HTML
     *
     * @return string Head HTML
     */
    public function getAdditionalHead()
    {
        return get_post_meta($this->post->ID, 'wpcf-head-html', true);
    }

    /**
     * Get additional footer HTML
     *
     * @return string Footer HTML
     */
    public function getAdditionalFoot()
    {
        return get_post_meta($this->post->ID, 'wpcf-foot-html', true);
    }

    /**
     * Get the HTML to show to an unsupported browser
     *
     * @return string The HTML to display
     */
    public function getUnsupportedBrowserHtml()
    {
        return get_post_meta($this->post->ID, 'wpcf-unsupported-browser-html', true);
    }

    /**
     * Get whether to start on the overview on slideshow load
     * Force false on IE9
     *
     * @return boolean Whether to start on overview
     */
    public function getStartOnOverview()
    {
        $result = get_post_meta($this->post->ID, 'wpcf-start-overview', true) == 1;
        if ($result === false) {
            return false;
        }
        
        $ua = strtolower($_SERVER['HTTP_USER_AGENT']);
        // you can add different browsers with the same way ..
        if(preg_match('/(chromium)[ \/]([\w.]+)/', $ua))
                $browser = 'chromium';
        elseif(preg_match('/(chrome)[ \/]([\w.]+)/', $ua))
                $browser = 'chrome';
        elseif(preg_match('/(safari)[ \/]([\w.]+)/', $ua))
                $browser = 'safari';
        elseif(preg_match('/(opera)[ \/]([\w.]+)/', $ua))
                $browser = 'opera';
        elseif(preg_match('/(msie)[ \/]([\w.]+)/', $ua))
                $browser = 'msie';
        elseif(preg_match('/(mozilla)[ \/]([\w.]+)/', $ua))
                $browser = 'mozilla';
    
        preg_match('/('.$browser.')[ \/]([\w]+)/', $ua, $version);
    
        $browser = array('name'=>$browser,'version'=>$version[2]);
        if ($browser['name'] === 'msie' && $browser['version'] == 9) {
            $result = false;
        }
        return $result;
    }

    /**
     * Get Google Analytics IDs
     *
     * @return array The Google Analytics IDs
     */
    public function getAnalyticsIds()
    {
        return get_post_meta($this->post->ID, 'wpcf-analytics-id');
    }

    /**
     * Return whether Google Analytics link attribution is enabled
     *
     * @return boolean Whether link attribution is enabled
     */
    public function getLinkAttribution()
    {
        return get_post_meta($this->post->ID, 'wpcf-analytics-link-attr', true) == 1;
    }

    /**
     * Set the blocks enabled for this Slideshow
     *
     * @param array $blocks The blocks
     *
     * @return Slideshow This slideshow
     */
    public function setBlocks(array $blocks)
    {
        $jsonBlocks = json_encode($blocks);
        update_metadata('post', $this->post->ID, '_tk-blocks', $jsonBlocks);
    }

    /**
     * Get the blocks for this Slideshow
     *
     * @return array The blocks
     */
    public function getBlocks()
    {
        $jsonBlocks = get_metadata('post', $this->post->ID, '_tk-blocks', true);
        return json_decode($jsonBlocks);
    }

    /**
     * Register blocks in the slideshow
     */
    public function registerBlocks()
    {
        $blocks = (array)$this->getBlocks();
        $assembledBlocks = Factory\SlideshowBlockFactory::fromArray($blocks);
        array_walk($assembledBlocks, function(SlideshowBlock $block) {
            $block->register();
        });
    }
}
