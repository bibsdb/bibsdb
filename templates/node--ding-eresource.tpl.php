<?php

/**
 * @file
 * DDBasic's theme implementation to display event nodes..
 *
 * Available variables:
 * - $title: the (sanitized) title of the node.
 * - $content: An array of node items. Use render($content) to print them all,
 *   or print a subset such as render($content['field_example']). Use
 *   hide($content['field_example']) to temporarily suppress the printing of a
 *   given element.
 * - $user_picture: The node author's picture from user-picture.tpl.php.
 * - $date: Formatted creation date. Preprocess functions can reformat it by
 *   calling format_date() with the desired parameters on the $created variable.
 * - $name: Themed username of node author output from theme_username().
 * - $node_url: Direct url of the current node.
 * - $display_submitted: Whether submission information should be displayed.
 * - $submitted: Submission information created from $date (NOTE: modified for
 *   ddbasic during ddbasic_preprocess_node in templates.php)
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default values can be one or more of the
 *   following:
 *   - node: The current template type, i.e., "theming hook".
 *   - node-[type]: The current node type. For example, if the node is a
 *     "Blog entry" it would result in "node-blog". Note that the machine
 *     name will often be in a short form of the human readable label.
 *   - node-teaser: Nodes in teaser form.
 *   - node-preview: Nodes in preview mode.
 *   The following are controlled through the node publishing options.
 *   - node-promoted: Nodes promoted to the front page.
 *   - node-sticky: Nodes ordered above other non-sticky nodes in teaser
 *     listings.
 *   - node-unpublished: Unpublished nodes visible only to administrators.
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 *
 * Other variables:
 * - $node: Full node object. Contains data that may not be safe.
 * - $type: Node type, i.e. story, page, blog, etc.
 * - $comment_count: Number of comments attached to the node.
 * - $uid: User ID of the node author.
 * - $created: Time the node was published formatted in Unix timestamp.
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 * - $zebra: Outputs either "even" or "odd". Useful for zebra striping in
 *   teaser listings.
 * - $id: Position of the node. Increments each time it's output.
 *
 * Node status variables:
 * - $view_mode: View mode, e.g. 'full', 'teaser'...
 * - $teaser: Flag for the teaser state (shortcut for $view_mode == 'teaser').
 * - $page: Flag for the full page state.
 * - $promote: Flag for front page promotion state.
 * - $sticky: Flags for sticky post setting.
 * - $status: Flag for published status.
 * - $comment: State of comment settings for the node.
 * - $readmore: Flags true if the teaser content of the node cannot hold the
 *   main body content.
 * - $is_front: Flags true when presented in the front page.
 * - $logged_in: Flags true when the current user is a logged-in member.
 * - $is_admin: Flags true when the current user is an administrator.
 *
 * Field variables: for each field instance attached to the node a corresponding
 * variable is defined, e.g. $node->body becomes $body. When needing to access
 * a field's raw values, developers/themers are strongly encouraged to use these
 * variables. Otherwise they will have to explicitly specify the desired field
 * language, e.g. $node->body['en'], thus overriding any language negotiation
 * rule that was previously applied.
 *
 * ddbasic specific variables:
 * - $ddbasic_updated: Information about latest update on the node created from
 *   $date during
 *   ddbasic_preprocess_node().
 * - $ddbasic_event_date: Event date or period, printed as date(s) 
 * - $ddbasic_event_time: Event time, printed as time(s) 
 * - $ddbasic_ding_event_tags: Tags, as a comma-separated list of links with
 *   leading text "Tags: "
 * - $ddbasic_event_location: String containing adress info for either
 *   field_address or group_audience,
 *   as relevant for the event node
 * - $ddbasic_byline: outputs byline to be used before $name
 * - $ddbasic_place2book_tickets: flag for field_place2book_tickets
 *
 * @see template_preprocess()
 * @see template_preprocess_node()
 * @see template_process()
 */
?>




<article class="eresource">

	<div class="eresource-content">

		<div class="eresource-image">
					<?php print render($bibsdb_linked_logo) ?>
		</div>


		<h1 class="page-title">
			<?php print $title; ?>
		</h1>

		<div class="eresource-lead"><?php print render($content['field_ding_eresource_lead']); ?></div>


		<div class="eresource-body">
			<?php print render($content['field_ding_eresource_body']); ?>
		</div>


	</div>



	<div class="eresource-right-col">

		<div class="eresource-info-item eresource-icons">
			<i class="fa fa-laptop fa-4x">&nbsp;</i>
			<i class="fa fa-tablet fa-4x">&nbsp;</i>
			<i class="fa fa-mobile fa-4x">&nbsp;</i>
		</div>

		<?php if (isset($content['field_bibsdb_eresource_link'])): ?>
			<div class="eresource-info-item eresource-link">
				<?php print render($bibsdb_link_with_target_blank); ?>
			</div>
		<?php endif; ?>

		<?php if (isset($content['field_bibsdb_eresource_links'])): ?>
			<div class="eresource-info-item eresource-links">
				<?php print render($content['field_bibsdb_eresource_links']); ?>
			</div>
		<?php endif; ?>


		<?php if (isset($content['field_bibsdb_eresource_period'])): ?>
			<div class="eresource-info-item eresource-period">
				<?php print render($content['field_bibsdb_eresource_period']); ?>
			</div>
		<?php endif; ?>

		<?php if (isset($content['field_bibsdb_eresource_limit'])): ?>
			<div class="eresource-info-item eresource-limit">
				<?php print render($content['field_bibsdb_eresource_limit']); ?>
			</div>
		<?php endif; ?>

		<?php if (isset($content['field_ding_eresource_access'])): ?>
			<div class="eresource-info-item eresource-access">
				<div class="field">
					<div class="field-label">Adgang:</div>
					<div class="field-items"><div class="field-item"><?php print render(entity_metadata_wrapper('node', $node)->field_ding_eresource_access->value()->name); ?></div></div>
				</div>
			</div>
		<?php endif; ?>

		<?php if (isset($content['field_bibsdb_eresource_info'])): ?>
			<div class="eresource-info-item eresource-info">
				<?php print render($content['field_bibsdb_eresource_info']); ?>
			</div>
		<?php endif; ?>

		<?php if (isset($content['field_bibsdb_eresource_contact'])): ?>
			<div class="eresource-info-item eresource-contact">
				<?php print render($content['field_bibsdb_eresource_contact']); ?>
			</div>
		<?php endif; ?>




	</div>






</article>






