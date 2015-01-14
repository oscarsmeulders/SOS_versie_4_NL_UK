<?php

namespace TorchKit\Slide;

/**
 * Slide loaded into an iframe
 */
class IframeSlide extends ExternalSlide
{
    public function getContent()
    {
        // TODO
        return "";
    }

    public function getSectionAttributes()
    {
        return array(
            "data-slide-type" => "iframe",
            "data-slide-src" => $this->post->url,
            "data-title" => $this->getTitle()
        );
    }
}
