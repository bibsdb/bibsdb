(function($) {


	/**
	 * Hide all warnings about reservations that are about to expire, because we don't actually delete reservations.
	 */
	function hide_reservation_interest_period() {
		// Hide interest period settings in user profiles, because they have no effect
		$( "div[class*='interest-period']" ).hide();
		// Hide expiration date on individual reservations
		$( "#ding-reservation-reservations-notready-form li[class*='expire-date']" ).hide();
		// Hide message about reservation expiration, because we don't do that in Sonderborg
		$(".warning:contains('This reservation is about to expire.')").hide();
		$(".warning:contains('Denne reservering udløber snart.')").hide();

		// Hide interest period setting when modifying a reservation in ajax popup
		jQuery('.ui-widget').live('DOMNodeInserted', function () {
			$( "div[class*='interest-period']" ).hide();
		});
	}




	/**
	 * Change URL of bookmarks-link on profile page
	 */
	function change_bookmarks_menu_item_on_profile_page() {
		$(".pane-user-menu li a[href$='bookmarks']").attr("href", "/user/me/view#userlists")
	}

	



  // When ready start the magic.
  $(document).ready(function () {

		//hide_reservation_interest_period();
		//hide_bookmark_import_form();
		//hide_role_menu_item_on_profile_page();
		//add_renew_all_loans_button();
		change_bookmarks_menu_item_on_profile_page();

	});

})(jQuery);

