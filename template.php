<?php

/**
 * Implements hook_preprocess_HOOK() for node template
 * published date
 * author full name
 * eresource title image that linkes to the eresource
 */
function bibsdb_preprocess_node(&$variables){
	dd($variables['type']);

	if ('ding_news' == $variables['type'] || 'ding_page' == $variables['type']) {
		$node = $variables['node'];

		// Make the publication date available. This depends on the publication_date module being installed.
	  $variables['bibsdb_publication_date'] = format_date($node->published_at, 'ding_long_date_only');

	  // Make authors full name available using the RealName module
	  $uid = user_load($node->uid);
	  $variables['bibsdb_author_full_name'] = check_plain(format_username($uid));
	}

	if ('ding_eresource' == $variables['type']) {
		
		$node = $variables['node'];
		$wrapper = entity_metadata_wrapper('node', $node);
		$image = $wrapper->field_ding_eresource_list_image->value();
		$url = $wrapper->field_bibsdb_eresource_link->value()['url'];

		$img =  theme('image_style', array('path'=>$image['uri'], 'style_name' => 'bibsdb_expose_large'));
		$variables['bibsdb_linked_logo'] = l($img, $url, array('html'=>true, 'attributes' => array('target' => '_blank')));
	}
}