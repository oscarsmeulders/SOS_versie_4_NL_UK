jQuery(document).ready(function($) {

    tinymce.create('tinymce.plugins.fancybutton_plugin', {
        init : function(ed, url) {
            // Register command for when button is clicked
            ed.addCommand('fancybutton_insert_shortcode', function() {
                
                ed.windowManager.open({
                    file : url + '/tinymce.button.php',
                    width : 638,
                    height : 438,
                    inline : 1
                }, {
                    plugin_url : url // Plugin absolute URL
                });
                
                tinymce.execCommand('mceInsertContent', false, content);
            });

            // Register buttons - trigger above command when clicked
            ed.addButton('fancybutton_button', {title : 'Create button', cmd : 'fancybutton_insert_shortcode', image: url + '/button.png' });
        },
    });

    // Register our TinyMCE plugin
    // first parameter is the button ID1
    // second parameter must match the first parameter of the tinymce.create() function above
    tinymce.PluginManager.add('fancybutton_button', tinymce.plugins.fancybutton_plugin);
});