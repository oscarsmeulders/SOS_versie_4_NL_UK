<?php
/**
 * Template Name: Slideshow
 *
 * @package WordPress
 * @subpackage Torchkit
 */

if(!is_page() && !is_single()) {
    echo "Slideshow Hidden, because not on dedicated page";
} else {
    do_action('tkslideshow_init', get_the_ID());
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="initial-scale=1, minimum-scale=1, maximum-scale=1" />
    <title><?php wp_title( '|', true, 'right' ); ?> <?php bloginfo('name'); ?></title>
    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

    <script src="//use.typekit.net/qis7bql.js"></script>
	<script>try{Typekit.load();}catch(e){}</script>
    <?php

    // First remove torchkit plugin styles
    wp_dequeue_style('reveal-main');
    wp_dequeue_style('reveal-theme');
    wp_dequeue_style('reveal-syntax');
    // Now add those of our theme
    wp_enqueue_script('base-script', get_template_directory_uri() . '/js/base.js');
    wp_enqueue_script('base-script', get_template_directory_uri() . '/js/modernizr-2.6.2.min.js');
    wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/style.css');

    // Now do head stuff
    wp_head();
    ?>
</head>
<body <?php body_class(); ?> data-slideshow-id="<?= get_the_ID() ?>">
	<?php get_template_part('slideshow-header-os'); ?>
	<?php while ( have_posts() ) : the_post(); ?>
	    <?php do_action('tkslideshow', get_the_ID()); ?>
	<?php endwhile; ?>
	<?php get_template_part('slideshow-footer'); ?>
	<?php wp_footer(); ?>
</body>
</html>
<?php }
