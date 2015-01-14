<section <?= $attributes ?>>
  <div class="thumb">
    <?php if (isset($image)) { ?>
        <img src="<?= $image ?>" />
    <?php } ?>
    <?= $title ?>
  </div>

  <div class="content">
    <?= $content ?>
  </div>
</section>
