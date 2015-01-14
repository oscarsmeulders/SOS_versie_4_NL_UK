<?php

namespace TorchKit\Factory;

use \TorchKit\Exception\UnknownTypeException;
use \TorchKit\Slide;

/**
 * Factory to create slides
 *
 * TODO: Don't rely on menu items for slides
 */
class SlideFactory
{
    const TYPE_POST   = 'post';
    const TYPE_AJAX   = 'ajax';
    const TYPE_IFRAME = 'iframe';
    const TYPE_FLIP = 'flip';

    /**
     * Create a slide from a menu item
     *
     * @param \WP_Post $menuItem menu item to create slide from
     *
     * @return AbstractSlide The created slide
     */
    public static function fromMenuItem(\WP_Post $menuItem, $flipParentId = NULL)
    {
        $isFlipSlide = $flipParentId !== NULL
                        && $menuItem->menu_item_parent == $flipParentId;

        $type = self::determineSlideType($menuItem);

        switch($type) {
            case self::TYPE_POST:
                return new Slide\PostSlide($menuItem, $isFlipSlide);
                break;
            case self::TYPE_AJAX:
                return new Slide\AjaxSlide($menuItem, $isFlipSlide);
                break;
            case self::TYPE_IFRAME:
                return new Slide\IframeSlide($menuItem, $isFlipSlide);
                break;
        }
    }

    /**
     * Determine a slide's type
     *
     * @param \WP_Post $menuItem menu item to determine post type for
     *
     * @return SlideFactory::TYPE_* Type of the slide
     *
     * @raises UnknownTypeException Raised when the slide type can't be determined
     */
    private static function determineSlideType(\WP_Post $menuItem)
    {
        if(in_array($menuItem->object, array('slide'))) {
            $iframeVal = get_post_meta(
                $menuItem->object_id, 'wpcf-slide-iframe', true
            ) == "1";
            return $iframeVal ? self::TYPE_IFRAME : self::TYPE_POST;
        } else if($menuItem->object == 'custom') {
            if($menuItem->target == '_blank') {
                return self::TYPE_IFRAME;
            } else {
                return self::TYPE_AJAX;
            }
        }

        throw new UnknownTypeException($menuItem);
    }
}
