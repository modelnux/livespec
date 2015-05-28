

//to do popover
var toDoPopover = function () {
	var $popover = $('.todo-popover'),
	$button = $('.alert-div');
	
	$popover.hide();	
	//show popover on cick on icon
	$button.on("click", function (e) {
			//hide if visible
			if ($popover.is(":visible")) {
				$popover.hide();
			}
			else{			
				var $target = $(e.target);	
				$('.popover-small-right, .popover-small-left, .popover-large-left, .popover-large-right').hide();
			    $popover.stop().fadeIn(300).show( 0, function () {
						//hide popovers when mouse clicks
						$('body').on("click",  function (event) {
							if ( $(event.target).parents('.todo-popover').length ) {
							}
							else if ($(event.target).hasClass('todo-popover')){
							}
							else {
								$popover.hide();
								
							}
						});
			    });	
			}			
	});//show popover on click on icon

	$('.todo-popover .actions .btn, .todo-popover i').on("click", function () {
		$popover.hide();
	});
}

//to do popover
var toDoReadyPopover = function () {
	if ($('.alert-div').is(":visible")) {
		var $popover = $('.todo-popover'),
		$button = $('.submit-for-approval-btn');
		
		$popover.hide();	
		//show popover on cick on icon
		$button.on("click", function (e) {
				//hide if visible
				if ($popover.is(":visible")) {
					$popover.hide();
				}
				else{			
					var $target = $(e.target);	
					$('.popover-small-right, .popover-small-left, .popover-large-left, .popover-large-right').hide();
				    $popover.stop().fadeIn(300).show( 0, function () {
							//hide popovers when mouse clicks
							$('body').on("click",  function (event) {
								if ( $(event.target).parents('.todo-popover').length ) {
								}
								else if ($(event.target).hasClass('todo-popover')){
								}
								else {
									$popover.hide();
									
								}
							});
				    });	
				}			
		});//show popover on click on icon

		$('.todo-popover .actions .btn, .todo-popover i').on("click", function () {
			$popover.hide();
		})
	}
}


//to do popover
var configurationInc = function () {
		var $popover = $('.config-hover-incomplete'),
		$button = $('.config-icon i');
		
		$popover.hide();	
		//show popover on cick on icon
		$('body').on("mouseover", '.config-icon i', function (e) {
			if ($('.config-icon i').hasClass('configged')) {

			}
			else{
				//hide if visible
				if ($popover.is(":visible")) {
					$popover.hide();
				}
				else{			
					var $target = $(e.target);	
					var	left = $target.offset().left - 19
					,	top = $target.offset().top + 40;	
					$('.popover-small-right, .popover-small-left, .popover-large-left, .popover-large-right').hide();
				    $popover.css('width', '130px')
				    $popover.stop().fadeIn(300).offset({left: left, top: top}).show( 0, function () {
							//hide popovers when mouse clicks
							$('body').on("click",  function (event) {
								if ( $(event.target).parents('.config-hover-incomplete').length ) {
								}
								else if ($(event.target).hasClass('config-hover-incomplete')){
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
			}	
		});//show popover on click on icon

		$('.todo-popover .actions .btn, .todo-popover i').on("click", function () {
			$popover.hide();
		})

}

//add product popover
var addProductPopover = function () {
	var $popover = $('.add-product-popover'),
	$button = $('.add-product-btn');
	$(".product-result").hide();

	$popover.hide();	

	//show popover on cick on icon
	$button.on("click", function (e) {
			//hide if visible
			if ($popover.is(":visible")) {
				$popover.hide();
			}
			else{
				var $target = $(e.target);	
				var	left = $target.offset().left + 72
				,	top = $target.offset().top + 40;
				$('.popover-small-right, .popover-small-left, .popover-large-left, .popover-large-right').hide();
			    $popover.stop().fadeIn(300).offset({left: left, top: top}).show( 0, function () {

			    		$('.search-input').focus().delay(1000).queue(function () {

			    			$('.search-input').keypress( function () {
							    var inputValue = $(".search-input").val().toLowerCase();
							    $(".product-result").each( function () {
							         if($(this).text().toLowerCase().indexOf(inputValue) == -1)
							         {
							              $(this).hide();
							         }
							         else
							         {
							              $(this).show();
							         }
							    });
							});

			    			$('.product-result').on('mouseenter', function () {
								$(this).children('.input-sm').focus();
							});
			    		});

						//hide popovers when mouse clicks
						$('body').on("click",  function (event) {
							if ( $(event.target).parents('.add-product-popover').length ) {
							}
							else if ($(event.target).hasClass('add-product-popover')){
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
	});//show popover on click on icon

	//add product to table-main-body
	addProduct();

	//scrollbar
	$(".add-product-results").mCustomScrollbar();
	$(".product-info-div").mCustomScrollbar();
}



topLevelTablePopover = function () {
	var $popover = $('.top-level-table-popover'),
		$button = $('.menu-case-1 i');
	
		$popover.hide();

	//show popover on cick on respective icons
	$button.on("click", function (e) {

			if ($popover.is(":visible")) {
				$popover.hide();
			}
			else{
				target = $(e.target);	
				var	left = target.offset().left + xOffset
				,	top = target.offset().top + yOffset;
				$('.popover-small-right, .popover-small-left, .popover-large-left, .popover-large-right').hide();
			    $popover.stop().fadeIn(300).offset({left: left, top: top}).show( 0, function () {
						//hide popovers when mouse clicks
						$('body').on("click",  function (event) {
							if ( $(event.target).parents('.popover-small-left').length ) {
							}
							else if ( $(event.target).parents('.popover-small-right').length ) {
							}
							else if ($(event.target).hasClass('popover-small-left')){
							}
							else if ($(event.target).hasClass('popover-small-right')){
							}
							else {
								$popover.hide();
							}
						});
						//hide popover when mouse clicks

						//hide popover when mouse leaves popover
						$popover.on("mouseleave", function () {
							$(this).stop().fadeOut(300);
						});
						//hide popover when mouse leaves popover
			    });		
			}								
	});//show popover on click on respective icons




//links within the product menu popovers
		$popover.find('a').on("click.behavior", function (e) {
		
			var datatype = $(this).data("type");

			switch (datatype) {
				case "overview":
						$('.config-modal').remove();
						$('body').append(configmodal);
							var pick1 = $('.pick-1')
							,	pick2 = $('.pick-2')
							,	pick3 = $('.pick-3')
							,   pick4 = $('.pick-4')
							, content1 = $('.content-1')
							, content2 = $('.content-2')
							, content3 = $('.content-3')
							, content4 = $('.content-4');
						pick1.addClass("hovered");
						pick2.removeClass("hovered");
						pick3.removeClass("hovered");
						pick4.removeClass("hovered");
						content1.show();
						content2.hide();
						content3.hide();
						content4.hide();
				break;

				case "pricing":
						$('.config-modal').remove();
						$('body').append(configmodal);
							var pick1 = $('.pick-1')
							,	pick2 = $('.pick-2')
							,	pick3 = $('.pick-3')
							,   pick4 = $('.pick-4')
							, content1 = $('.content-1')
							, content2 = $('.content-2')
							, content3 = $('.content-3')
							, content4 = $('.content-4');
						pick1.removeClass("hovered");
						pick2.addClass("hovered");
						pick3.removeClass("hovered");
						pick4.removeClass("hovered");
						content1.hide();
						content2.show();
						content3.hide();
						content4.hide();							
				break;

				case "config":
						$('.config-modal').remove();
						$('body').append(configmodal);
							var pick1 = $('.pick-1')
							,	pick2 = $('.pick-2')
							,	pick3 = $('.pick-3')
							,   pick4 = $('.pick-4')
							, content1 = $('.content-1')
							, content2 = $('.content-2')
							, content3 = $('.content-3')
							, content4 = $('.content-4');
						pick1.removeClass("hovered");
						pick2.removeClass("hovered");
						pick3.addClass("hovered");
						pick4.removeClass("hovered");
						content1.hide();
						content2.hide();
						content3.show();
						content4.hide();							
				break;

				case "info":
						$('.config-modal').remove();
						$('body').append(configmodal);
							var pick1 = $('.pick-1')
							,	pick2 = $('.pick-2')
							,	pick3 = $('.pick-3')
							,   pick4 = $('.pick-4')
							, content1 = $('.content-1')
							, content2 = $('.content-2')
							, content3 = $('.content-3')
							, content4 = $('.content-4');
						pick1.removeClass("hovered");
						pick2.removeClass("hovered");
						pick3.removeClass("hovered");
						pick4.addClass("hovered");
						content1.hide();
						content2.hide();
						content3.hide();
						content4.show();
				break;

			} //switch

			//choose modal views by clicking on nav inside of config modal
			$('.modal-top').find('div').on("click", function () {

							var pick1 = $('.pick-1')
							,	pick2 = $('.pick-2')
							,	pick3 = $('.pick-3')
							,   pick4 = $('.pick-4')
							, content1 = $('.content-1')
							, content2 = $('.content-2')
							, content3 = $('.content-3')
							, content4 = $('.content-4');

				var content = ($(this).attr('data'));

				if (content == "content-1" ) {								
						pick1.addClass("hovered");
						pick2.removeClass("hovered");
						pick3.removeClass("hovered");
						pick4.removeClass("hovered");
						content1.stop().fadeIn({duration: 500, queue: false}).show("slide", {direction: "left"}, 250);
						calculator();
						content2.hide();
						content3.hide();
						content4.hide();							
				}
				else if ( content == "content-2" ) {
						pick1.removeClass("hovered");
						pick2.addClass("hovered");
						pick3.removeClass("hovered");
						pick4.removeClass("hovered");
						if (content1.is(":visible")) {
						content1.hide();
						content2.stop().fadeIn({duration: 500, queue: false}).show("slide", {direction: "right"}, 250);
						content3.hide();						
						content4.hide();	
						}
						else{
						content1.hide();
						content2.stop().fadeIn({duration: 500, queue: false}).show("slide", {direction: "left"}, 250);
						content3.hide();
						content4.hide();			
						}

				}
				else if (content == "content-3"){
						pick1.removeClass("hovered");
						pick2.removeClass("hovered");
						pick3.addClass("hovered");
						pick4.removeClass("hovered");
						if (content2.is(":visible") || content1.is(":visible")) {
						content1.hide();
						content2.stop().fadeIn({duration: 500, queue: false}).show("slide", {direction: "right"}, 250);
						content3.hide();						
						content4.hide();	
						}
						else{
						content1.hide();
						content2.stop().fadeIn({duration: 500, queue: false}).show("slide", {direction: "left"}, 250);
						content3.hide();
						content4.hide();			
						}

				}
				else {
						pick1.removeClass("hovered");
						pick2.removeClass("hovered");
						pick3.removeClass("hovered");
						pick4.addClass("hovered");
						content1.hide();
						content2.hide();
						content3.hide();
						content4.stop().fadeIn({duration: 500, queue: false}).show("slide", {direction: "right"}, 250);
						
				}
			}); //choose modal views by clicking on nav inside of config modal
		
				//close config modal
				$(".config-modal").find('.close').on("click", function () {
					$(".config-modal").remove();
				});
		});

}; //topleveltablepopover



//submit for approval popover
var submitForApprovalPopover = function () {
	var $popover = $('.submit-for-approval-popover'),
	$button = $('.submit-for-approval-btn');
	
	$popover.hide();	
	//show popover on cick on icon
	$button.on("click.approval", function (e) {
			//hide if visible
			if ($popover.is(":visible")) {
				$popover.hide();
			}
			else{			
				var $target = $(e.target);	
				var	left = $target.offset().left - 200
				,	top = $target.offset().top + 40;
				$('.popover-small-right, .popover-small-left, .popover-large-left, .popover-large-right').hide();
			    $popover.stop().fadeIn(300).offset({left: left, top: top}).show( 0, function () {
						//hide popovers when mouse clicks
						$('body').on("click",  function (event) {
							if ( $(event.target).parents('.submit-for-approval-popover').length ) {
							}
							else if ($(event.target).hasClass('submit-for-approval-popover')){
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
	});//show popover on click on icon
};



//quote summary popover
var titleMorePopover = function () {
		var $popover = $('.title-more-popover'),
		$button = $('.more-btn');
	
		$popover.hide();	
	//show popover on cick on icon
	$button.on("click.more", function (e) {
			//hide if visible
			if ($popover.is(":visible")) {
				$popover.hide();
			}
			else{			
				var $target = $(e.target);	
				var	left = $target.offset().left - 140
				,	top = $target.offset().top + 40;
				$('.popover-small-right, .popover-small-left, .popover-large-left, .popover-large-right').hide();
			    $popover.stop().fadeIn(300).offset({left: left, top: top}).show( 0, function () {
						//hide popovers when mouse clicks
						$('body').on("click",  function (event) {
							if ( $(event.target).parents('.title-more-popovery').length ) {
							}
							else if ($(event.target).hasClass('title-more-popover')){
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
	});//show popover on click on icon
};


//submit for approval popover
var filterPopover = function () {
	var $popover = $('.filter-popover'),
	$button = $('.filter');
	
	$popover.hide();	
	//show popover on cick on icon
	$button.on("click.approval", function (e) {
			//hide if visible
			if ($popover.is(":visible")) {
				$popover.hide();
			}
			else{			
				var $target = $(e.target);	
				var	left = $target.offset().left - 200
				,	top = $target.offset().top + 40;
				$('.popover-small-right, .popover-small-left, .popover-large-left, .popover-large-right').hide();
			    $popover.stop().fadeIn(300).offset({left: left, top: top}).show( 0, function () {
						//hide popovers when mouse clicks
						$('body').on("click",  function (event) {
							if ( $(event.target).parents('.submit-for-approval-popover').length ) {
							}
							else if ($(event.target).hasClass('submit-for-approval-popover')){
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
	});//show popover on click on icon
};



//submit for approval popover
var alertPopover1 = function () {
	var $popover = $('.alert-popover-errors1'),
	$button = $('.pill-draft');
	
	$popover.hide();	
	//show popover on cick on icon
	$button.on("click.approval", function (e) {
			//hide if visible
			if ($popover.is(":visible")) {
				$popover.hide();
			}
			else{			
				var $target = $(e.target);	
				var	left = $target.offset().left - 200
				,	top = $target.offset().top + 40;
				$('.popover-small-right, .popover-small-left, .popover-large-left, .popover-large-right').hide();
			    $popover.stop().fadeIn(300).offset({left: left, top: top}).show( 0, function () {
						//hide popovers when mouse clicks
						$('body').on("click",  function (event) {
							if ( $(event.target).parents('.submit-for-approval-popover').length ) {
							}
							else if ($(event.target).hasClass('submit-for-approval-popover')){
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
	});//show popover on click on icon
};



//submit for approval popover
var alertPopover2 = function () {
	var $popover = $('.alert-popover-errors2'),
	$button = $('.pill-warning');
	
	$popover.hide();	
	//show popover on cick on icon
	$button.on("click.approval", function (e) {
			//hide if visible
			if ($popover.is(":visible")) {
				$popover.hide();
			}
			else{			
				var $target = $(e.target);	
				var	left = $target.offset().left - 200
				,	top = $target.offset().top + 40;
				$('.popover-small-right, .popover-small-left, .popover-large-left, .popover-large-right').hide();
			    $popover.stop().fadeIn(300).offset({left: left, top: top}).show( 0, function () {
						//hide popovers when mouse clicks
						$('body').on("click",  function (event) {
							if ( $(event.target).parents('.submit-for-approval-popover').length ) {
							}
							else if ($(event.target).hasClass('submit-for-approval-popover')){
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
	});//show popover on click on icon
};


//submit for approval popover
var secondLevelTablePopover = function () {
	var $popover = $('.second-level-table-popover'),
	$button = $('.menu-case i');
	
	$popover.hide();	
	//show popover on cick on icon
	$button.on("click.approval", function (e) {
			//hide if visible
			if ($popover.is(":visible")) {
				$popover.hide();
			}
			else{			
				var $target = $(e.target);	
				var	left = $target.offset().left - 200
				,	top = $target.offset().top + 40;
				$('.popover-small-right, .popover-small-left, .popover-large-left, .popover-large-right').hide();
			    $popover.stop().fadeIn(300).offset({left: left, top: top}).show( 0, function () {
						//hide popovers when mouse clicks
						$('body').on("click",  function (event) {
							if ( $(event.target).parents('.submit-for-approval-popover').length ) {
							}
							else if ($(event.target).hasClass('submit-for-approval-popover')){
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
	});//show popover on click on icon
};


//submit for approval popover
var bundleTablePopover = function () {
	var $popover = $('.bundle-table-popover'),
	$button = $('.menu-case-bundle i');
	
	$popover.hide();	
	//show popover on cick on icon
	$button.on("click.approval", function (e) {
			//hide if visible
			if ($popover.is(":visible")) {
				$popover.hide();
			}
			else{			
				var $target = $(e.target);	
				var	left = $target.offset().left - 200
				,	top = $target.offset().top + 40;
				$('.popover-small-right, .popover-small-left, .popover-large-left, .popover-large-right').hide();
			    $popover.stop().fadeIn(300).offset({left: left, top: top}).show( 0, function () {
						//hide popovers when mouse clicks
						$('body').on("click",  function (event) {
							if ( $(event.target).parents('.submit-for-approval-popover').length ) {
							}
							else if ($(event.target).hasClass('submit-for-approval-popover')){
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
	});//show popover on click on icon
};


