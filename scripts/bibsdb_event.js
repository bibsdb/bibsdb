(function($) {


	/**
	 * Translate event category label on library event list
	 */
	function translate_event_category_label_on_library_event_list() {
			$( "label:contains('Event category ')" ).text("Kategori");
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
    * Attach campagns to event-page
    */    
   function attach_campagigns_to_event_page() {
   
    // only apply to events pages
    if (window.location.href.indexOf("arrangementer") == -1) {
      return;
    }
    
    var elements = new Array();
    
    //fetch library-list or taxonomy-menu
    elements[0] = $('.pane-library-list');
    
    if (elements[0].length == 0) {
      elements[0] = $('.primary-content .pane-taxonomy-menu');
    }
    
    elements[0] = $('<div>').prepend(elements[0]);
    

    // add campaigns
    var campaign1 = $('<div>');
    var campaign1_banner1 = $('<div>');
    var campaign1_banner2 = $('<div>');
    $('<img />').attr({
  		src:'https://biblioteket.sonderborg.dk/sites/default/files/arrangementsbanner_boern_2016.png',
  		width:'198',
  		height:'276'
		}).appendTo($('<a />').attr({
  		href:'https://biblioteket.sonderborg.dk/nyheder/kort-nyt/arrangementer-born-forar-2016'
		}).appendTo(campaign1_banner1));
    $('<img />').attr({
  		src:'https://biblioteket.sonderborg.dk/sites/default/files/arrangementsbanner_voksne_0.png',
  		width:'198',
  		height:'276'
		}).appendTo($('<a />').attr({
  		href:'https://biblioteket.sonderborg.dk/nyheder/kort-nyt/biblioteket-soenderborgs-magasin-velkommen-til-foraarssaesonen-2016'
		}).appendTo(campaign1_banner2));
		campaign1_banner1 = bibsdb_add_border(campaign1_banner1);
		campaign1_banner2 = bibsdb_add_border(campaign1_banner2);
		campaign1 = bibsdb_create_html([campaign1_banner1, campaign1_banner2]);
    

    var campaign2 =  $('<div>').prepend('<a href="https://biblioteket.sonderborg.dk/indhold/sms-om-arrangementer"><img src="https://biblioteket.sonderborg.dk/sites/default/files/sms_om_arrangementer-1220-4-1.jpg" /></a>');
    campaign2 = bibsdb_add_border(campaign2);
    
    elements[0] = elements[0].append(campaign2);
    elements[1] = campaign1;
 
	  
	  var html = bibsdb_create_html(elements);

	  $(".primary-content > div:nth-child(1)").after(html);
	 }

	/** 
	 * Hide link to group on events
   */
	function hide_group_ref_on_events() {
		$( ".event .groups-ref" ).hide();
	}
	
	/** 
	 * Move the ticket button to event-info
   */
	function move_ticket_button() {
	  $(".field-name-field-place2book-tickets")
    .prependTo(".event-info");
	}
	
	/**
	* Make labels equal size by removing extra label-classes
	*/
	function remove_extra_label_class() {
	  $(".event-category a").removeClass("label label-info");
	}
	
	/**
	* Replace user-icon with info-icon in event info
	*/
	function replace_icon() {
	  $(".event-info .icon-user").removeClass("icon-user").addClass("icon-info-sign");
	  //switchClass("icon-user", "icon-info-circle");
	}
	
	
	
	
  

  // When ready start the magic.
  $(document).ready(function () {
		translate_event_category_label_on_library_event_list();
		control_library_link_visibility_in_event_lists();
		hide_group_ref_on_events();
		move_ticket_button();
		remove_extra_label_class();
		replace_icon();
		//attach_campagigns_to_event_page();
	});
	

	
	
	




})(jQuery);

