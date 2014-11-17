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
	 * Tags show and hide
	 * Hide page tags on search result items and items in taxonomy lists
	 * Hide page tags on bibsdb-rowlists except special tags
   */
	function hide_page_taxonomy_tags() {

		$( ".field-name-field-ding-page-tags" ).hide();
		$(".bibsdb-rowlist-tags .label").hide();
		$(".bibsdb-rowlist-tags .label:contains('Adgang fra biblioteket')").show();
		$(".bibsdb-rowlist-tags .label:contains('Adgang hjemmefra')").show();

	}


  

  // When ready start the magic.
  $(document).ready(function () {
		append_link_to_libraries_in_library_list();
		translate_staff_list_header_on_library_pages();
		hide_page_taxonomy_tags();

	

	});



})(jQuery);

