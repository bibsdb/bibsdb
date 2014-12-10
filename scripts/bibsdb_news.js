(function($) {


	/**
	 * Hide pane-library-list on news page - not on the events page
	 */
	function hide_pane_library_list_on_news_only() {
	  if ($(".pane-ding-news-ding-news-list").length > 0) {
      $( ".pane-library-list" ).hide();
    }	
	}
	


  // When ready start the magic.
  $(document).ready(function () {
    hide_pane_library_list_on_news_only();
	});
	
	




})(jQuery);

