<?php

namespace RevealJS;

/**
 * TorchKit dependency
 */
class Dependency
{
    /**
     * Condition to check for whether the dependency is required, javascript code
     *
     * @var string
     */
    protected $condition;

    /**
     * Path to the javascript source file
     *
     * @var string
     */
    protected $src;

    /**
     * @param string $src Source file
     * @param string $condition Javascript for the condition
     */
    public function __construct($src, $condition = NULL)
    {
        $this->src = $src;
        $this->condition = $condition;
    }

    /**
     * Render the javascript for the dependency
     *
     * @return string The Javascript
     */
    public function render()
    {
        $stringRepr = "{";
        $stringRepr .= sprintf('src: "%s"', $this->src);

        if($this->condition) {
            $stringRepr .= sprintf(
                ', condition: function() { %s }',
                $this->condition
            );
        }

        $stringRepr .= "}";

        return $stringRepr;
    }
}
