<?php

namespace TorchKit;

use \TorchKit\Traits;
use \TorchKit\Slide\AbstractSlide;

/**
 * Class to handle vertical slides, contains a column of slides
 */
class SlideColumn
{
    use Traits\hasChildren;

    public function __construct()
    {
        $this->initChildren();
    }

    /**
     * Create a slide column from a slide, using it's children for the rest
     * of the column
     *
     * @param AbstractSlide $slide Any kind of slide to create the column from
     *
     * @return SlideColumn The created column
     */
    public static function createFromSlide(AbstractSlide $slide)
    {
        $slideColumn = new SlideColumn();
        $slideColumn->addChildren(array_merge(
            array($slide), $slide->getChildren())
        );

        return $slideColumn;
    }

    /**
     * Add children to this column
     *
     * @param array $children Children to add
     */
    public function addChildren(array $children)
    {
        $this->children = array_merge($this->children, $children);
    }

    /**
     * Returns if this column only has a single slide
     *
     * @return boolean Whether there's only 1 slide
     */
    public function isSingle()
    {
        return count($this->children) == 1;
    }
}
