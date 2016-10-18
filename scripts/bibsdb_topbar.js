(function($) {


	/**
	 * Control visibility of search and login forms
	 * And show loginbox and hide search box if incorrect login was attempted so user can retry
	 */
	 function control_topbar_search_box_visibility() {
		// At 768 pixels there are major layout changes
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
	
	function bibsdb_add_icon_to_facebook_link() {

		var link = $(".secondary-menu a:contains('Facebook')");
		var span = $('<span>').text(link.text());
		link.empty();

		link.append($('<i>').addClass("icon-facebook-sign").after(span));
	}

	function bibsdb_new_user_menu_item() {
		// If the wayf registration page is shown make search and login inactive and make new-user active
		$('.page-gatewayf-registration .leaf .topbar-link-search').removeClass('active');
		$('.page-gatewayf-registration .leaf .topbar-link-user').removeClass('active');
		$('.page-gatewayf-registration .leaf .topbar-link-new-user').addClass('active');

		// Add class topbar-link-new-user to li
		$('.topbar-menu li:has(a[href*="/gatewayf/registration/information"])').removeClass("topbar-link-menu").addClass("topbar-link-new-user");

		// Add logged in class to a.topbar-link-new-user
		$('body.logged-in .topbar-menu li a[href*="/gatewayf/registration/information"]').addClass("logged-in");

		// Add class topbar-link-new-user to a
		$('.topbar-menu li a[href*="/gatewayf/registration/information"]').removeClass("topbar-link-menu").addClass("topbar-link-new-user");

	  // Change icon
	  $('.topbar-menu li a[href*="/gatewayf/registration/information"] i').removeClass("icon-align-justify").addClass("icon-plus");

	  // The default click-event on the menu item is prevented. Unbind click events to make the menu item open the registration page.
	  $('.js-topbar-link.topbar-link-new-user').unbind('click touchstart');

	  // If the search link is clicked make new user link inactive.
	  $('.js-topbar-link.topbar-link-search').on('click touchstart', function(e) {
	  	$('.topbar-menu .leaf .topbar-link-new-user').toggleClass( 'active', false );
	  	$('.page-gatewayf-registration .bibsdb-frontpage-links').css("display", "none");
	  });

   	// If the user link is clicked make new user link inactive.
   	$('.js-topbar-link.topbar-link-user').on('click touchstart', function(e) {
   		$('.topbar-menu .leaf .topbar-link-new-user').toggleClass( 'active', false );
   	});

    //Change the text on the button below login fra Opret bruger to Ny bruger
    $('.ding-gatewayf-registration-link').text('Ny bruger af biblioteket?');

  }

  function bibsdb_default_search_query() {
		// Issue a search on all content when the value in the dropdown is changed
		$('#search-block-form #edit-ting-field-search').change(function() {

			// If the user has not entered a search, then find everything in the category
			if ($('#search-block-form .form-text').val().trim().length === 0) {
				$('#search-block-form .form-text').val('term.type=*');
			}
			$('#search-block-form').submit();

			// Remove the default query from the search field
			if ($('#search-block-form .form-text').val().indexOf('term.type=*') > -1) {
					$('#search-block-form .form-text').val('');
			}
		});

		// Remove the default query from the search field
		if ($('#search-block-form .form-text').val().indexOf('term.type=*') > -1) {
			$('#search-block-form .form-text').val('');
		}
	}


  // When ready start the magic.
  $(document).ready(function () {
  	control_topbar_search_box_visibility();
  	bibsdb_add_icon_to_facebook_link();
  	bibsdb_new_user_menu_item();
  	bibsdb_default_search_query();

		//if screen is resized og tablet is rotated a new calculation must be made
		$( window ).resize(function() {
			control_topbar_search_box_visibility();
		});


	});











})(jQuery);



