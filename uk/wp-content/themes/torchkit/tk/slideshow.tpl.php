<div class="reveal">
    <div class="slides">
        <?= $columns ?>
    </div>
</div>

<div class="flips">
    <?= $flips ?>
</div>
<script id="slide-template" type="text/x-handlebars-template">
    <?= TorchKit\Plugin::renderTpl("slide", array(), "js"); ?>
</script>
<div class="no-compat">
    <?= $incompatible ?>
</div>
