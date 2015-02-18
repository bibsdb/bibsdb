(function($) {


	/** 
	 * Tags show and hide
	 * Hide page tags on search result items and items in taxonomy lists
	 * Hide page tags on bibsdb-rowlists except special tags
   */
	function hide_page_taxonomy_tags() {

		$( ".field-name-field-ding-page-tags" ).hide();
		$(".bibsdb-rowlist-tags li").hide();
		$(".bibsdb-rowlist-tags li:contains('Adgang fra biblioteket')").show();
		$(".bibsdb-rowlist-tags li:contains('Adgang hjemmefra')").show();

	}
	
	function bibsdb_foldable_list() {

	
	  $(".bibsdb-toggle-fold").click(function() {
	      //$(".bibsdb-foldable-field").hide();
	      $(this).siblings(".bibsdb-foldable-field").slideToggle("fast");
    });
	}
	
	/** 
	* Attach message to contact-page
  */    
  function attach_message_to_contact_page() {
 
    // only apply to contact page
    if (window.location.href.indexOf("/contact") == -1) {
      return;
    }

    var message = $('<div>').addClass("bibsdb-contact-message").text("Spørgsmål og ønsker til bestillinger skal ske ved personlig eller telefonisk henvendelse.");
   
    $(".primary-content .pane-content").prepend(message);
  }


  

  // When ready start the magic.
  $(document).ready(function () {
		hide_page_taxonomy_tags();
		bibsdb_foldable_list();
		attach_message_to_contact_page();
	});



})(jQuery);

