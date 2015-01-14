<?php

namespace TorchKit;

/**
 * TODO: Show multiple results
 * TODO: Refactor actual searching to Searcher class
 */
class Search
{
    static $URL = null;

    /**
     * Config defaults
     *
     * @var array
     */
    public $defaults = array(
        'slideshowId'       => NULL,
        'searchTerm'        => NULL,
        'snippetLength'     => 80,
        'snippetOnWords'    => false,           // TODO
        'allResults'        => false,           // TODO
    );

    /**
     * Initialize and register the plugin
     */
    public static function init()
    {
        if (!self::$URL) {
            $parsedUrl = parse_url(get_site_url());
            self::$URL = $parsedUrl['path'] . '/torchkit/search';
        }
        $search = new Search();
        $search->register();

        return $search;
    }

    /**
     * Register action handlers
     */
    public function register()
    {
        add_action('wp_enqueue_scripts', function() {
            $url = static::$URL;
            echo "<script>window.Search = {};window.Search.config = {endPoint: '{$url}'};</script>"; 
        });
        add_action('parse_request', array($this, 'handleSearch'));
        add_action('wp_enqueue_scripts', array($this, 'registerScripts'));
    }

    public function registerScripts()
    {
        $scriptUrl =
        wp_enqueue_script(
            "tk-search-main",
            plugins_url("js/search.js", __TORCHKIT_PLUGIN_PATH),
            array('jquery', 'reveal-js'),
            '1.0',
            true
        );
    }

    /**
     * Handle a search request, and echo the result as JSON
     */
    public function handleSearch()
    {
        if(strpos($_SERVER['REQUEST_URI'], self::$URL) !== 0) {
            return;
        }

        $settings = (object)array_merge($this->defaults, $_POST);

        if(!$settings->slideshowId || !$settings->searchTerm) {
            http_response_code(400);
            exit("slideshowId or searchTerm was missing");
        }

        $slideshow = Factory\SlideshowFactory::fromId($settings->slideshowId, false);
        $menu = wp_get_nav_menu_items($slideshow->getMenuSlug());
        $slideMenuMap = $this->getSlideMenuMap($menu);

        $searchQuery = new \WP_Query(array(
            's'         => '"' . $settings->searchTerm . '"',
            'post__in'  =>  array_keys($slideMenuMap)
        ));

        $resultPosts = $searchQuery->get_posts();

        // Filter the results, if the stripped post doesn't have the search term
        // don't include them
        $resultArray = array_filter(array_map(function(\WP_Post $resultPost) use (
            $settings, $slideMenuMap
        ) {
            $termCount = $this->getTermCount($resultPost, $settings->searchTerm);
            return $termCount > 0 ? array(
                'title' => $this->highlightText($resultPost->post_title, $settings),
                'snippet' => $this->highlightResult($resultPost, $settings),
                'id' => sprintf("slide%s", $slideMenuMap[$resultPost->ID]),
                'term_count' => $termCount
            ) : false;
        }, $resultPosts));

        // Sort the results on the amount of times the term is found in the post
        usort($resultArray, function($a, $b) {
            $aCount = $a['term_count'];
            $bCount = $b['term_count'];

            if($aCount === $bCount) {
                return 0;
            }

            return ($aCount > $bCount) ? -1 : 1;
        });

        exit(json_encode($resultArray));
    }

    public function getTermCount(\WP_Post $resultPost, $term)
    {
        $strippedContent = strip_tags($resultPost->post_content);
        return substr_count(strtolower($strippedContent), strtolower($term))
               + substr_count(strtolower($resultPost->post_title), strtolower($term));
    }

    /**
     * Highlight and extract results in a wordpress post
     *
     * @param WP_Post $post Post to highlight content of
     * @param array $settings Search settings
     *
     * @return string The text with highlighted searchTerm
     */
    public function highlightResult(\WP_Post $post, $settings)
    {
        $strippedContent = strip_tags($post->post_content);
        $snippet = $this->extractSnippet($strippedContent, $settings);
        $highlightedSnippet = $this->highlightText($snippet, $settings);

        return $highlightedSnippet;
    }

    /**
     * Highlight the searchTerm
     *
     * @param string $text Text to highlight in
     * @param array $settings Search settings
     *
     * @return string The text with searchTerm highlighted
     */
    public function highlightText($text, $settings)
    {
        $searchRegex = sprintf("/(%s)/i", preg_quote($settings->searchTerm));
        $replaceText = "<mark>\\1</mark>";

        return preg_replace($searchRegex, $replaceText, $text);
    }

    public function cleanupText($text)
    {
        // Replacing non-breaking spaces with regular spaces
        $text = str_replace("&nbsp;", " ", $text);

        return preg_replace('/\s+/', ' ', $text);
    }

    /**
     * Extract a snippet from a string of text
     *
     * @param string $text The text to extract from
     * @param array $settings Search settings
     *
     * @return String Extracted string
     */
    public function extractSnippet($text, $settings)
    {
        $text = $this->cleanupText($text);

        $firstOccurence = stripos($text, $settings->searchTerm);
        $firstOccurenceEnd = $firstOccurence + strlen($settings->searchTerm);

        $surroundingLength = floor(
            ($settings->snippetLength - strlen($settings->searchTerm)) / 2
        );

        $snippetStart = $firstOccurence - $surroundingLength;
        if($snippetStart < 0) {
            $snippetStart = 0;
        }

        $snippetEnd  = $firstOccurenceEnd + $surroundingLength;
        if($snippetEnd > strlen($text)) {
            $snippetEnd = strlen($text);
        }

        $snippetLength = $snippetEnd - $snippetStart;

        $snippet = substr($text, $snippetStart, $snippetLength);
        return sprintf("...%s...", $snippet);
    }

    /**
     * Get a map of post IDs to menu IDs for slides
     *
     * @param array $menu Menu to extract from
     *
     * @return array Map of post ID => menu ID
     */
    public function getSlideMenuMap(array $menu)
    {
        $relevantSlides = array_filter($menu, function(\WP_Post $menuItem) {
            return $menuItem->object === 'slide';
        });

        $resultArray = array();
        foreach($relevantSlides as $relevantSlide) {
            $resultArray[$relevantSlide->object_id] = $relevantSlide->ID;
        }

        return $resultArray;
    }
}
