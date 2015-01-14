<?php
namespace RevealJS;

/**
 * Dependency manager for RevealJS, for managing the dependencies through PHP
 */
class DependencyManager
{
    /**
     * Array of Dependency objects
     *
     * @var array
     */
    protected $dependencies;

    public function __construct()
    {
        $this->dependencies = array();
    }

    /**
     * @param string $src Source file
     * @param string $condition Javascript for the condition
     *
     * @return DependencyManager
     */
    public function addDependency($src, $condition = NULL)
    {
        if(isset($this->dependencies[$src])) {
            return $this->dependencies[$src];
        }

        $dependency = new Dependency($src, $condition);
        $this->dependencies[$src] = $dependency;

        return $this;
    }

    /**
     * Add multiple dependencies
     *
     * @param array $dependencies, array of arrays containing src/condition
     */
    public function addDependencies(array $dependencies)
    {
        array_walk($dependencies, function($dependency) {
            call_user_func_array(array($this, 'addDependency'), $dependency);
        });
    }

    /**
     * Render all dependencies
     *
     * @return string The rendered dependencies
     */
    public function render()
    {
        return sprintf("[ %s ]",
            implode(",\n", array_map(function(Dependency $dependency) {
                return $dependency->render();
            }, $this->dependencies))
        );
    }
}
?>
