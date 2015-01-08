
function bibsdb_create_html(elements) {
  //create wrapper html
  	  var wrapperHtml = jQuery('<div>').addClass("content-blocks--wrapper");
  
  //create inner html
  var innerHtml = "";
  
  switch(elements.length) {
    case 1:
      innerHtml = jQuery('<div>').addClass("content-blocks--inner content-blocks--one");
      break;
    case 2:
      innerHtml = jQuery('<div>').addClass("content-blocks--inner content-blocks--two");
      break;
    case 3:
      innerHtml = jQuery('<div>').addClass("content-blocks--inner content-blocks--three");
      break;
    default:
      innerHtml = jQuery('<div>').addClass("content-blocks--inner content-blocks--one");
  }
  
  for (var i = 0; i < elements.length; i++) {
    innerHtml.append(elements[i]);
  }
  
  wrapperHtml.append(innerHtml);
  

  return wrapperHtml;
      
}

function bibsdb_add_border(innerHtml) {
  var wrapperHtml =  jQuery('<div>').addClass("gray-border-box hidden-on-small-screens");
  wrapperHtml.append(innerHtml);
  return wrapperHtml;  
}
