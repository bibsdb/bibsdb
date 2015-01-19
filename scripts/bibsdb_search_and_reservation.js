(function($) {


	/**
	 * Translate default pickup branch selection on first reservation
	 */
	function translate_pick_default_branch_text() {
		jQuery('.ui-widget').live('DOMNodeInserted', function () {
			$( "p:contains('In order to make quick resercvations, you must select a default pickup branch.')" ).text("Vælg hvor du som standard vil afhente dine reservationer.");
		});
	}

	/**
	 * Make holdings-info start expanded on page-load
	 * 
	 */
	function expand_holdings_on_page_load() {
		$('.group-holdings-available .field-group-format-wrapper').css("display", "block");	
	}	




  // When ready start the magic.
  $(document).ready(function () {
		translate_pick_default_branch_text();
		expand_holdings_on_page_load();
	});



})(jQuery);

