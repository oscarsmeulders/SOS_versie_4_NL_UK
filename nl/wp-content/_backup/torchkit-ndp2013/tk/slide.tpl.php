<?php use \TorchKit\Slide\PostSlide; ?>
<?php $chapter = $slide instanceof PostSlide ? $slide->getMeta("chapter") : ""; ?>
<?php $thumbnail = $slide instanceof PostSlide ? $slide->getThumbnail() : ""; ?>

<section <?= $attributes ?>>
  <div class="thumb">
    <?php if (isset($thumbnail)) { ?>
        <?= $thumbnail ?>
    <?php } ?>
    <?php if($chapter != "") { ?>
        <span class='number'>
            <?= $chapter; ?>
        </span>
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
    <?php if($chapter != "") { ?>
        <span class='number'>
            <?= $chapter; ?>
        </span>
        <h2>
            <?= $title ?>
        </h2>
    <?php } ?>
      <?= $content ?>
  </div>
</section>
