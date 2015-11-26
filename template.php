<?php

/**
 * Implements hook_preprocess_HOOK() for node template
 * published date
 * author full name
 */
function bibsdb_preprocess_node(&$variables){

	if ('ding_news' == $variables['type'] or 'ding_page' == $variables['type']) {
		$node = $variables['node'];

		// Make the publication date available. This depends on the publication_date module being installed.
	  $variables['bibsdb_publication_date'] = format_date($node->published_at, 'ding_long_date_only');

	  // Make authors full name available using the RealName module
	  $uid = user_load($node->uid);
	  $variables['bibsdb_author_full_name'] = check_plain(format_username($uid));
	}
}