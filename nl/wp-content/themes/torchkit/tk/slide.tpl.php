<section <?= $attributes ?>>
  <div class="thumb">
    <?php if (isset($image)) { ?>
        <img src="<?= $image ?>" />
    <?php } ?>
    <h2>
        <?= $title ?>
    </h2>
  </div>
  <div class="control navigate-left"></div>
  <div class="control navigate-right"></div>
  <div class="control navigate-up"></div>
  <div class="control navigate-down"></div>
  <div class="content">
    <?= $content ?>
  </div>
</section>
