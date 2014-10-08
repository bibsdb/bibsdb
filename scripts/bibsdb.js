/**
 * Resize box with frontpage-links to match rolltab height
 */


(function($) {
	
	function calculate_link_box_height() {
		var windowWidth = $(window).width();
		
		if (windowWidth >= 1210) {
			linkBoxHeight = 290;
		}
		else {
			linkBoxHeight = 290 * windowWidth / 1210
		}
		return linkBoxHeight;
	}
	
  $(document).ready(function () {
		
		/**
		 * Set height on frontpage-link-box on frontpage depending on window-width
		 */
		 $('.bibsdb-frontpage-links').height(calculate_link_box_height());
			$(window).resize(function () {
							$('.bibsdb-frontpage-links').height(calculate_link_box_height());
			});
     
			


		
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
	  * Tags show and hide
		* Hide page tags on search result items and items in taxonomy lists
		* Hide page tags on bibsdb-rowlists except special tags
		*/
		function hide_page_taxonomy_tags() {
	
			$( ".field-name-field-ding-page-tags" ).hide();
			$(".bibsdb-rowlist-tags .label").hide();
			$(".bibsdb-rowlist-tags .label:contains('Teknologi:')").show();
			$(".bibsdb-rowlist-tags .label:contains('Adgang hjemmefra og fra biblioteket')").show();
			$(".bibsdb-rowlist-tags .label:contains('Adgang KUN fra biblioteket')").show();
		
		}
		  
		
		/**
		 * Translate default pickup branch selection on first reservation
		 */
		function translate_pick_default_branch_text() {
			jQuery('.ui-widget').live('DOMNodeInserted', function () {
				$( "p:contains('In order to make quick resercvations, you must select a default pickup branch.')" ).text("Vælg hvor du som standard vil afhente dine reservationer.");
			});
		}
		
		/**
		 * Translate event category label on library event list
		 */
		function translate_event_category_label_on_library_event_list() {
				$( "label:contains('Event category ')" ).text("Kategori");
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
		
		/**
		 * Hide role menu item on profile page
		 */
		function hide_role_menu_item_on_profile_page() {
			$(".pane-user-menu li a[href$='roles']").parent().hide();
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
		 * Change how opening hours are displayed - work in progress
		 * 
		 */
		function modify_opening_hours_display() {
			alert("hej igen");
    	//$(".opening-hours-week span.name").css("color", "blue");	
    	jQuery('.opening-hours-week').one('DOMNodeInserted', function () {
				$(".name").css("float", "none");
				$(".notice-star").hide();
				$(".notice").show();

			});			
			
		}	
		
		
		// do the magic

		hide_reservation_interest_period();
		hide_role_menu_item_on_profile_page();
		control_library_link_visibility_in_event_lists();
		control_topbar_search_box_visibility();
		append_link_to_libraries_in_library_list();
		translate_pick_default_branch_text();
		add_renew_all_loans_button();
		translate_staff_list_header_on_library_pages();
		hide_bookmark_import_form();
		translate_event_category_label_on_library_event_list();
		hide_page_taxonomy_tags();
		//resize_frontpage_links_box();
		//modify_opening_hours_display();
		
		
	});	

})(jQuery);


 
