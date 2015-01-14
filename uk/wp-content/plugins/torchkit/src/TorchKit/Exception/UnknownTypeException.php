<?php

namespace TorchKit\Exception;

/**
 * Exception for when an unknown slide type is encountered
 */
class UnknownTypeException extends \Exception
{
    /**
     * The post the type can't be determined of
     *
     * @var \WP_Post
     */
    protected $post;

    /**
     * @param \WP_Post $post The post the type can't be determined of
     */
    public function __construct(\WP_Post $post)
    {
        $this->post = $post;

        parent::__construct();
    }

    /**
     * Return the post
     *
     * @return \WP_Post The post
     */
    public function getPost()
    {
        return $post;
    }
}
