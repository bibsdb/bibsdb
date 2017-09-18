(function($) {


	/**
	 * Translate staff-list-header on library page
	 */
	 function translate_staff_list_header_on_library_pages() {

	 	$(".pane-ding-staff-ding-staff-library-departments h2:first-of-type").text(function(index, text) {
	 		return text.replace("departments & staff", "afdelinger og medarbejdere");
	 	});

	 }

		/**
	 * Replace openings hours for collection point on library list
	 */
	 function replace_opening_hours_for_collection_point_on_library_list() {

	 	$('.library-list li').each(function() {

		  // only apply to collection points
		  var a_href = $(this).find('.library-title a').attr('href');

		  if (a_href.indexOf("/biblioteksafhentningssted") == -1) {
		  	return;
		  }

		  $(this).find('.opening-hours-toggle').hide();
		  $(this).find('.libraries-opening-hours').hide();
		  $(this).find('.bibsdb-js-library-link').hide();


		  var msg1 = $('<p>').text("Åbent i skolebibliotekets åbningstid.");
		  var msg2 = $('<p>').text("På et afhentningssted kan man hente reserverede materialer og aflevere materialer.");
		  var message = $('<div>').addClass("bibsdb-collection-point-opening-hours-list").append(msg1, msg2);

		  $(this).find('.libraries').after(message);

		});

	 }


	/**
	 * Replace openings hours for collection point on library page
	 */
	 function replace_opening_hours_for_collection_point_on_library_page() {

	 // only apply to contact page
	 if (window.location.href.indexOf("/biblioteksafhentningssted") == -1) {
	 	return;
	 }

	 $('.opening-hours-toggle').hide();
	 $('.ding-library-events').hide();
	 $('.js-opening-hours-toggle-element').hide();


	 var msg1 = $('<li>').text("Åbent i skolebibliotekets åbningstid.");
	 var msg2 = $('<li>').text("På et afhentningssted kan man hente reserverede materialer og aflevere materialer.");
	 var msg3 = $('<li>').text("Hver tirsdag bliver der bragt materialer ud til afhentningsstederne.");
	 var msg4 = $('<li>').text("Bøgerne står i en kasse til dig. De er udlånt til dig.");
	 var msg5 = $('<li>').text("Når du afleverer lægger du bøgerne tilbage i kassen.");
	 var msg6 = $('<li>').text("Vi er opmærksom på at materialerne er længe undervejs. Løber der gebyrer på under transporten, tager vi hensyn til det.");
	 var message = $('<ul>').addClass("bibsdb-collection-point-opening-hours-page page-content").append(msg1, msg2, msg3, msg4, msg5, msg6);

	 $('.ding-library-contact').after(message);	 
	}


	/**
	 * Add highlight to sonderborg library on library list to show that it is closed
	 */
	 function highlight_sonderborg_on_library_list() {
	 	$("#ding-library-page h2.page-title a:contains('Sønderborg')").text("Biblioteket Sønderborg - LUKKET PGA. FLYTNING");
	 	$("#ding-library-page h2.page-title a:contains('Sønderborg')").css('color', 'red');

	 	var msg = $('<div>').css('color', 'red').text("Vi åbner igen til november i Multikulturhuset, Nørre Havnegade 15");
	 	$("#ding-library-page h2.page-title").has("a:contains('Sønderborg')").after(msg);
	 }

	/**
	 * Add highlight to sonderborg library on library list to show that it is closed
	 */
	 function highlight_sonderborg_on_library_page() {

	 	var msg = $('<p>').css('color', 'red').text("Biblioteket Sønderborg er lukket pga. af flytning. Vi åbner igen til november i Multikulturhuset, Nørre Havnegade 15");
	 	$("#ding-library-front .ding-library-image").after(msg);
	 }



  // When ready start the magic.
  $(document).ready(function () {
  	translate_staff_list_header_on_library_pages();
  	replace_opening_hours_for_collection_point_on_library_list();
  	replace_opening_hours_for_collection_point_on_library_page();
  	highlight_sonderborg_on_library_list();
  	highlight_sonderborg_on_library_page();
  });



})(jQuery);

