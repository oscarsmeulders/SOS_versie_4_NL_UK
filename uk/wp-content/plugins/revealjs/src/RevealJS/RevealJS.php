<?php

namespace RevealJS;

/**
 * Class to configure RevealJS from PHP
 */
class RevealJS
{
    /**
     * Dependency manager
     *
     * @var DependencyManager
     */
    public $dependencyManager;

    /**
     * Configuration data
     *
     * @var \stdClass
     */
    public $config;

    public function __construct(DependencyManager $dependencyManager = NULL,
                                $config = NULL)
    {
        if(!$dependencyManager) {
            $dependencyManager = new DependencyManager();
        }
        $this->dependencyManager = $dependencyManager;

        if(!$config) {
            $config = new \stdClass();
        }
        $this->config = (object)$config;
    }

    /**
     * Render the config to JSON and strip out the surrounding { }, appending
     * a , if the resulting string isn't empty
     *
     * @return string The rendered config
     */
    protected function renderConfigPart()
    {
        $jsonConfig = substr(json_encode($this->config), 1, -1);
        return strlen($jsonConfig) > 0 ? $jsonConfig . "," : '';
    }

    /**
     * Render the initialization code for RevealJS
     *
     * @return string Initialization code
     */
    public function renderInit()
    {
        return 'Reveal.initialize({'                                        . "\n".
               $this->renderConfigPart()                                    . "\n".
               '    dependencies: ' . $this->dependencyManager->render()    . "\n".
               '});'                                                        . "\n";
    }
}
