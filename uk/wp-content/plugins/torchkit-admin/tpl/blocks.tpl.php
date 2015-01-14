<div>
  <?php if(count($categories) == 0) { ?>
    <p>No blocks found</p>
  <?php } else { ?>
    <ul>
      <?php foreach($categories as $category => $_) { ?>
      <li>
        <a href="#tab-<?= sanitize_title_with_dashes($category); ?>">
          <?= $category ?>
        </a>
      </li>
      <?php } ?>
    </ul>

    <?php foreach($categories as $category => $blocks) { ?>
      <div id="tab-<?= sanitize_title_with_dashes($category); ?>">
        <ul class="items">
          <?php foreach($blocks as $block) { ?>
            <?php
            $selectedBlock = isset($selected->$category)
                              && in_array($block, $selected->$category)
            ?>
            <li>
              <input type="checkbox"
                id="tk-block-<?= $category ?>-<?= $block ?>"
                name="tk-block[<?= $category ?>][]"
                value="<?= $block ?>"
                <?= $selectedBlock ? 'checked' : ''; ?>
              />
              <label for="tk-block-<?= $category ?>-<?= $block ?>">
                <?= $block ?>
              </label>
            </li>
          <?php } ?>
        </ul>
      </div>
    <?php } ?>
  <?php } ?>
</div>
