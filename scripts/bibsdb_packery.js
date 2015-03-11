/*global $, jQuery */

(function ($) {
  "use strict";

  $(document).ready(function () {
    // Was function init().
    var $wrapper = $('.masonry-news-list').packery();
    // Trigger masonry after all the images have been loaded
    $wrapper.imagesLoaded(function () {
      $wrapper.packery({
        // options
        columnWidth: '.column-width',
        itemSelector: '.brick',
        isFitWidth: false,
        gutter: '.gutter-width',
        transitionDuration: 0
      });
    });
  });

}) (jQuery);

