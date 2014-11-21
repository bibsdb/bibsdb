(function($) {


	/**
	 * Translate event category label on library event list
	 */
	function translate_event_category_label_on_library_event_list() {
			$( "label:contains('Event category ')" ).text("Kategori");
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
	 * Hide link to group on events
   */
	function hide_group_ref_on_events() {
		$( ".event .groups-ref" ).hide();
	}


  // When ready start the magic.
  $(document).ready(function () {
		translate_event_category_label_on_library_event_list();
		control_library_link_visibility_in_event_lists();
		hide_group_ref_on_events();

	

	});



})(jQuery);

