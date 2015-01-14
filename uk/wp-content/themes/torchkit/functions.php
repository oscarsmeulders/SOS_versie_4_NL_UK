<?php
/**
 * Torchkit functions and definitions
 *
 * Sets up the theme and provides some helper functions. Some helper functions
 * are used in the theme as custom template tags. Others are attached to action and
 * filter hooks in WordPress to change core functionality.
 *
 * The first function, torchkit_setup(), sets up the theme by registering support
 * for various features in WordPress, such as post thumbnails, navigation menus, and the like.
 *
 * When using a child theme (see http://codex.wordpress.org/Theme_Development and
 * http://codex.wordpress.org/Child_Themes), you can override certain functions
 * (those wrapped in a function_exists() call) by defining them first in your child theme's
 * functions.php file. The child theme's functions.php file is included before the parent
 * theme's file, so the child theme functions would be used.
 *
 * Functions that are not pluggable (not wrapped in function_exists()) are instead attached
 * to a filter or action hook. The hook can be removed by using remove_action() or
 * remove_filter() and you can attach your own function to the hook.
 *
 * We can remove the parent theme's hook only after it is attached, which means we need to
 * wait until setting up the child theme:
 *
 * <code>
 * add_action( 'after_setup_theme', 'my_child_theme_setup' );
 * function my_child_theme_setup() {
 *     // We are providing our own filter for excerpt_length (or using the unfiltered value)
 *     remove_filter( 'excerpt_length', 'torchkit_excerpt_length' );
 *     ...
 * }
 * </code>
 *
 * For more information on hooks, actions, and filters, see http://codex.wordpress.org/Plugin_API.
 *
 * @package WordPress
 * @subpackage Torchkit
 */

/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) )
	$content_width = 584;

/**
 * Tell WordPress to run torchkit_setup() when the 'after_setup_theme' hook is run.
 */
add_action( 'after_setup_theme', 'torchkit_setup' );

if ( ! function_exists( 'torchkit_setup' ) ):
/**
 *
 * @uses load_theme_textdomain() For translation/localization support.
 * @uses add_editor_style() To style the visual editor.
 * @uses register_nav_menus() To add support for navigation menus.
 *
 * @since Torchkit 1.0
 */
function torchkit_setup() {

	/* Make Torchkit available for translation.
	 * Translations can be added to the /languages/ directory.
	 * If you're building a theme based on Torchkit, use a find and replace
	 * to change 'torchkit' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'torchkit', get_template_directory() . '/languages' );

	// This theme styles the visual editor with editor-style.css to match the theme style.
	add_editor_style();

	// Load up our theme options page and related code.
	require( get_template_directory() . '/inc/theme-options.php' );
    
    // Support featured image
    add_theme_support('post-thumbnails');


	// This theme uses wp_nav_menu() in one location.
	register_nav_menu( 'primary', __( 'Primary Menu', 'torchkit' ) );

}
endif; // torchkit_setup


/**
 * Get our wp_nav_menu() fallback, wp_page_menu(), to show a home link.
 */
function torchkit_page_menu_args( $args ) {
	if ( ! isset( $args['show_home'] ) )
		$args['show_home'] = true;
	return $args;
}
add_filter( 'wp_page_menu_args', 'torchkit_page_menu_args' );





// Remove WP Auto P (and br)
remove_filter( 'the_content', 'wpautop' );

/**
 * Hooks the WP cpt_post_types filter 
 *
 * @param array $post_types An array of post type names that the templates be used by
 * @return array The array of post type names that the templates be used by
 **/
function my_cpt_post_types( $post_types ) {
    $post_types[] = 'slide';
    return $post_types;
}
add_filter( 'cpt_post_types', 'my_cpt_post_types' );


// From here custom content population
add_filter( 'default_content', 'custom_editor_content' );
   function custom_editor_content( $content ) {
   $content = <<<STR
    <div class="columns_12">
        <article class="outlined">
            <p>
                Kies een template
            </p>
        </article>
    </div>
STR;
   return $content;
}

 // init process for registering our button
 add_action('init', 'tk_shortcode_button_init');
 function tk_shortcode_button_init() {

      //Abort early if the user will never see TinyMCE
      if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') && get_user_option('rich_editing') == 'true')
           return;

      //Add a callback to regiser our tinymce plugin   
      add_filter("mce_external_plugins", "tk_register_tinymce_plugin"); 

      // Add a callback to add our button to the TinyMCE toolbar
      add_filter('mce_buttons', 'tk_add_tinymce_button');
}


//This callback registers our plug-in
function tk_register_tinymce_plugin($plugin_array) {
    $plugin_array['templater_button'] = get_template_directory_uri() . '/tinymce/tinymce.templater.js';
    $plugin_array['fancybutton_button'] = get_template_directory_uri() . '/tinymce/tinymce.button.js';
    return $plugin_array;
}

//This callback adds our button to the toolbar
function tk_add_tinymce_button($buttons) {
    //Add the button ID to the $button array
    $buttons[] = "templater_button";
    $buttons[] = "fancybutton_button";
    return $buttons;
}

// Clean up our editor
function clean_mce_editor( $init ) {
    $init['theme_advanced_blockformats'] = 'p,h2,h3,h4,h5,h6';
    $init['theme_advanced_disable'] = 'underline,spellchecker,wp_help,forecolor';
    return $init;
}
add_filter('tiny_mce_before_init', 'clean_mce_editor');
