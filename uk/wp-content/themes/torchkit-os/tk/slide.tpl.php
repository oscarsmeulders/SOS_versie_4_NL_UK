<?php use \TorchKit\Slide\PostSlide; ?>
<?php $chapter = $slide instanceof PostSlide ? $slide->getMeta("chapter") : ""; ?>
<?php $thumbnail = $slide instanceof PostSlide ? $slide->getThumbnail() : ""; ?>

<section <?= $attributes ?>>
  <div class="thumb">
    <?php if($chapter != "") { ?>
		<h2><?= $chapter; ?></h2>
	<?php } else { ?>
		<h2><?= $title; ?></h2>
	<?php } ?>
  </div>
  <div class="control navigate-left"></div>
  <div class="control navigate-right"></div>
  <div class="control navigate-up"></div>
  <div class="control navigate-down"></div>

  <div class="content">
      <?= $content ?>
  </div>
</section>
