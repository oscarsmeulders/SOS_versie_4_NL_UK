<?php

wp_enqueue_script('cycle_script', get_stylesheet_directory_uri() . '/js/jquery.cycle2.min.js', array('jquery', 'modernizr-min', 'tk-search-main'), false, true);
wp_enqueue_script('global_script', get_stylesheet_directory_uri() . '/js/global.js', array('jquery', 'modernizr-min', 'tk-search-main'), false, true);
wp_enqueue_script('os_script', get_stylesheet_directory_uri() . '/js/os.js', array('jquery', 'modernizr-min', 'tk-search-main','cycle_script'), false, true);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Add specific CSS class by filter
add_filter( 'body_class', 'body_class_names' );
function body_class_names( $classes ) {
	// add 'class-name' to the $classes array
	$classes[] = 'loading';
	//$classes[] = 'loaded';
	// return the $classes array
	return $classes;
}


add_action('after_setup_theme','remove_core_updates');
function remove_core_updates() {
	if(! current_user_can('update_core')){
		return;
	}
	add_action('init', create_function('$a',"remove_action( 'init', 'wp_version_check' );"),2);
	add_filter('pre_option_update_core','__return_null');
	add_filter('pre_site_transient_update_core','__return_null');
}
// remove junk from head
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wp_generator'); //removes WP Version # for security
remove_action('wp_head', 'feed_links', 2);
remove_action('wp_head', 'index_rel_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'start_post_rel_link', 10, 0);
remove_action('wp_head', 'parent_post_rel_link', 10, 0);
remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0);
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0 );
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );

// http://emrahgunduz.com/categories/development/wordpress/create-sitemap-xml-in-wordpress-without-any-plugins/
add_action("publish_slide", "torchkit_sitemap");
add_action("publish_post", "torchkit_sitemap");
add_action("publish_page", "torchkit_sitemap");
function torchkit_sitemap() {
	$args = array(
		//'post_type'=> 'movie',
		'numberposts' => 9999,
		'posts_per_page' => 9999,
		'order'    => 'DESC	',
		'post_type' => 'slide',
		'post_status' => 'publish'
	);
	query_posts( $args );

	$sitemap = '<?xml version="1.0" encoding="UTF-8"?>';
	$sitemap .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
	$sitemap .= '<url><loc>' . get_site_url() . '</loc><lastmod>2015-01-01</lastmod><changefreq>monthly</changefreq></url>';

	while (have_posts()) : the_post();

		$posturl = get_site_url() . '/#/' . str_replace("-","_", sanitize_title( get_the_title() ) );
		$postdate = get_the_modified_date( 'Y-m-d' );

		$sitemap .= '<url>'.
						'<loc>'. $posturl .'</loc>'.
						'<lastmod>'. $postdate .'</lastmod>'.
						'<changefreq>monthly</changefreq>'.
					'</url>';
	endwhile;
	$sitemap .= $tmp.'</urlset>';

	$fp = fopen(ABSPATH . "sitemap.xml", 'w');
	fwrite($fp, $sitemap);
	fclose($fp);
}


?>