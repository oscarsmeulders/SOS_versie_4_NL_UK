<?php

namespace TorchKit\Traits;

use \TorchKit\Slide\AbstractSlide;

/**
 * A hasChildren trait for an object that has slides as children
 */
trait hasChildren
{
    /**
     * Children of the slide
     *
     * @var array
     */
    protected $children;

    /**
     * Initialize the children array
     */
    public function initChildren()
    {
        $this->children = array();
    }

    /**
     * Return the children
     *
     * @var array
     */
    public function getChildren()
    {
        return $this->children;
    }

    /**
     * Get a child by id
     *
     * @param integer $childId The ID of the child
     *
     * @return AbstractSlide The child
     */
    public function getChild($childId)
    {
        return $this->children[$childId];
    }

    /**
     * Return whether this object contains a child
     *
     * @param integer $childId The child to check for
     *
     * @return boolean Whether child is in this object
     */
    public function hasChild($childId)
    {
        return isset($this->children[$childId]);
    }

    /**
     * Add a child
     *
     * @param AbstractSlide $slide The slide to add
     */
    public function addChild(AbstractSlide $child)
    {
        $this->children[$child->getId()] = $child;
    }

    /**
     * Whether this object has children
     *
     * @return boolean Whether there are children
     */
    public function hasChildren()
    {
        return count($this->children) > 0;
    }
}
