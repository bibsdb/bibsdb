(function($) {

	/**
	 * Add explicit library-link to each library in library list - the header link is hard to see
	 */
	function append_link_to_libraries_in_library_list() {
			
		$('.library-list li').each(function() {
			var $link = $(this).find('.library-title a').clone();
			$link.text($link.text() + "s lokalside");
			var $destination = $(this).find('.ding-library-right');
			$destination.append("<div class='bibsdb-js-library-link'></div>");
			$destination = $destination.find('.bibsdb-js-library-link');
			$destination.append("Gå til: ");
			$destination.append($link);
			//$link.appendTo($destination);
		});
	}

	/**
	 * Translate staff-list-header on library page
	 */
	function translate_staff_list_header_on_library_pages() {
		 
	 $(".pane-ding-staff-ding-staff-library-departments h2:first-of-type").text(function(index, text) {
				return text.replace("departments & staff", "afdelinger og medarbejdere");
	 });
	 
	}
	
		/**
	 * Replace openings hours for collection point on library list
	 */
	function replace_opening_hours_for_collection_point_on_library_list() {
	 
		$('.library-list li').each(function() {
		
		  // only apply to collection points
		  var a_href = $(this).find('.library-title a').attr('href');
		     
      if (a_href.indexOf("/biblioteksafhentningssted") == -1) {
        return;
      }
      		
			$(this).find('.opening-hours-toggle').hide();
			$(this).find('.libraries-opening-hours').hide();
			$(this).find('.bibsdb-js-library-link').hide();
			
			
			var msg1 = $('<p>').text("Åbent i skolebibliotekets åbningstid.");
			var msg2 = $('<p>').text("På et afhentningssted kan man hente reserverede materialer og aflevere materialer.");
			var message = $('<div>').addClass("bibsdb-collection-point-opening-hours-list").append(msg1, msg2);
			
			$(this).find('.libraries').after(message);
			
		});
	 
	}
	
	
	/**
	 * Replace openings hours for collection point on library page
	 */
	function replace_opening_hours_for_collection_point_on_library_page() {
	 
	 // only apply to contact page
   if (window.location.href.indexOf("/biblioteksafhentningssted") == -1) {
    return;
   }
    
   $('.opening-hours-toggle').hide();
   $('.ding-library-events').hide();
   $('.js-opening-hours-toggle-element').hide();
   

	 var msg1 = $('<p>').text("Åbent i skolebibliotekets åbningstid.");
	 var msg2 = $('<p>').text("På et afhentningssted kan man hente reserverede materialer og aflevere materialer.");
	 var message = $('<div>').addClass("bibsdb-collection-point-opening-hours-page bibsdb-contact-message").append(msg1, msg2);
	
	 $('.ding-library-contact').after(message);	 
	}


  

  // When ready start the magic.
  $(document).ready(function () {
		append_link_to_libraries_in_library_list();
		translate_staff_list_header_on_library_pages();
		replace_opening_hours_for_collection_point_on_library_list();
		replace_opening_hours_for_collection_point_on_library_page();
	});



})(jQuery);

