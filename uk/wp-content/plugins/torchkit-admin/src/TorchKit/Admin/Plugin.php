<?php

namespace TorchKit\Admin;

/**
 * TorchKit Admin plugin entry point
 */
class Plugin
{
    /**
     * @var string Location of this plugin
     */
    protected $pluginPath;

    /**
     * Initialize the Plugin and call the register method
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
        SlideshowBlocks::init();
        add_action('admin_print_scripts', array($this, "registerAssets"));
    }

    /**
     * Register assets (JS/CSS) required for admin interface
     */
    public function registerAssets()
    {
        wp_enqueue_script('jquery-ui-tabs');
        wp_enqueue_script('tk-admin-init', plugins_url(
            "js/init.js",
            __TORCHKIT_ADMIN_PLUGIN_PATH
        ));
        wp_enqueue_style('jquery-ui-tabs', plugins_url(
            "/css/ui-lightness/jquery-ui-1.9.2.custom.css",
            __TORCHKIT_ADMIN_PLUGIN_PATH
        ));
        wp_enqueue_style('jquery-ui-tabs-vertical', plugins_url(
            "/css/vertical-tabs.css",
            __TORCHKIT_ADMIN_PLUGIN_PATH
        ));
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
        extract($vars);

        ob_start();
        include(dirname(__TORCHKIT_ADMIN_PLUGIN_PATH) . "/tpl/" . $tpl . ".tpl." . $type);
        return ob_get_clean();
    }

    /**
     * Set the plugin path
     *
     * @param string $pluginPath Path to set to
     */
    public function setPluginPath($url) {
        $this->pluginPath = $url;
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
}
