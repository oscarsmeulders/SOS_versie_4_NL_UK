<?php

namespace TorchKit;

use Ikimea\Browser\Browser;
use Factory\SlideshowFactory;

/**
 * Entry point for the TorchKit plugin
 */
class Plugin
{
    /**
     * @var string Location of this plugin
     */
    protected $pluginPath;

    /**
     * Initialize the Plugino
     *
     * @param string $pluginPath The plugin path
     */
    public static function init($pluginPath)
    {
        $plugin = new Plugin();
        $plugin->setPluginPath($pluginPath);
        $plugin->register();
    }

    /**
     * Register the plugin actions, etc
     */
    public function register()
    {
        if(!defined('__REVEALJS_PLUGIN_PATH')) {
            add_action('admin_notices', array($this, 'displayDependencyWarning'));
            return;
        }

        SlideshowInitializer::create();
    }

    /**
     * Get plugin directory, with optional suffix
     *
     * @param $suffix Optional suffix
     *
     * @return string Plugin directory with optional suffix
     */
    public static function getPluginDir($suffix = '')
    {
        return dirname(__TORCHKIT_PLUGIN_PATH) . '/' . $suffix;
    }

    /**
     * Set the plugin path
     *
     * @param string $pluginPath Path to set to
     */
    public function setPluginPath($pluginPath)
    {
        $this->pluginPath = $pluginPath;
    }

    /**
     * Get the absolute URL for a path
     *
     * @param string $path Path to get the URL for
     *
     * @return string Absolute URL for path
     */
    public function getAbsoluteUrl($path)
    {
        return plugins_url($path, $this->pluginPath);
    }

    /**
     * Display the warning that RevealJS can't be found
     */
    public function displayDependencyWarning()
    {
        echo '<div class="error"><p><strong>Error:</strong> RevealJS plug-in not found, TorchKit will not function without it</p></div>';
    }

    /**
     * Get the array of menu items for a slideshow, based on slug
     *
     * @param string $slug Menu slug to fetch items from
     *
     * @return array Menu items
     */
    public function getSlidesArray($slug)
    {
        return wp_get_nav_menu_items($slug);
    }

    /**
     * Renders template specified by name, passwed the context in $vars
     * type of template can be changed by passing the $type parameter
     *
     * @param string $tpl Template to render
     * @param array $vars Context/variables for the template
     * @param string $type Template type, used for file extension
     *
     * @return string The rendered template
     */
    public static function renderTpl($tpl, array $vars = array(), $type = "php")
    {
        $tplPath = "/tk/" . $tpl . ".tpl." . $type;
        $absoluteTplPath = self::getTplPath($tplPath);
        if(!$absoluteTplPath) {
            throw new \Exception("Template not found: " . $tplPath);
        }

        extract($vars);

        ob_start();
        include($absoluteTplPath);
        return ob_get_clean();
    }

    public static function getTplPath($tpl) {
        $themeTplPath = get_stylesheet_directory() . $tpl;
        $parentTplPath = get_template_directory() . $tpl;

        if(file_exists($themeTplPath)) {
            return $themeTplPath;
        }

        if($themeTplPath != $parentTplPath && file_exists($parentTplPath)) {
            return $parentTplPath;
        }

        return false;
    }
}
