(function($) {


	function calculate_link_box_height() {
		var windowWidth = $(window).width();
		
		if (windowWidth >= 1210) {
			linkBoxHeight = 290;
		}
		else {
			linkBoxHeight = 290 * windowWidth / 1210
		}
		return linkBoxHeight;
	}

	/**
	 * Set height on frontpage-link-box on frontpage depending on window-width
	 */
	function set_height_on_frontpage_link_box() {

		 $('.bibsdb-frontpage-links').height(calculate_link_box_height());
			$(window).resize(function () {
							$('.bibsdb-frontpage-links').height(calculate_link_box_height());
			});
	}




  // When ready start the magic.
  $(document).ready(function () {
		set_height_on_frontpage_link_box();

	

	});



})(jQuery);

