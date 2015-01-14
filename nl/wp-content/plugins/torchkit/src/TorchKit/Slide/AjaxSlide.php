<?php

namespace TorchKit\Slide;

/**
 * Slide loaded in through AJAX
 */
class AjaxSlide extends ExternalSlide
{
    public function getContent()
    {
        // TODO
        return "";
    }

    public function getSectionAttributes()
    {
        return array(
            "data-slide-type" => "ajax",
            "data-slide-src" => $this->post->url,
            "data-title" => $this->getTitle()
        );
    }
}
