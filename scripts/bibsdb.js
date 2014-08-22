(function($) {
	
   
  $(document).ready(function () {
		
		/**
		 * Hide all warnings about reservations that are about to expire, because we don't actually delete reservations.
		 */
		function hide_reservation_expiration_messages() {
    		// Hide message about reservation expiration, because we don't do that in Sonderborg
				$(".warning:contains('This reservation is about to expire.')").hide();
		}
		
		
		/**
		 * Do this to NOT print the library-link in event-lists if the location is else where.
		 * Hide the first event-list-location in lists if there is a second.
		 * 
		 */
		function control_library_link_visibility_in_event_lists() {
    		$('.event-list-item').each(function(i) {
				
					var location = $(this).find('.event-list-location');
					if(location.length > 1) {
						location.first().hide();
					}
        
				});
		}

		/**
		 * Show topbar search box on all pages except search result pages 
		 * Also hide if login form is visible
		 * 
		 */
		function control_topbar_search_box_visibility() {

			if (window.location.href.indexOf("search/") > -1) {
				$('.js-topbar-search').css("display", "hidden");
			}
			else if ($('.js-topbar-user').is(":visible")) {
				$('.js-topbar-search').css("display", "hidden");
			} 
			else {
				// Display the element.
				$('.js-topbar-search').css("display", "block");
			}
		}
		
		function append_link_to_libraries_in_library_list() {
		
			
			$('.library-list li').each(function() {
				var $link = $(this).find('.library-title a').clone();
				$link.text("Gå til " + $link.text() + "s lokalside >");
				var $destination = $(this).find('.ding-library-right');
				$destination.append("<div class='bibsdb-js-library-link'></div>");
				$destination = $destination.find('.bibsdb-js-library-link');
				$link.appendTo($destination);
			});
		}
		
		
		// do the magic
		hide_reservation_expiration_messages();
		control_library_link_visibility_in_event_lists();
		control_topbar_search_box_visibility();
		append_link_to_libraries_in_library_list();
		

		
		
	});	

})(jQuery);


 
