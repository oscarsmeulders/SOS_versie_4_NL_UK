<?php

namespace RevealJS;

/**
 * RevealJS plugin entry point
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
     * @param boolean $register Also register the plugin
     *
     * @return Plugin The initialized plugin
     */
    public static function init($pluginPath, $register = true)
    {
        $plugin = new Plugin();
        $plugin->setPluginPath($pluginPath);
        if($register) {
            $plugin->register();
        }

        return $plugin;
    }

    /**
     * Register the plugin actions, etc
     */
    public function register()
    {
        add_action('wp_enqueue_scripts', array($this, 'registerJs'));
        add_action('wp_enqueue_scripts', array($this, 'registerCss'));
    }

    /**
     * Register RevealJS' javascripts
     */
    public function registerJs()
    {
        wp_enqueue_script('head-js', $this->getAbsoluteUrl('lib/js/head.js'), array(), '0.99');
        wp_enqueue_script('reveal-js', $this->getAbsoluteUrl('js/reveal.min.js'), array('head-js'), '1.0', true);
    }

    /**
     * Register stylesheets
     */
    public function registerCss()
    {
        wp_enqueue_style('reveal-main', $this->getAbsoluteUrl('css/reveal.min.css'));
        wp_enqueue_style('reveal-theme', $this->getAbsoluteUrl('css/theme/default.css'));
        wp_enqueue_style('reveal-syntax', $this->getAbsoluteUrl('lib/css/zenburn.css'));
    }

    /**
     * Set the plugin path
     *
     * @param string $pluginPath Path to set to
     */
    public function setPluginPath($url)
    {
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
