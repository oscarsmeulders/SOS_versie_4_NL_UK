<?php
/*
wp ez columns tinymce
*/
// look up for the path
require('../../../../wp-config.php');

// check for rights
if ( !is_user_logged_in() || !current_user_can('edit_posts') )
    wp_die(__("You are not allowed to be here"));

global $wpdb;

$theme = wp_get_theme();


?>
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='utf-8'>
    <title>Fancy button creator</title>
    <base target="_self" />
<style>

</style>
<script type="text/javascript" src="<?php echo get_option('siteurl') ?>/wp-includes/js/tinymce/tiny_mce_popup.js"></script>
<script type="text/javascript" src="<?php echo get_option('siteurl') ?>/wp-includes/js/tinymce/utils/mctabs.js"></script>
<script type="text/javascript" src="<?php echo get_option('siteurl') ?>/wp-includes/js/tinymce/utils/form_utils.js"></script>
<script type="text/javascript">
function init() {
    tinyMCEPopup.resizeToInnerSize();
}

function insertHtml(html) {
    if (window.tinyMCE) {
        window.tinyMCE.execInstanceCommand('content', 'mceSetContent', false, html);
        tinyMCEPopup.editor.execCommand('mceRepaint');
        tinyMCEPopup.close();
    }
    return;
}
</script>
</head>
<body>
    <form method='get' action="javascript:void(0)">
        <p>
            <label>
                Linktype<br>
                <select autofocus id='type' name='type'>
                    <option value=''>
                        Normaal
                    </option>
                    <option value='flip'>
                        Flip
                    </option>
                    <option value='homeflip'>
                        Flip to home
                    </option>
                    <option value='previousflip'>
                        Flip to previous
                    </option>
                    <option value='_blank'>
                        Extern
                    </option>
                </select>
            </label>
        </p>
        <p>
            <label>
                Titel<br>
                <input type='text' id='title' name='title'>
            </label>
        </p>
        <p>
            <label>
                Icoon<br>
                <select id='icon' name='icon'>
                    <option value=''>
                        Geen
                    </option>
                    <option value='diagram'>
                        Diagram
                    </option>
                    <option value='video'>
                        Video
                    </option>
                </select>
            </label>
        </p>
        <p>
            <label>
                Slide of url<br>
                <input type='text' id='link' name='link'>
            </label>
            <label>
                <select name='slidepicker' id='slidepicker'>
                    <option disabled value='' selected>Kies een slide</option>
                <?php
$menus = wp_get_nav_menus();
foreach($menus AS $menu) {
    echo "<optgroup label='{$menu->name}'>";
    $items = wp_get_nav_menu_items($menu);
    foreach($items AS $item) {
        if (!empty($item->menu_item_parent)) {
            $item->title = "&nbsp;&nbsp;&nbsp;&nbsp;{$item->title}";
        }
        
        echo "<option value='slide{$item->ID}'>{$item->title}</option>";
    }
    echo "<optgroup>";
}
                
                ?>
                </select>
            </label>
        </p>
        <p>
            <button type='submit' id='insert'>
                Invoegen
            </button>
        </p>
        <hr/>
        <p>
            <button type='button' id='cancel'>
                Cancel
            </button>
        </p>
    </form>
<script>
window.addEventListener('load', function() {
   tinyMCEPopup.executeOnLoad('init();');
});
document.getElementById('cancel').addEventListener('click', function() {
    tinyMCEPopup.close();
});
document.getElementById('slidepicker').addEventListener('change', function() {
    document.getElementById('link').value = this.value;
});
document.getElementById('link').addEventListener('input', function() {
    if (document.querySelectorAll('option[value='+this.value+']').length > 0) {
        document.querySelectorAll('option[value='+this.value+']')[0].selected = true;
    } else {
        document.getElementById('slidepicker').selectedIndex = 0;
    }
});
(function() {
    function getVal(elementId) {
        return document.getElementById(elementId).value;
    }
    document.getElementById('insert').addEventListener('click', function(event) {
        event.preventDefault();
        var button = '',
            attributes = [],
            flipattributes = [],
            classes = [],
            settings = {
                type: getVal('type'),
                title: getVal('title'),
                icon: getVal('icon'),
                link: getVal('link')
            },
            nodeType = 'a';
        classes.push('fancybutton');
        
        if (settings.type === 'flip') {
            flipattributes.push('data-flip-type="id"');
            flipattributes.push('data-flip="' + settings.link + '"');
            attributes.push('href="javascript:void(0);"');
            nodeType = 'div';
        } else if (settings.type === 'previousflip') {
            attributes.push('href="javascript:void(0);"');
            classes.push('to-previous-flip');
            nodeType = 'div';
        } else if (settings.type === 'homeflip') {
            attributes.push('href="javascript:void(0);"');
            classes.push('to-home-flip');
            nodeType = 'div';
        } else if (settings.type === ''){
            attributes.push('href="javascript:Reveal.slideToId(\''+settings.link+'\')"');
        } else {
            attributes.push('href="'+settings.link+'"');
            attributes.push('target="_blank"');
        }
        
        attributes.push('class="' + classes.join(' ') + '"');
        
        
        
        button = '<'+nodeType+' ' + attributes.join(' ') + ' ' + flipattributes.join(' ') + '>';
        if (settings.icon !== '') {
            button += '<img ' + flipattributes.join(' ') + ' src="<?php echo $theme->get_template_directory_uri(); ?>/tinymce/button/'+settings.icon+'.png" alt >';
        }
        button += '<span ' + flipattributes.join(' ') + '>'+settings.title+'</span>';
        button += '</'+nodeType+'>';
        
        if (window.tinyMCE) {
            window.tinyMCE.execInstanceCommand('content', 'mceInsertContent', false, button);
            tinyMCEPopup.editor.execCommand('mceRepaint');
            tinyMCEPopup.close();
        }
        return;
    });
})();
</script>
</body>
</html>