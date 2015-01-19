<?php
/*
@Name: Video
@Description: For video
@Preview: video.png
 */
?>
    <div class="columns_12 video">
        <div class='header'>
            <a href='#' class='backward'>
                Ga terug
            </a>
        </div>
        <div class='video-outline' onclick='var video = window.prompt("Vimeo video ID"); if (video) {this.outerHTML = "<iframe width=940 height=526 webkitAllowFullScreen mozallowfullscreen allowFullScreen frameborder=0 src=\"http://player.vimeo.com/video/" + video.replace(/[^0-9]/g, "") + "?title=0&amp;byline=0&amp;portrait=0&amp;color=00adef\"></iframe>";}'></div>
    </div>