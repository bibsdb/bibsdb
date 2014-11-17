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

	/**
	 * Show topbar search box on all pages except search result pages 
	 * Also hide if login form is visible
	 * And show loginbox and hide search box if incorrect login was attempted so user can retry
	 */
	function control_topbar_search_box_visibility() {
	
		if ($( "div.messages.error:contains('Du har indtastet et forkert')" ).length) {
		  $('.topbar-menu .leaf .topbar-link-search').removeClass('active');
		  $('.js-topbar-search').css("display", "none");
		  $('.front .js-topbar-search').css("display", "none");
		  $('.js-topbar-user').css("display", "block");
		}
		else if (window.location.href.indexOf("search/") > -1) {
			$('.js-topbar-search').css("display", "none");
		}
		else if ($('.js-topbar-user').is(":visible")) {
			$('.js-topbar-search').css("display", "none");
		} 
		else {
			// Display the element.
			$('.js-topbar-search').css("display", "block");
		}
	}


  // When ready start the magic.
  $(document).ready(function () {
		translate_pick_default_branch_text();
		expand_holdings_on_page_load();
		control_topbar_search_box_visibility();
	

	});



})(jQuery);

