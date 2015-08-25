(function($) {

   /**
    * Attach links to front-page
    */    
  function attach_links_to_front_page() {
   
 

    var elements = new Array();
    elements[0] = $('<section>').addClass("bibsdb-frontpage-links");
        
    var link1 = $('<a>').attr("href", "http://biblioteket.sonderborg.dk/sites/default/files/sadan_soger_og_reserverer_du.pdf").attr("target", "_blank").text("Sådan søger og reserverer du");
    var link2 = $('<a>').attr("href", "http://biblioteket.sonderborg.dk/sites/default/files/sadan_fornyer_du.pdf").attr("target", "_blank").text("Sådan fornyer du");
    var link3 = $('<a>').attr("href", "http://biblioteket.sonderborg.dk/sites/default/files/sadan_betaler_du_gebyrer.pdf").attr("target", "_blank").text("Sådan betaler du gebyrer");
    var link4 = $('<a>').attr("href", "https://biblioteket.sonderborg.dk/sites/default/files/sadan_saetter_du_dine_reserveringer_pa_pause.pdf").attr("target", "_blank").text("Sæt dine reserveringer på pause");
    
    
    elements[0].append($('<div>').append(link1), $('<div>').append(link2), $('<div>').append(link3), $('<div>').append(link4));


    //select element to insert into
    $("section.search").after(elements[0]);
  }

	



  // When ready start the magic.
  $(document).ready(function () {
		attach_links_to_front_page();

	});



})(jQuery);

