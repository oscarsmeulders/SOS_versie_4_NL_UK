<?php

namespace TorchKit\Factory;

class SlideshowFactory
{
    /**
     * Create a Slideshow from a wordpress menu array
     *
     * @param array $menu Menu items to create slideshow from
     *
     * @return Slideshow The created slideshow
     */
    public static function fromMenu(array $menu)
    {
        $slideshow = new \TorchKit\Slideshow();
        $slideshow->loadSlidesFromMenu($menu);

        return $slideshow;
    }

    /**
     * Create a slideshow from a slideshow ID
     *
     * @param integer $id ID of the slideshow
     * @param boolean $loadSlides Load the slides in
     *
     * @return Slideshow The created slideshow
     */
    public static function fromId($id, $loadSlides = true)
    {
        $post = get_post($id);
        $slideshow = new \TorchKit\Slideshow($post);

        if($loadSlides) {
            $slideshow->loadSlides();
        }

        return $slideshow;
    }
}
