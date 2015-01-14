<?php

namespace TorchKit\Admin;

use \TorchKit\Factory\SlideshowFactory;
/**
 * Handleshow blocks
 */
class SlideshowBlocks
{
    /**
     * Initialize the plugin, and call the register method
     *
     * @return SlideshowBlocks Initialized plugin
     */
    public static function init()
    {
        $slideshowBlocks = new SlideshowBlocks();
        $slideshowBlocks->register();

        return $slideshowBlocks;
    }

    /**
     * Register the plugin actions, etc
     */
    public function register()
    {
        add_action('add_meta_boxes', array($this, 'registerMetabox'));
        add_action('save_post', array($this, 'saveBlocks'));
    }

    /**
     * Register the blocks metabox
     */
    public function registerMetabox()
    {
        add_meta_box(
            'torchkit_slideshow_blocks',
            __('Slideshow Blocks', 'torchkit_admin'),
            array($this, 'render'),
            'page'
        );
    }

    /**
     * Get an array of category => blocks
     *
     * TODO: Refactor into separate class
     *
     * @return array The array of blocks
     */
    public function getBlocks()
    {
        $blockDirectory = dirname(__TORCHKIT_PLUGIN_PATH) . "/blocks/";
        $directoryIterator = new \RecursiveDirectoryIterator(
            $blockDirectory,
            (
                \FilesystemIterator::SKIP_DOTS |
                \FilesystemIterator::KEY_AS_PATHNAME |
                \FilesystemIterator::CURRENT_AS_FILEINFO
            )
        );
        $recursiveIterator = new \RecursiveIteratorIterator(
            $directoryIterator,
            \RecursiveIteratorIterator::SELF_FIRST
        );
        $recursiveIterator->setMaxDepth(1);

        $result = array();
        foreach($recursiveIterator as $item) {
            // Skip files and top level
            if($item->isFile() || $recursiveIterator->getDepth() === 0) {
                continue;
            }

            $category = $item->getPathInfo()->getBasename();
            if(!isset($result[$category])) {
                $result[$category] = array();
            }
            $result[$category][] = $item->getBasename();
        }
        return $result;
    }

    /**
     * Store the selected blocks
     *
     * @param integer $postId The Post ID to store this for
     */
    public function saveBlocks($postId)
    {
        // Only store blocks for pages that are slideshows
        if($_POST['page_template'] !== "page-templates/slideshow.php") {
            return;
        }

        $slideshow = SlideshowFactory::fromId($postId, false);
        $slideshow->setBlocks((array)$_POST['tk-block']);
    }

    /**
     * Render and echo the blocks
     */
    public function render() {
        $postId = $_GET['post'];
        $slideshow = SlideshowFactory::fromId($postId, false);
        $selectedBlocks = $slideshow->getBlocks();

        echo Plugin::renderTpl("blocks", array(
            'selected'   => $selectedBlocks,
            'categories' => $this->getBlocks()
        ));
    }
}
