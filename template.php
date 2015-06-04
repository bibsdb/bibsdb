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

	  //Make authors full name available
		$uid = user_load($node->uid);
		$fullname = [];
		$myprofile = profile2_load_by_user($uid, 'ding_staff_profile');
		if (isset($myprofile->field_ding_staff_forename['und'][0]['value'])) {
	    $forename = $myprofile->field_ding_staff_forename['und'][0]['value'];
			$fullname[] = $forename;
		}
		if (isset($myprofile->field_ding_staff_surname['und'][0]['value'])) {
	    $surname = $myprofile->field_ding_staff_surname['und'][0]['value'];
			$fullname[] = $surname;
		}
		$variables['bibsdb_author_full_name'] = implode(" ", $fullname);
	}
}