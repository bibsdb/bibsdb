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
	 * Hide bookmark import form. We don't provide this service.
	 */
	 function hide_bookmark_import_form() {
		 $( ".pane-import" ).hide();
	 }

	/**
	 * Hide role menu item on profile page
	 */
	function hide_role_menu_item_on_profile_page() {
		$(".pane-user-menu li a[href$='roles']").parent().hide();
	}

	/**
	 * Create renew all button
	 */
	function add_renew_all_loans_button() {
		// Add renew all submit button
		$("#ding-loan-loans-form div:first").prepend("<div class=\"gray-box renew-loan-button\"><input type=\"submit\" id=\"bibsdb-renew-all-submit-button\" name=\"op\" value=\"Forny alle\" class=\"form-submit\"></div>");
		
		// Make sure the button is not disabled by ding_loan.js
		$("#ding-loan-loans-form input:checkbox").change(function() {
			$( "#bibsdb-renew-all-submit-button" ).removeAttr("disabled");
		});
		
		
		//If clicked ckeck all checkboxes before submit
		$( "#bibsdb-renew-all-submit-button" ).bind( "click", function() {
			$( "#ding-loan-loans-form input:checkbox" ).attr('checked', 'checked');
		});
		

	}



  // When ready start the magic.
  $(document).ready(function () {

		hide_reservation_interest_period();
		hide_bookmark_import_form();
		hide_role_menu_item_on_profile_page();
		add_renew_all_loans_button();

	});

})(jQuery);

