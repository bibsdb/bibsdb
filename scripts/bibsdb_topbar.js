(function($) {

	/**
	 * Control visibility of search and login forms
	 * And show loginbox and hide search box if incorrect login was attempted so user can retry
	 */
	function control_topbar_search_box_visibility() {
	  var breakpoint_medium = 768;
	  
	  // If the user login is clicked make links disappear
	  // Make sure that login is shown even if button is pressed multiple time (it shouldn't toggle)
	  $('.js-topbar-link.topbar-link-user').on('click touchstart', function(e) {
	    $('.bibsdb-frontpage-links').css("display", "none");
	    $('.js-topbar-user').css("display", "block");
	    $('.topbar-menu .leaf .topbar-link-user').toggleClass( 'active', true );
	    
      e.preventDefault();
    });
    
    // If the search link is clicked make links appear
    // Make sure that search is shown even if button is pressed multiple time (it shouldn't toggle)
    $('.js-topbar-link.topbar-link-search').on('click touchstart', function(e) {
      $('.header-wrapper').css("display", "block");
      $('.bibsdb-frontpage-links').css("display", "block");
      $('.js-topbar-search').css("display", "block");
      $('.topbar-menu .leaf .topbar-link-search').toggleClass( 'active', true );
      // always hide links on small screens
      if ($( window ).width() <= breakpoint_medium ){
		    $('.bibsdb-frontpage-links').css("display", "none");
		  }
      e.preventDefault();
    });
	
	  // Show loginbox and hide search box if incorrect login was attempted so user can retry
		if ($( "div.messages.error:contains('Du har indtastet et forkert')" ).length) {
		  $('.topbar-menu .leaf .topbar-link-search').toggleClass( 'active', false );
		  $('.js-topbar-search').css("display", "none");
		  $('.front .js-topbar-search').css("display", "none");
		  $('.js-topbar-user').css("display", "block");
		  $('.bibsdb-frontpage-links').css("display", "none");
		  $('.topbar-menu .leaf .topbar-link-user').toggleClass( 'active', true );
		  
		}
		// Make the user-account-tab active when viewing the user-pages - and hide search
		else if (window.location.href.indexOf("user") > -1) {
			$('.topbar-menu .leaf .topbar-link-user-account').toggleClass('active', true);
			$('.header-wrapper').css("display", "none");
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
			$('.topbar-menu .leaf .topbar-link-search').toggleClass( 'active', true );
		}
	}
	



  // When ready start the magic.
  $(document).ready(function () {
		control_topbar_search_box_visibility();
	

	});



})(jQuery);

