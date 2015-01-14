jQuery(document).ready(function($) {

    tinymce.create('tinymce.plugins.templater_plugin', {
        init : function(ed, url) {
            // Register command for when button is clicked
            ed.addCommand('templater_insert_shortcode', function() {
                
                ed.windowManager.open({
                    file : url + '/tinymce.templater.php',
                    width : 638,
                    height : 438,
                    inline : 1
                }, {
                    plugin_url : url // Plugin absolute URL
                });
                
                tinymce.execCommand('mceSetContent', false, content);
            });

            // Register buttons - trigger above command when clicked
            ed.addButton('templater_button', {title : 'Choose template', cmd : 'templater_insert_shortcode', image: url + '/layout.png' });
        },
    });

    // Register our TinyMCE plugin
    // first parameter is the button ID1
    // second parameter must match the first parameter of the tinymce.create() function above
    tinymce.PluginManager.add('templater_button', tinymce.plugins.templater_plugin);
});