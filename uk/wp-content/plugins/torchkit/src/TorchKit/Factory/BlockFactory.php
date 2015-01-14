<?php

namespace Torchkit\Factory;

class BlockFactory
{
    static function fromBlocksArray(array $categories)
    {
        $blockObjects = array();

        foreach($categories as $category => $blocks) {
            foreach($blocks as $block) {
                $blockObjects[] = new SlideshowBlock($category, $block);
            }
        }

        return $blockObjects;
    }
}
