(function($) {
	
	/**
   * Hide all warnings about reservations that are about to expire, because we don't actually delete reservations.
   */
   
  $(document).ready(function () {

		// Hide message about reservation expiration, because we don't do that in Sonderborg
		$(".warning:contains('This reservation is about to expire.')").hide();
		
		// Show topbar search box on all pages except search result pages
		if (window.location.href.indexOf("search/") > -1) {
					$('.js-topbar-search').css("display", "hidden");
		}
		else {
			// Display the element.
			$('.js-topbar-search').css("display", "block");
		}
	
	});
	
	
	

})(jQuery);


 
