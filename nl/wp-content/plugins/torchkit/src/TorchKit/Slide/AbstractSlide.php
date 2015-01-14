<?php

namespace TorchKit\Slide;

use \TorchKit\Traits;

/**
 * Base class for slides
 */
abstract class AbstractSlide
{
    use Traits\hasChildren;

    /**
     * Post object for this slide
     *
     * @var \WP_Post
     */
    protected $post;

    /**
     * Whether slide is a flipSlide
     *
     * @var boolean
     */
    public $isFlipSlide;

    /**
     * @param \WP_Post $post Wordpress post object for this slide
     */
    public function __construct(\WP_Post $post, $isFlipSlide = false)
    {
        $this->post = $post;
        $this->isFlipSlide = $isFlipSlide;

        $this->initChildren();
    }

    /**
     * Get slide's title
     *
     * @return string The title
     */
    public function getTitle()
    {
        return $this->post->title;
    }

    /**
     * Get slide's ID
     *
     * @return string The slug
     */
    public function getSlug()
    {
         $tmp = str_replace("-","_", sanitize_title( $this->post->title ) );
         return $tmp;

        //sanitize_title( $slide->getTitle() )
    }

    /**
     * Get slide's ID
     *
     * @return string The ID
     */
    public function getId()
    {
        return $this->post->ID;
    }

    /**
     * Get slide's parent ID
     *
     * @return string The parent ID
     */
    public function getParentId()
    {
        return $this->post->menu_item_parent;
    }

    /**
     * Returns whether the Slide has a parent
     */
    public function hasParent()
    {
        return (int)$this->getParentId() !== 0;
    }

    /**
     * Get the slide's state
     *
     * @return string The state
     */
    abstract public function getState();

    /**
     * Get the section attributes for the slide
     *
     * @return array Associative array of section attributes
     */
    abstract public function getSectionAttributes();

    /**
     * Get the slide's content
     *
     * @return string Slide content
     */
    abstract public function getContent();
}
