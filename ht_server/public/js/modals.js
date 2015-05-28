$(document).ready(function() {


var modalBehavior = {

	searchDropdown: function  () {
		$('.searchDropdown').hide();
		$('.searchBarIcon').on("click", function () {
			var left = $(this).siblings('.search-input').offset().left + 1;
			$('.searchDropdown').css({"left": left}).show().queue(function () {
				$('.openExtendedArea .fa-times').on("click", function () {
					$('.searchDropdown').hide();
				});
			});
		});
	},

	extendedSearch: function () {
		$('.extendedSearchInputs').hide();

		$('.openCaption').on("click", function () {
			if ($(this).hasClass('extended')) {
				$(this).html("Open Extended Search <i class='fa fa-caret-down'></i>");
				$(this).removeClass('extended');
				$('.extendedSearchInputs').hide();
			}
			else{
				$(this).html("Close Extended Search <i class='fa fa-caret-up'></i>");
				$(this).addClass('extended');
				$('.extendedSearchInputs').show();
			}
			
		})
	},

	actionGroupModals: function  () {
		$('.actionGroupModal').hide();
		$('.sectionActions li').on("click", function () {
			$('.actionGroupModal').show().queue(function () {
				$('.actionGroupModal .titleArea i').on("click", function () {
					$('.actionGroupModal').hide();
				});
			});
		});
	},

	listSort: function () {
		var $popover = $('.list-sort-popover')
		,   $button = $('.listBtn');
		
		$popover.hide();	
		//show popover on cick on icon
		$button.on("click", function (e) {
				//hide if visible
				if ($popover.is(":visible")) {
					$popover.hide();
				}
				else{			
					var $target = $button;
					var	left = $target.offset().left - 70
					,	top = $target.offset().top + 40;
					
					$('.list-sort-popover, .popover-large, .popover-small-right, .popover-small-left, .popover-large-left, .popover-large-right').hide();
				    
				    $popover
					    .stop()
					    .fadeIn(300)
					    .offset({left: left, top: top})
					    .show(0, function () {
							//hide popovers when mouse clicks
							$('body').on("click",  function (e) {
								if ( $(e.target).parents('.list-sort-popover').length ) {
									// do nothing
								}
								else if ($(e.target).hasClass('list-sort-popover')){
									// do nothing
								}
								else {
									$popover.hide();
								}
							});
							//hide popover when mouse leaves popover
							$popover.on("mouseleave", function () {
								$(this).stop().fadeOut(300);
							});
				    	});	
				}			
		});
	},

	topNavDropDown: function () {
		var $popover = $('.top-nav-dropdown')
		,   $button = $('.drop');
		
		$popover.hide();	
		//show popover on cick on icon
		$button.on("click", function (e) {
				//hide if visible
				if ($popover.is(":visible")) {
					$popover.hide();
				}
				else{			
					var $target = $(this);
					var	left = $target.find('i').offset().left - 170
					,	top = $target.offset().top + 40;
					
					$('.list-sort-popover, .popover-large, .popover-small-right, .popover-small-left, .popover-large-left, .popover-large-right').hide();
				    
				    $popover
					    .stop()
					    .fadeIn(300)
					    .offset({left: left, top: top})
					    .show(0, function () {
							//hide popovers when mouse clicks
							$('body').on("click",  function (e) {
								if ( $(e.target).parents('.top-nav-dropdown').length ) {
									// do nothing
								}
								else if ($(e.target).hasClass('top-nav-dropdown')){
									// do nothing
								}
								else {
									$popover.hide();
								}
							});
							//hide popover when mouse leaves popover
							$popover.on("mouseleave", function () {
								$(this).stop().fadeOut(300);
							});
				    	});	
				}			
		});
	}
};
modalBehavior.searchDropdown();
modalBehavior.actionGroupModals();
modalBehavior.listSort();
modalBehavior.topNavDropDown();
modalBehavior.extendedSearch();

});

