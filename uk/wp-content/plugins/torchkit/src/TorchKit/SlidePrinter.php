<?php

namespace TorchKit;

/**
 * Prints slides in a format RevealJS understands
 *
 * @TODO Use Twig or similar for Slide HTML
 */

class SlidePrinter
{
    /**
     * The Slideshow object this printer should print
     *
     * @var Slideshow
     */
    protected $slideshow;

    /**
     * Slide columns assembled from $slideshow
     *
     * @var array
     */
    protected $slideColumns;

    /**
     * @param Slideshow $slideshow Slideshow to handle
     */
    public function __construct(Slideshow $slideshow)
    {
        $this->slideshow = $slideshow;
        $this->slideColumns = array();
    }

    /**
     * Create slide columns from the slideshow's slides
     */
    public function assembleSlideColumns()
    {
        $this->slideColumns = array_map(array(
            "\\TorchKit\\SlideColumn", "createFromSlide"
        ), $this->slideshow->getChildren());
    }

    /**
     * Build a slide column's HTML
     *
     * @param SlideColumn $column Column to create HTML for
     *
     * @return string The column's HTML
     */
    protected function buildSlideColumn(SlideColumn $column)
    {
        $slidesHtml = implode($this->buildSlideArray($column->getChildren()));
        return $column->isSingle() ? $slidesHtml : $this->wrapSection($slidesHtml);
    }

    /**
     * Create HTML attributes from a key/value array
     *
     * @param array $attributes Array to create HTML for
     *
     * @return string The HTML attribute string
     */
    public function attributesFromArray(array $attributes) {
        return implode(" ", array_map(function($key, $value) {
            return sprintf('%s="%s"', $key, $value);
        }, array_keys($attributes), $attributes));
    }

    /**
     * Wrap HTML in a section, with optional HTML attributes
     *
     * @param string $html HTML to wrap
     * @param array $attributes Attributes to add to the section
     *
     * @return string The wrapped HTML
     */
    public function wrapSection($html, array $attributes = array())
    {
        $attributeString = $this->attributesFromArray($attributes);
        return sprintf('<section %s>%s</section>', $attributeString, $html);
    }


    /**
     * Create array of rendered slide HTML
     *
     * @param array $slides Slides to render
     *
     * @return array Array of HTML strings
     */
    protected function buildSlideArray(array $slides)
    {
        return array_map(array($this, 'renderSlide'), $slides);
    }

    /**
     * Render a slide's HTML
     *
     * @param Slide\AbstractSlide $slide Slide to render HTML for
     *
     * @return string The slide's HTML
     */
    protected function renderSlide(Slide\AbstractSlide $slide)
    {
        $tmp = str_replace("-","_", sanitize_title( $slide->getTitle()) );
        $vars = array(
            "title" => $slide->getTitle(),
            "content" => $slide->getContent(),
            "attributes" => $this->attributesFromArray(array_merge(
                array(
                    "data-state" => $slide->getState(),
                   // "id" => "slide" . $slide->getId()
                    "id" => "" . $tmp

                ),
                $slide->getSectionAttributes()
            )),
            "slide" => $slide
        );
        return Plugin::renderTpl("slide", $vars);
    }

    /**
     * Render a slideshow
     *
     * @return string The rendered slideshow's HTML
     */
    public function renderSlideshow()
    {
        $this->assembleSlideColumns();

        $columns = implode(array_map(
            array($this, 'buildSlideColumn'), $this->slideColumns
        ));
        $flips = implode($this->buildSlideArray($this->slideshow->flip));

        return Plugin::renderTpl("slideshow", array(
            'incompatible' => $this->slideshow->getUnsupportedBrowserHtml(),
            'columns'      => $columns,
            'flips'        => $flips
        ));
    }

    /**
     * Render and print a slideshow
     */
    public function printSlideshow()
    {
        echo $this->renderSlideshow();
    }
}
