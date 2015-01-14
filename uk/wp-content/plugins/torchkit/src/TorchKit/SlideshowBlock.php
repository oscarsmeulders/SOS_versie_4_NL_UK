<?php

namespace TorchKit;

/**
 * Block of additional CSS/JS for a slideshow
 *
 * Finds the files in the blocks/<category>/<name>/ folder not recursing further
 */
class SlideshowBlock
{
    /**
     * @var string
     */
    public $name;

    /**
     * @var string
     */
    public $category;

    /**
     * @param $name     string The name of the block
     * @param $category string The block's category
     */
    public function __construct($name, $category)
    {
        $this->name = $name;
        $this->category = $category;
    }

    /**
     * Get the block's directory, with optional suffix
     *
     * @param $dir string Path to add to it
     *
     * @return string The absolute path to the directory
     */
    public function getBlockDir($dir = '')
    {
        return Plugin::getPluginDir("/blocks/{$this->category}/{$this->name}{$dir}");
    }

    /**
     * Return a array of the block's css files
     *
     * @return array The found css files
     */
    public function getCSS()
    {
        $cssFolder = $this->getBlockDir();
        return array_map(array($this, 'pathToUrl'), glob($cssFolder . "/*.css"));
    }

    /**
     * Return a array of the block's javascript files
     *
     * @return array The found javascript files
     */
    public function getJs()
    {
        $jsFolder = $this->getBlockDir();
        return array_map(array($this, 'pathToUrl'), glob($jsFolder . "/*.js"));
    }

    /**
     * Convert an absolute path to a file to an absolute URL to it
     *
     * @param $path string The path to convert
     *
     * @return string The URL
     */
    public function pathToUrl($path)
    {
        $relativePath = str_replace(dirname(__TORCHKIT_PLUGIN_PATH), "", $path);
        return plugins_url($relativePath, __TORCHKIT_PLUGIN_PATH);
    }

    /**
     * Register JS/CSS
     */
    public function register()
    {
        $this->registerCSS();
        $this->registerJs();
    }

    /**
     * Register the block's css files
     */
    public function registerCSS()
    {
        $stylesheets = $this->getCSS();
        array_walk($stylesheets, function($stylesheet) {
            $md5hash = md5($stylesheet);
            $handle = sprintf("%s-%s-%s", $this->category, $this->name, $md5hash);

            wp_enqueue_style($handle, $stylesheet);
        });
    }

    /**
     * Register the block's javascript files
     */
    public function registerJs()
    {
        $scripts = $this->getJs();
        array_walk($scripts, function($script) {
            $md5hash = md5($script);
            $handle = sprintf("%s-%s-%s", $this->category, $this->name, $md5hash);

            wp_enqueue_script($handle, $script);
        });
    }
}

?>
