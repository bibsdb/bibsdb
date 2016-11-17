<?php

/**
* Preprocesses the wrapping HTML.
* Add the Google Search Console verification code to the meta-tags on all pages
*
* @param array &$variables
*   Template variables.
*/
function bibsdb_preprocess_html(&$vars) {
	/** Hotjar script
	if($vars['is_front']) {
		drupal_add_js(drupal_get_path('theme', 'bibsdb') . '/scripts/bibsdb_hotjar.js');
	};
	*/

  // Setup Google Webmasters Verification Meta Tag
	$google_webmasters_verification = array(
		'#type' => 'html_tag',
		'#tag' => 'meta',
		'#attributes' => array(
			'name' => 'google-site-verification',
      // REPLACE THIS CODE WITH THE ONE GOOGLE SUPPLIED YOU WITH
			'content' => '-NRKxJA49-S9fgaUZgwHiv0GpaSmAdDz72WxtocIyQc',
			)
		);

  // Add Google Webmasters Verification Meta Tag to head
	drupal_add_html_head($google_webmasters_verification, 'google_webmasters_verification');
}

/**
 * Implements hook_preprocess_HOOK() for node template
 * published date
 * author full name
 * eresource title image that linkes to the eresource
 */
function bibsdb_preprocess_node(&$variables){

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

