
(function($) {

  /**
  * Attach sub-menu classes to menu on eresurce node view. Also attach class that triggers submenu cloning.
  */
  function attach_classes() {
    //Attach menu classes
    $(".bibsdb-page-eresourcer .pane-menu-menu-alle-online-tilbud").addClass("sub-menu-wrapper");
    $(".bibsdb-page-eresourcer .pane-menu-menu-alle-online-tilbud .menu").addClass("sub-menu");
    $(".bibsdb-page-eresourcer .pane-menu-menu-alle-online-tilbud h2").addClass("sub-menu-title")
    ;$(".bibsdb-page-eresourcer .pane-menu-menu-alle-online-tilbud h2").removeClass("pane-title");

  }

  /**
  * Transform menu title into link
  */
  function tranform_menu_title_to_link() {
    // Remove text
    $(".bibsdb-page-eresourcer .pane-menu-menu-alle-online-tilbud h2").empty();

    // Add link
    $("<a>",{
      href:"/temaer/pa-nettet",
      text: "Alle online tilbud"
    }).appendTo($(".bibsdb-page-eresourcer .pane-menu-menu-alle-online-tilbud h2"));

  }

  /**
   * Clone sub-menu-content into select box. Select box is displayed on small screens.
   */
  function clone_submenu_to_select(sub_menu) {

    if (sub_menu.length) {

      var select = $('<select class="js-og-sub-menu"/>');
      select.addClass('js-og-sub-menu-responsive');

      // Populate drop-down with menu items
      $('a', sub_menu).each(function() {
        var el = $(this);
        $('<option />', {
          "value" : el.attr('href'),
          "text" : el.text(),
          "selected" : el.hasClass('active')
        }).appendTo(select);
      });

      // Detect where to insert the menu. Start with under the library image.
      var target = $('.primary-content');
  
      // Insert the drop-down if target where found.
      if (target.length) {
        // Attach the menu to the page.
        select.prependTo(target);

        //Attach the menu-title to the eresourcer
        sub_menu.filter(".pane-menu-menu-alle-online-tilbud").find("h2").clone().addClass("js-og-sub-menu-title").prependTo(target);

        // Attach "on change" handle to new drop-down menu.
        $(select).change(function () {
         document.location.href = $(this).val();
       });
      }
    }
  }




  // When ready start the magic.
  $(document).ready(function () {
    attach_classes();
    tranform_menu_title_to_link();
    clone_submenu_to_select($(".bibsdb-page-eresourcer .pane-menu-menu-alle-online-tilbud"));

    // ddbasic.topmenu.js adds select menu below image to groups. If there is no image no select is attached.
    // We only want to attach select if it isn't already attached.
    clone_submenu_to_select($(".node-type-ding-group:not(:has(.js-og-sub-menu-responsive))").find(".pane-og-menu-og-single-menu-block"));    
  });

})(jQuery);