jQuery(document).ready(function($) {
	var ewww_table_action = 'bulk_aux_images_table';
	var ewww_total_pages = 0;
	var ewww_pointer = 0;
	var ewww_search_total = 0;
	var ewww_clean_meta_total = 0;
	var ewww_table_debug = 0;
	$('#ewww-show-table').submit(function() {
		ewww_pointer = 0;
		ewww_total_pages = Math.ceil(ewww_vars.image_count / 50);
		$('.displaying-num').text(ewww_vars.count_string);
		$('#ewww-table-info').hide();
		$('#ewww-show-table').hide();
		$('#ewww-debug-table-info').hide();
		$('#ewww-show-debug-table').hide();
	        var ewww_table_data = {
	                action: ewww_table_action,
			ewww_wpnonce: ewww_vars._wpnonce,
			ewww_offset: ewww_pointer,
			ewww_debug: ewww_table_debug,
			ewww_total_pages: ewww_total_pages,
	        };
		$.post(ajaxurl, ewww_table_data, function(response) {
			try {
				var ewww_response = $.parseJSON(response);
			} catch (err) {
				$('#ewww-bulk-table').html('<span style="color: red"><b>' + ewww_vars.invalid_response + '</b></span>');
				console.log( response );
				return false;
			}
			if ( ewww_response.error ) {
				$('#ewww-bulk-table').html('<span style="color: red"><b>' + ewww_response.error + '</b></span>');
				return false;
			}
			$('#ewww-bulk-table').html(ewww_response.table);
			$('.ewww-aux-table').show();
			$('.ewww-search-count').text(ewww_response.search_result);
			$('.current-page').text(ewww_response.pagination);
			if (ewww_vars.image_count >= 50) {
				$('.tablenav').show();
				$('.next-page').show();
				$('.last-page').show();
			}
		});
		return false;
	});
	$('#ewww-show-debug-table').submit(function() {
		ewww_table_debug = 1;
		ewww_pointer = 0;
		$('#ewww-show-table').submit();
		document.body.scrollTop = 0; // For Safari.
		document.documentElement.scrollTop = 0; // For everyone else.
		return false;
	});
	$('.ewww-search-form').submit(function() {
		ewww_pointer = 0;
		var ewww_search = $('.ewww-search-input').val();
	        var ewww_table_data = {
	                action: ewww_table_action,
			ewww_wpnonce: ewww_vars._wpnonce,
			ewww_offset: ewww_pointer,
			ewww_debug: ewww_table_debug,
			ewww_total_pages: ewww_total_pages,
			ewww_search: ewww_search,
	        };
		$.post(ajaxurl, ewww_table_data, function(response) {
			try {
				var ewww_response = $.parseJSON(response);
			} catch (err) {
				$('#ewww-bulk-table').html('<span style="color: red"><b>' + ewww_vars.invalid_response + '</b></span>');
				console.log( response );
				return false;
			}
			if ( ewww_response.error ) {
				$('#ewww-bulk-table').html('<span style="color: red"><b>' + ewww_response.error + '</b></span>');
				return false;
			}
			$('#ewww-bulk-table').html(ewww_response.table);
			$('.ewww-search-count').text(ewww_response.search_result);
			ewww_search_total = ewww_response.search_total;
			if (ewww_response.search_count < 50) {
				$('.next-page').hide();
				$('.last-page').hide();
			}
			$('.current-page').text(ewww_response.pagination);
		});
		$('.prev-page').hide();
		$('.first-page').hide();
		$('.next-page').show();
		$('.last-page').show();
		return false;
	});
	$('.next-page').click(function() {
		var ewww_search = $('.ewww-search-input').val();
		ewww_pointer++;
	        var ewww_table_data = {
	                action: ewww_table_action,
			ewww_wpnonce: ewww_vars._wpnonce,
			ewww_offset: ewww_pointer,
			ewww_debug: ewww_table_debug,
			ewww_total_pages: ewww_total_pages,
			ewww_search: ewww_search,
	        };
		$.post(ajaxurl, ewww_table_data, function(response) {
			try {
				var ewww_response = $.parseJSON(response);
			} catch (err) {
				$('#ewww-bulk-table').html('<span style="color: red"><b>' + ewww_vars.invalid_response + '</b></span>');
				console.log( response );
				return false;
			}
			if ( ewww_response.error ) {
				$('#ewww-bulk-table').html('<span style="color: red"><b>' + ewww_response.error + '</b></span>');
				return false;
			}
			$('#ewww-bulk-table').html(ewww_response.table);
			$('.ewww-search-count').text(ewww_response.search_result);
			if (ewww_response.search_count < 50) {
				$('.next-page').hide();
				$('.last-page').hide();
			}
			$('.current-page').text(ewww_response.pagination);
		});
		if (ewww_vars.image_count <= ((ewww_pointer + 1) * 50)) {
			$('.next-page').hide();
			$('.last-page').hide();
		}
		$('.prev-page').show();
		$('.first-page').show();
		return false;
	});
	$('.prev-page').click(function() {
		var ewww_search = $('.ewww-search-input').val();
		ewww_pointer--;
	        var ewww_table_data = {
	                action: ewww_table_action,
			ewww_wpnonce: ewww_vars._wpnonce,
			ewww_offset: ewww_pointer,
			ewww_debug: ewww_table_debug,
			ewww_total_pages: ewww_total_pages,
			ewww_search: ewww_search,
	        };
		$.post(ajaxurl, ewww_table_data, function(response) {
			try {
				var ewww_response = $.parseJSON(response);
			} catch (err) {
				$('#ewww-bulk-table').html('<span style="color: red"><b>' + ewww_vars.invalid_response + '</b></span>');
				console.log( response );
				return false;
			}
			if ( ewww_response.error ) {
				$('#ewww-bulk-table').html('<span style="color: red"><b>' + ewww_response.error + '</b></span>');
				return false;
			}
			$('#ewww-bulk-table').html(ewww_response.table);
			$('.ewww-search-count').text(ewww_response.search_result);
			$('.current-page').text(ewww_response.pagination);
		});
		if (!ewww_pointer) {
			$('.prev-page').hide();
			$('.first-page').hide();
		}
		$('.next-page').show();
		$('.last-page').show();
		return false;
	});
	$('.last-page').click(function() {
		var ewww_search = $('.ewww-search-input').val();
		ewww_pointer = ewww_total_pages - 1;
		if (ewww_search) {
			ewww_pointer = ewww_search_total - 1;
		}
	        var ewww_table_data = {
	                action: ewww_table_action,
			ewww_wpnonce: ewww_vars._wpnonce,
			ewww_offset: ewww_pointer,
			ewww_debug: ewww_table_debug,
			ewww_total_pages: ewww_total_pages,
			ewww_search: ewww_search,
	        };
		$.post(ajaxurl, ewww_table_data, function(response) {
			try {
				var ewww_response = $.parseJSON(response);
			} catch (err) {
				$('#ewww-bulk-table').html('<span style="color: red"><b>' + ewww_vars.invalid_response + '</b></span>');
				console.log( response );
				return false;
			}
			if ( ewww_response.error ) {
				$('#ewww-bulk-table').html('<span style="color: red"><b>' + ewww_response.error + '</b></span>');
				return false;
			}
			$('#ewww-bulk-table').html(ewww_response.table);
			$('.ewww-search-count').text(ewww_response.search_result);
			$('.current-page').text(ewww_response.pagination);
		});
		$('.next-page').hide();
		$('.last-page').hide();
		$('.prev-page').show();
		$('.first-page').show();
		return false;
	});
	$('.first-page').click(function() {
		ewww_pointer = 0;
		var ewww_search = $('.ewww-search-input').val();
	        var ewww_table_data = {
	                action: ewww_table_action,
			ewww_wpnonce: ewww_vars._wpnonce,
			ewww_offset: ewww_pointer,
			ewww_debug: ewww_table_debug,
			ewww_total_pages: ewww_total_pages,
			ewww_search: ewww_search,
	        };
		$.post(ajaxurl, ewww_table_data, function(response) {
			try {
				var ewww_response = $.parseJSON(response);
			} catch (err) {
				$('#ewww-bulk-table').html('<span style="color: red"><b>' + ewww_vars.invalid_response + '</b></span>');
				console.log( response );
				return false;
			}
			if ( ewww_response.error ) {
				$('#ewww-bulk-table').html('<span style="color: red"><b>' + ewww_response.error + '</b></span>');
				return false;
			}
			$('#ewww-bulk-table').html(ewww_response.table);
			$('.ewww-search-count').text(ewww_response.search_result);
			if (ewww_response.search_count < 50) {
				$('.next-page').hide();
				$('.last-page').hide();
			} else {
				$('.next-page').show();
				$('.last-page').show();
			}
			$('.prev-page').hide();
			$('.first-page').hide();
			$('.current-page').text(ewww_response.pagination);
		});
		return false;
	});
	$('#ewww-clear-table').submit(function() {
	        var ewww_table_data = {
	                action: 'bulk_aux_images_table_clear',
			ewww_wpnonce: ewww_vars._wpnonce,
	        };
		if (confirm(ewww_vars.erase_warning)) {
			$.post(ajaxurl, ewww_table_data, function(response) {
				$('#ewww-table-info').hide();
				$('#ewww-show-table').hide();
				$('#ewww-clear-table').hide();
				$('#ewww-clear-table-info').html(response);
			});
		}
		return false;
	});
	var ewww_total_converted = 0;
	$('#ewww-clean-converted').submit(function() {
		var ewww_converted_data = {
			action: 'bulk_aux_images_count_converted',
			ewww_wpnonce: ewww_vars._wpnonce,
		};
		$.post(ajaxurl, ewww_converted_data, function(response) {
			try {
				var ewww_response = $.parseJSON(response);
			} catch (err) {
				$('#ewww-clean-converted-progress').html('<span style="color: red"><b>' + ewww_vars.invalid_response + '</b></span>');
				console.log( response );
				return false;
			}
			ewww_total_converted = ewww_response.total_converted;
			$('.ewww-tool-info').hide();
			$('.ewww-tool-form').hide();
			$('.ewww-tool-divider').hide();
			$('#ewww-clean-converted-progressbar').progressbar({ max: ewww_total_converted });
			$('#ewww-clean-converted-progress').html('<p> 0/' + ewww_total_converted + '</p>');
			$('#ewww-clean-converted-progressbar').show();
			$('#ewww-clean-converted-progress').show();
			ewwwRemoveOriginals(0);
		});
		return false;
	});
	function ewwwRemoveOriginals(converted_offset){
		var ewww_converted_data = {
			action: 'bulk_aux_images_converted_clean',
			ewww_wpnonce: ewww_vars._wpnonce,
		};
		$.post(ajaxurl, ewww_converted_data, function(response) {
			try {
				var ewww_response = $.parseJSON(response);
			} catch (err) {
				$('#ewww-clean-converted-progressbar').hide();
				$('#ewww-clean-converted-progress').html('<span style="color: red"><b>' + ewww_vars.invalid_response + '</b></span>');
				console.log( response );
				return false;
			}
			if ( ewww_response.error ) {
				$('#ewww-clean-converted-progressbar').hide();
				$('#ewww-clean-converted-progress').html('<span style="color: red"><b>' + ewww_response.error + '</b></span>');
				return false;
			}
			if(ewww_response.finished) {
				$('#ewww-clean-converted-progress').html(ewww_vars.finished);
				return false;
			}
			converted_offset += ewww_response.completed;
			$('#ewww-clean-converted-progressbar').progressbar("option", "value", converted_offset);
			$('#ewww-clean-converted-progress').html('<p>' + converted_offset + '/' + ewww_total_converted + '</p>');
			ewwwRemoveOriginals(converted_offset);
		});
	}
	$('#ewww-clean-table').submit(function() {
		ewww_total_pages = Math.ceil(ewww_vars.image_count / 500);
		$('.ewww-tool-info').hide();
		$('.ewww-tool-form').hide();
		$('.ewww-tool-divider').hide();
		$('#ewww-clean-table-progressbar').progressbar({ max: ewww_total_pages });
		$('#ewww-clean-table-progress').html('<p>' + ewww_vars.batch + ' 0/' + ewww_total_pages + '</p>');
		$('#ewww-clean-table-progressbar').show();
		$('#ewww-clean-table-progress').show();
		var total_pages = ewww_total_pages;
		ewwwCleanup(total_pages);
		return false;
	});
	function ewwwCleanup(total_pages){
		total_pages--;
		var ewww_table_data = {
			action: 'bulk_aux_images_table_clean',
			ewww_wpnonce: ewww_vars._wpnonce,
			ewww_offset: total_pages,
		};
		$.post(ajaxurl, ewww_table_data, function(response) {
			try {
				var ewww_response = $.parseJSON(response);
			} catch (err) {
				$('#ewww-clean-table-progressbar').hide();
				$('#ewww-clean-table-progress').html('<span style="color: red"><b>' + ewww_vars.invalid_response + '</b></span>');
				console.log( response );
				return false;
			}
			if ( ewww_response.error ) {
				$('#ewww-clean-table-progressbar').hide();
				$('#ewww-clean-table-progress').html('<span style="color: red"><b>' + ewww_response.error + '</b></span>');
				return false;
			}
			if(!total_pages>0) {
				$('#ewww-clean-table-progress').html(ewww_vars.finished);
				$('#ewww-clean-table-progressbar').progressbar("option", "value", ewww_total_pages);
				return;
			}
			$('#ewww-clean-table-progressbar').progressbar("option", "value", ewww_total_pages-total_pages);
			$('#ewww-clean-table-progress').html('<p>' + ewww_vars.batch + ' ' + (ewww_total_pages-total_pages) + '/' + ewww_total_pages + '</p>');
			ewwwCleanup(total_pages);
		});
	}
	$('#ewww-clean-meta').submit(function() {
		$('.ewww-tool-info').hide();
		$('.ewww-tool-form').hide();
		$('.ewww-tool-divider').hide();
		$('#ewww-clean-meta-progressbar').progressbar({ max: ewww_vars.attachment_count });
		console.log( $('#ewww-clean-meta-progressbar').progressbar("option","max"));
		$('#ewww-clean-meta-progress').html('<p>0/' + ewww_vars.attachment_string + '</p>');
		$('#ewww-clean-meta-progressbar').show();
		$('#ewww-clean-meta-progress').show();
		ewwwCleanupMeta();
		return false;
	});
	function ewwwCleanupMeta(){
		var ewww_cleanmeta_data = {
			action: 'bulk_aux_images_meta_clean',
			ewww_wpnonce: ewww_vars._wpnonce,
			ewww_offset: ewww_clean_meta_total,
		};
		$.post(ajaxurl, ewww_cleanmeta_data, function(response) {
			try {
				var ewww_response = $.parseJSON(response);
			} catch (err) {
				$('#ewww-clean-meta-progressbar').hide();
				$('#ewww-clean-meta-progress').html('<span style="color: red"><b>' + ewww_vars.invalid_response + '</b></span>');
				console.log( response );
				return false;
			}
			if ( ewww_response.error ) {
				$('#ewww-clean-meta-progressbar').hide();
				$('#ewww-clean-meta-progress').html('<span style="color: red"><b>' + ewww_response.error + '</b></span>');
				return false;
			}
			if(ewww_response.done) {
				$('#ewww-clean-meta-progress').html(ewww_vars.finished);
				$('#ewww-clean-meta-progressbar').progressbar("value", parseInt(ewww_vars.attachment_count));
				return;
			}
			ewww_clean_meta_total += ewww_response.success;
			if (ewww_clean_meta_total > ewww_vars.attachment_count) {
				ewww_clean_meta_total = ewww_vars.attachment_count;
			}
			$('#ewww-clean-meta-progressbar').progressbar("value", ewww_clean_meta_total);
			$('#ewww-clean-meta-progress').html('<p>' + ewww_clean_meta_total + '/' + ewww_vars.attachment_string + '</p>');
			ewwwCleanupMeta();
		});
	}
});
function ewwwRemoveImage(imageID) {
	var ewww_image_removal = {
		action: 'bulk_aux_images_remove',
		ewww_wpnonce: ewww_vars._wpnonce,
		ewww_image_id: imageID,
	};
	jQuery.post(ajaxurl, ewww_image_removal, function(response) {
		if(response == '1') {
			jQuery('#ewww-image-' + imageID).remove();
			var ewww_prev_count = ewww_vars.image_count;
			ewww_vars.image_count--;
			ewww_vars.count_string = ewww_vars.count_string.replace( ewww_prev_count, ewww_vars.image_count );
			jQuery('.displaying-num').text(ewww_vars.count_string);
		} else {
			alert(ewww_vars.remove_failed);
		}
	});
}
function ewwwRestoreImage(imageID) {
	var ewww_image_restore = {
		action: 'ewww_manual_cloud_restore_single',
		ewww_wpnonce: ewww_vars._wpnonce,
		ewww_image_id: imageID,
	};
	var original_html = jQuery('#ewww-image-' + imageID + ' td:last-child').html();
	jQuery('#ewww-image-' + imageID + ' td:last-child').html(ewww_vars.restoring);
	jQuery.post(ajaxurl, ewww_image_restore, function(response) {
		var is_json = true;
		try {
			var ewww_response = jQuery.parseJSON(response);
		} catch (err) {
			is_json = false;
		}
		if ( ! is_json ) {
			alert( ewww_vars.invalid_response );
			console.log( response );
			return false;
		}
		if ( ewww_response.success == '1') {
			jQuery('#ewww-image-' + imageID + ' td:last-child').html(ewww_vars.original_restored);
			return false;
		} else if (ewww_response.error) {
			jQuery('#ewww-image-' + imageID + ' td:last-child').html(original_html);
			alert(ewww_response.error);
			return false;
		}
	});
}
