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
	 * Control visibility of topbar elements
	 * 
	 * 
	 * And show loginbox and hide search box if incorrect login was attempted so user can retry
	 */
	function control_topbar_search_box_visibility() {
	  var breakpoint_medium = 768;
	
	  // Show loginbox and hide search box if incorrect login was attempted so user can retry
		if ($( "div.messages.error:contains('Du har indtastet et forkert')" ).length) {
		  $('.topbar-menu .leaf .topbar-link-search').removeClass('active');
		  $('.js-topbar-search').css("display", "none");
		  $('.front .js-topbar-search').css("display", "none");
		  $('.js-topbar-user').css("display", "block");
		}
		// Hide topbar on search result pages (search box is displayed further down the page)
		else if (window.location.href.indexOf("search/") > -1) {
			$('.js-topbar-search').css("display", "none");
		}
		// Hide if login form is visible
		else if ($('.js-topbar-user').is(":visible")) {
			$('.js-topbar-search').css("display", "none");
		} 
		// On small screens hide search box on load on all pages except the frontpage
		else if ($( window ).width() <= breakpoint_medium ){
		  if ($('.front .js-topbar-search').length > 0 ) {
		    $('.front .js-topbar-search').css("display", "block");
		  }
		  else {
		    $('.js-topbar-search').css("display", "none");
		  }
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

