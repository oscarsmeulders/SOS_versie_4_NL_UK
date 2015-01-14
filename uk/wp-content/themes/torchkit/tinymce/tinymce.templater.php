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

function wp_scandir($path, $extensions = null, $depth = 0, $relative_path = '') {
    if ( ! is_dir( $path ) ) {
        return array();
    }
    
    if ( $extensions ) {
        $extensions = (array) $extensions;
        $_extensions = implode( '|', $extensions );
    }
    
    $relative_path = trailingslashit( $relative_path );
    if ( '/' == $relative_path ) {
        $relative_path = '';
    }
    
    $results = scandir( $path );
    $files = array();
    
    foreach ( $results as $result ) {
        if ( '.' == $result[0] ) {
            continue;
        }
        if ( is_dir( $path . '/' . $result ) ) {
            if ( ! $depth || 'CVS' == $result ) {
                continue;
            }
            $found = wp_scandir( $path . '/' . $result, $extensions, $depth - 1 , $relative_path . $result );
            $files = array_merge_recursive( $files, $found );
        } elseif ( ! $extensions || preg_match( '~\.(' . $_extensions . ')$~', $result ) ) {
            $files[ $relative_path . $result ] = $path . '/' . $result;
        }
    }
    
    return $files;
}

function get_snippets() {
    $theme = wp_get_theme();
    $snippetDir = '/snippets';

    $snippets = array();

    $files = (array) wp_scandir($theme->get_stylesheet_directory() . $snippetDir, 'php', 0 );
    
    if ( $theme->parent() ) {
        $files += (array) wp_scandir( $theme->get_template_directory() . $snippetDir, 'php', 0 );
    }
    
    
    foreach ( $files as $file => $full_path ) {
        $headers = get_file_data( $full_path,
            array (
                'name' => 'Name',
                'preview' => 'Preview',
                'description' => 'Description'
            )
        );
        if (empty($headers['name'])) {
            continue;
        }
        $path = pathinfo(str_replace($_SERVER['DOCUMENT_ROOT'], '', $full_path));
        $headers['preview'] = "{$path['dirname']}/{$headers['preview']}";
        ob_start();
        require $full_path;
        $content = ob_get_clean();
        
        $snippets[$file] = $headers;
        $snippets[$file]['content'] = $content;
    }

    return $snippets;
}
$templates = get_snippets();



?>
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='utf-8'>
    <title>Templater</title>
    <base target="_self" />
<style>
.example {
    float:left; margin: 10px 10px 20px 10px; width:162px;
}
.example h3{
    margin-bottom:5px;
}
.example p {
    min-height:40px;
}
.example img {
    border: 1px solid #ccc;
}
.clear {
    clear:both;
}
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
<?php
$tplId = 0;
foreach($templates AS $template) {
    echo <<<STR
    <div class='example'>
        <h3>
            {$template['name']}
        </h3>
        <img src='{$template['preview']}' alt='' width='160' height='100' />
        <p>
            {$template['description']}
        </p>
        <button type='button' data-container='tpl_{$tplId}' class='pick updateButton'>
            Use
        </button>
        <script type='text/template' id='tpl_{$tplId}'>
            {$template['content']}
        </script>
    </div>
STR;
    $tplId++;
    if ($tplId %3 == 0) {
        echo "<div class='clear'></div>";
    }
}
?>
        <div class='clear'></div>
        <hr/>
        <button type='button' id='cancel'>
            Cancel
        </button>
    </form>
<script>
window.addEventListener('load', function() {
   tinyMCEPopup.executeOnLoad('init();');
});
document.getElementById('cancel').addEventListener('click', function() {
    tinyMCEPopup.close();
});
(function() {
    var pickers = document.querySelectorAll('button.pick');
    for (var i=0; i<pickers.length; i++) {
        pickers[i].addEventListener('click', function() {
            var containerId = this.getAttribute('data-container'),
                container = document.getElementById(containerId),
                content = container.textContent;
            
            insertHtml(content);
        });
    }
})();
</script>
</body>
</html>