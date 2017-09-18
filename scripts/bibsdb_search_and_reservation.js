(function($) {

	function swap(a, b) {
		a = $(a); b = $(b);
		var tmp = $('<span>').hide();
		a.before(tmp);
		b.before(a);
		tmp.replaceWith(b);
	}

	/**
	 * Hide the too-may-search-results message in search result
	 */
	 function hide_too_many_search_results_message() {
	 	$('.search-field-in-content--message').hide();
	 }


	/**
	 * Translate default pickup branch selection on first reservation
	 */
	 function translate_pick_default_branch_text() {
	 	jQuery('.ui-widget').live('DOMNodeInserted', function () {
	 		$( "p:contains('In order to make quick resercvations, you must select a default pickup branch.')" ).text("Vælg hvor du som standard vil afhente dine reserveringer.");
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
	 * Let material-details and holdings-info swap place
	 */
	 function swap_holdings_and_material_details() {
	 	swap('.group-holdings-available','.group-material-details');	
	 }	

	/**
	 * Replace link-text i branch-facet
	 */
	 function replace_link_text_in_branch_facet() {


	 	$("#facet-branch a").html(function(i,t){
	 		t = t.replace('aug ','augustenborg ');
	 		t = t.replace('søn ','sønderborg ');
	 		t = t.replace('bro ','broager ');
	 		t = t.replace('dyb ','dybbøl ');
	 		t = t.replace('nor ','nordborg ');
	 		t = t.replace('sot ','vester sottrup ');
	 		t = t.replace('grå ','gråsten ');
	 		t = t.replace('hør ','hørup ');
	 		t = t.replace('ulk ','ulkebøl ');



	 		return t;
	 	});
	 }


	/**
	 * Add sonderborg closed message to reservation confirmation
	 */
	 function add_sonderborg_closed_msg_to_reservation_confirmation() {
	 	jQuery('.ui-widget').live('DOMNodeInserted', function () {
	 		var $ul = $( "li:contains('afhentning på Sønderborg Bibliotek')" ).parent();
	 		var length = $ul.children().length;
	 		if (length == 2) {
	 			$li = $("<li>").text("BEMÆRK! DU SKAL HENTE DINE RESERVERINGER PÅ DYBBØL BIBLIOTEK IND TIL NOVEMBER, HVOR BIBLIOTEKET SØNDERBORG ÅBNER IGEN I MULTIKULTURHUSET, NØRRE HAVNEGADE 15.");
	 			$('.ui-widget ul').append($li);
	 		}
	 	});
	 }	


	/**
	 * Add sonderborg closed message to reservation confirmation
	 */
	 function add_sonderborg_closed_msg_to_pick_default_branch_text() {
	 	jQuery('.ui-widget').live('DOMNodeInserted', function () {
	 		$( "select#edit-provider-options-alma-preferred-branch option:contains('Sønderborg Bibliotek')").text("Sønderborg Bibliotek - lukket indtil november");
	 	});
	 }	

	 function add_sonderborg_closed_msg_to_reservation_page() {
	 	// Only run for reservations page
	 	if (window.location.href.indexOf("user/me/status/reservations") == -1) {
	 		return;
	 	}

	 	// Only show message if user has reservations to be picked up in sonderborg
	 	var $sonderborg_res = $( ".item-information-data:contains('Sønderborg Bibliotek')" );
	 	if ($sonderborg_res.length == 0) {
	 		return;
	 	}

	 	var msg1 = $('<p>').css('color', 'red').text("Biblioteket Sønderborg er lukket pga. af flytning. Vi åbner igen til november i Multikulturhuset, Nørre Havnegade 15.");
	 	var msg2 = $('<p>').css('color', 'red').text("Reserveringer med afhentning i Sønderborg skal hentes på Dybbøl Bibliotek .");
	 	$(".pane-reservations").first().append(msg1, msg2);




	 }
	 
	 




  // When ready start the magic.
  $(document).ready(function () {
  	replace_link_text_in_branch_facet();
  	translate_pick_default_branch_text();
  	expand_holdings_on_page_load();
  	swap_holdings_and_material_details();
  	hide_too_many_search_results_message();
  	add_sonderborg_closed_msg_to_reservation_confirmation();
  	add_sonderborg_closed_msg_to_pick_default_branch_text();
  	add_sonderborg_closed_msg_to_reservation_page();
  });



})(jQuery);

