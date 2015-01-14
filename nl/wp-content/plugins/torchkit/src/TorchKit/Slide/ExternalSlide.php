<?php

namespace TorchKit\Slide;

/**
 * Base class for external (AJAX/iframe) slides
 */
abstract class ExternalSlide extends AbstractSlide
{
    public function getState()
    {
        return $this->post->attr_title;
    }

    public function getContent()
    {
        // TODO
        return "";
    }
}
