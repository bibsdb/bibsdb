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
		/** 
	 * If teaser is empty the html-tag will be hidden on page 
	 */
	 function hide_teaser_on_page_if_empty() {
	 	if ($(".node-type-ding-page .page-lead").is(':empty')) {
	 		$(".node-type-ding-page .page-lead").hide();
	 	}
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

  /** 
	* Attach class to default-layout if editor is logged in. Used to style breadcrumbs.
	*/    
	function attach_class_to_default_layout() {
    // Attach class if an editor is logged in
    $("body").has("#toolbar").find(".default-layout").addClass("editormode");
  }


  

  // When ready start the magic.
  $(document).ready(function () {
  	hide_page_taxonomy_tags();
  	bibsdb_foldable_list();
  	attach_message_to_contact_page();
  	hide_teaser_on_page_if_empty();
  	attach_class_to_default_layout();
  });



})(jQuery);

