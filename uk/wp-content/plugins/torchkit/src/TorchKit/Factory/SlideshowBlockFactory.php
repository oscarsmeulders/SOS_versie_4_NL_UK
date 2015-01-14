<?php

namespace Torchkit\Factory;

use \TorchKit\SlideshowBlock;

class SlideshowBlockFactory
{
    /**
     * Create block objects from the stored array of enabled blocks
     *
     * @param array $categories List of categories and blocks
     *
     * @return array Created SlideshowBlocks
     */
    static function fromArray(array $categories)
    {
        $blockObjects = array();

        array_walk($categories, function($blocks, $category) use (&$blockObjects) {
            array_walk($blocks, function($block) use (&$blockObjects, $category) {
                $blockObjects[] = new SlideshowBlock($block, $category);
            });
        });

        return $blockObjects;
    }
}
