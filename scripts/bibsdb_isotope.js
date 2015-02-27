(function($) {

   /**
    * Initialize isotope
    */    
  function initialize_isotope() {
  
    // initialize Isotope after all images have loaded
    var $container = $('.front .news-list').imagesLoaded( function() {
      // init
      $container.isotope({
        // options
        itemSelector: '.front .news-list-item',
        layoutMode:'masonry',
          masonry:{
              columnWidth: 320
          } 
      });
    });

  }

  // When ready start the magic.
  $(document).ready(function () {
		initialize_isotope();
	});

})(jQuery);

