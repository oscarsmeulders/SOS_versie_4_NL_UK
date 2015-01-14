<?php

namespace TorchKit\Slide;

/**
 * Slide from a wordpress post
 */
class PostSlide extends AbstractSlide
{
    public function getState()
    {
        return get_post_meta($this->post->object_id, 'wpcf-state', true);
    }

    public function getContent()
    {
        return $this->getProcessedContent();
    }

    /**
     * Get the processed slide content
     */
    protected function getProcessedContent()
    {
        // Apply the content filters, etc.
        return apply_filters('the_content', get_post($this->post->object_id)->post_content);
    }

    public function getSectionAttributes()
    {
        return array('data-title' => $this->getTitle());
    }

    public function getMeta($name, $single = true, $prefix='wpcf-')
    {
        return get_post_meta($this->post->object_id, $prefix . $name, $single);
    }

    public function getThumbnail($size = "full")
    {
        return get_the_post_thumbnail($this->post->object_id, $size);
    }

    public function getOnActiveJs()
    {
        return $this->getMeta('onactive');
    }

    public function getOnInactiveJs()
    {
        return $this->getMeta('oninactive');
    }
}
