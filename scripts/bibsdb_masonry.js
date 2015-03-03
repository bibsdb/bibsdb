/*global $, jQuery */

(function ($) {
  "use strict";

  $(document).ready(function () {
    // Was function init().
    var $wrapper = $('.masonry-news-list').masonry();
    // Trigger masonry after all the images have been loaded
    $wrapper.imagesLoaded(function () {
      $wrapper.masonry({
        // options
        itemSelector : '.brick',
        isFitWidth: false,
        columnWidth: 250,
        gutter: 12
      });
    });
  });

}) (jQuery);

