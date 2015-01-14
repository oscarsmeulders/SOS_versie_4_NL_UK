<script type="text/javascript">
    if(FeatureCheck.isCompatible()) {
        <?= $reveal_init; ?>
    } else {
        jQuery("header, .container").hide();
        jQuery(".no-compat").show();
    }
</script>
