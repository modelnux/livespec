$(document).ready(function() {




//quote summary popover
var quoteSummaryPopover = function () {
	var $popover = $('.quote-summary'),
	$button = $('.quote-summary-btn');
	
	$popover.hide();	
	//show popover on cick on icon
	$button.on("click", function (e) {
			//hide if visible
			if ($popover.is(":visible")) {
				$popover.hide();
			}
			else{			
				var $target = $button;	
				var	left = $target.offset().left - 280
				,	top = $target.offset().top + 40;
				$('.popover-large, .popover-small-right, .popover-small-left, .popover-large-left, .popover-large-right').hide();
			    $popover.stop().fadeIn(300).offset({left: left, top: top}).show( 0, function () {
			    		
						//hide popovers when mouse clicks
						$('body').on("click",  function (event) {
							if ( $(event.target).parents('.quote-summary').length ) {
							
							}
							else if ($(event.target).hasClass('quote-summary')){
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
}








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
				var $target = $button;
				var	left = $target.offset().left - 140
				,	top = $target.offset().top + 40;
				$('.popover-large, .popover-small-right, .popover-small-left, .popover-large-left, .popover-large-right').hide();
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
}


//quote summary popover
var filterPopover = function () {
	var $popover = $('.filter-popover'),
	$button = $('.filter');
	
	$popover.hide();	
	//show popover on cick on icon
	$button.on("click.more", function (e) {
			//hide if visible
			if ($popover.is(":visible")) {
				$popover.hide();
			}
			else{			
				var $target = $button;
				var	left = $target.offset().left -110
				,	top = $target.offset().top + 40;
				$('.popover-large, .popover-small-right, .popover-small-left, .popover-large-left, .popover-large-right').hide();
			    $popover.stop().fadeIn(300).offset({left: left, top: top}).show( 0, function () {
			    		
						//hide popovers when mouse clicks
						$('body').on("click",  function (event) {
							if ( $(event.target).parents('.filter-popover').length ) {
								
							}
							else if ($(event.target).hasClass('filter-popover')){
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
}




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
				var $target = $(e.target).closest('.btn');	
				var	left = $target.offset().left - 200
				,	top = $target.offset().top + 40;
				$('.popover-large, .popover-small-right, .popover-small-left, .popover-large-left, .popover-large-right').hide();
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
}







var showProductFromLineItem = function () {
		var pm = '.product-modal';

	$('body').on('click', '.prod p, .prod-name p', function() {

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
				$(".config-modal").find('.cancel').on("click", function () {
					$(".config-modal").remove();
				});
				$(".config-modal").find('.submit').on("click", function () {
					$(".config-modal").remove();
				});
	});
};



var editFields = function () {
		
	if ($('.click-table-section').find('.editable').length == 0 ) {
		$('.table-main-body').on("mouseover", ".adjustable p", function (e) {
			var number = $(this).text();
			$(this).parent('td').html("<input class='editable input' placeholder="+number+">");
		});

		$('.table-main-body').on("mouseout", ".editable", function (e) {
			if ($(this).is(":focus")) {
				var $this = $(this);
				$('body').on("click", function () {
					var number = $this.attr("placeholder");
					var value = $this.val();
				  	if (!value){
				  		
				  		$this.parent('td').empty().html("<p class='adjustable'>"+number+"</p>");
				  	
				  	}
				  	
				  	else{
				  	
				  		$this.parent('td').empty().html("<p class='adjustable'>"+value+"</p>");
					
					}

				});
				$('body').on("focus", function () {
					var number = $this.attr("placeholder");
					var value = $(this).val();
				  	if (!value){
				  		
				  		$this.parent('td').empty().html("<p class='adjustable'>"+number+"</p>");
				  	
				  	}
				  	
				  	else{
				  	
				  		$this.parent('td').empty().html("<p class='adjustable'>"+value+"</p>");
					
					}

				});
			}else{
			var number = $(this).attr("placeholder");
			$(this).parent('td').html("<p class='adjustable'>"+number+"</p>");
			}
		});
	}

}






//config-modal
var configmodal = "<div class='large-modal config-modal'><div class='modal-top clearfix'><i class='close fa fa-close pull-right'></i><h3 class='modal-title'>PowerEclipse M420 1/8 Blde Server</h3><nav><div class='pick-1' data='content-1'>OVERVIEW</div><div class='pick-2' data='content-2'>PRICING</div><div class='pick-3' data='content-3'>CONFIGURED SPECIFICATIONS</div><div class='pick-4' data='content-4'>ADDITIONAL INFO</div></nav></div><div class='modal-body'><div class='content-1'><div class='body'><div class='left pull-left'><img src=' alt='></div><div class='right pull-right'><p>The Dell™ PowerEdge™ M420 quarter-height blade server delivers unprecedented computational density, allowing up to 32 individually serviceable bladeservers per chassis, with nocompromiseon enterprise-class features. </p><ul><li>Ultra-dense, quarter-height blade</li><li>Individually serviceable</li><li>Hot-plug solid-state drives and hardware RAID</li><li>Impressive systems management capabilities</li><li>Leverages M1000e enclosure</li></ul><p>Implement the right combination of features and performance scalability with the PowerEdge M-series blade servers, which can handle tough workloads in any size data centers. In addition tothe world-class management features provided in all PowerEdge servers, the M420 alsotakesadvantage of the capabilities of the M1000e Chassis Management Controller (CMC). </p><p>See for yourself: <a href='#'>PowerEclipse M$20 compared to competitor product line</a></p><p>PowerEdge M-series blade servers use the redundant power and cooling infrastructure provided by the Dell M1000e blade enclosure, which is exceptionally easy to deploy and manage, andmaximizespower and cooling efficiency.</p></div></div></div><div class='content-2'><div class='body'><div class='row'><div class='left'><p>Cost</p></div><div class='right clearfix'><input class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='row'><div class='left'><p>Adjustment %</p></div><div class='right clearfix'><input class='input pull-left' placeholder='0.00' type='text'></div></div><div class='row'><div class='left'><p>Adjustment Absolute</p></div><div class='right clearfix'><input class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='line-break'></div><div class='row'><div class='left'><p>List Price</p></div><div class='right clearfix'><input class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='row'><div class='left no-input'><p class=''>Auto Adjustment (%)</p></div><div class='right clearfix'><p>0.00</p></div></div><div class='row'><div class='left no-input'><p class=''>Auto Adjustment (abs.)</p></div><div class='right clearfix'><p>$0.00</p></div></div><div class='row'><div class='left no-input'><p class=''>Auto Adjustment Reason</p></div><div class='right clearfix'><p class='left-align'>This is the reason why I gave the adjustment</p></div></div><div class='line-break'></div><div class='row'><div class='left'><p>Unit Price</p></div><div class='right clearfix'><input class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='row'><div class='left'><p>Qty</p></div><div class='right clearfix'><input class='input pull-left' placeholder='1' type='text'></div></div><div class='line-break'></div><div class='row'><div class='left'><p>Ext. Price</p></div><div class='right clearfix'><input class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='row'><div class='left'><p>Margin (%)</p></div><div class='right clearfix'><input class='input pull-left' placeholder='0.00' type='text'></div></div></div></div><div class='content-3'><div class='body'><div class='row'><div class='left'><p>Height</p></div><div class='right clearfix'><input disabled class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='row'><div class='left'><p>Width</p></div><div class='right clearfix'><input disabled class='input pull-left' placeholder='0.00' type='text'></div></div><div class='row'><div class='left'><p>Length</p></div><div class='right clearfix'><input disabled class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='row'><div class='left'><p>Weight</p></div><div class='right clearfix'><input disabled class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='row'><div class='left'><p>User Entered Value</p></div><div class='right clearfix'><input disabled class='input pull-left' placeholder='0.00' type='text'></div></div><div class='row'><div class='left'><p>User Entered Value</p></div><div class='right clearfix'><input disabled class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='row'><div class='left'><p>User Entered Value</p></div><div class='right clearfix'><input disabled class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='row'><div class='left'><p>User Entered Value</p></div><div class='right clearfix'><input disabled class='input pull-left' placeholder='0.00' type='text'></div></div></div></div></div><div class='content-4'><div class='body'><div class='row'><div class='left'><p>Height</p></div><div class='right clearfix'><input disabled class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='row'><div class='left'><p>Width</p></div><div class='right clearfix'><input disabled class='input pull-left' placeholder='0.00' type='text'></div></div><div class='row'><div class='left'><p>Length</p></div><div class='right clearfix'><input disabled class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='row'><div class='left'><p>Weight</p></div><div class='right clearfix'><input disabled class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='row'><div class='left'><p>User Entered Value</p></div><div class='right clearfix'><input disabled class='input pull-left' placeholder='0.00' type='text'></div></div><div class='row'><div class='left'><p>User Entered Value</p></div><div class='right clearfix'><input disabled class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='row'><div class='left'><p>User Entered Value</p></div><div class='right clearfix'><input disabled class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='row'><div class='left'><p>User Entered Value</p></div><div class='right clearfix'><input disabled class='input pull-left' placeholder='0.00' type='text'></div></div></div></div><div class='action-area clearfix'><button class='cancel btn'>Cancel</button><button class='submit btn btn-primary pull-right'>Submit</button></div></div>";







//calculator for config-modal
var calculator = function () {
	//config modal calculator
	//scrollbar
	$(".calc-table").mCustomScrollbar();
	//calc
	var calc = $(".calculator");
	calc.hide();
	$('.calc-icon').on("click", function (e) {
		if ( calc.is(":hidden") ) {
			calc.stop().fadeIn(300);
			e.stopImmediatePropagation();
		}
		else {
			calc.stop().fadeOut(300);
			e.stopImmediatePropagation();
		}
	});
};






// modal window open on hover, close on body click, close others on hover
var target = null;
var togglePopover = function (popoverName, popoverOrigin, xOffset, yOffset) {
	$(popoverName).hide();
	
	//show popover on cick on respective icons
	$('body').on("click", popoverOrigin, function (e) {
		console.log(popoverName);
			if ($(popoverName).is(":visible")) {
				$(popoverName).hide();
			}
			else{
				target = $(e.target);	
				
				var	left = target.offset().left + xOffset
				,	top = target.offset().top + yOffset;
				$('.popover-large, .popover-small-right, .popover-small-left, .popover-large-left, .popover-large-right').hide();
			    $(popoverName).stop().fadeIn(300).offset({left: left, top: top}).show( 0, function () {
						//hide popovers when mouse clicks
						$('body').on("click.close",  function (event) {
							if ( $(event.target).parents('.popover-small-left').length ) {
								
							}
							else if ( $(event.target).parents('.popover-small-right').length ) {
								
							}
							else if ($(event.target).hasClass('popover-small-left')){
								
							}
							else if ($(event.target).hasClass('popover-small-right')){
								
							}
							else if ($(event.target).is(popoverOrigin)) {
								
							}
							else {
								$(popoverName).hide();
								$('body').off("click.close");
							}
						});
						//hide popover when mouse clicks

						//hide popover when mouse leaves popover
						$(popoverName).on("mouseleave", function () {
							$(this).stop().fadeOut(300);
						});
						//hide popover when mouse leaves popover
			    });		
			}								
	});//show popover on click on respective icons

//links within the product menu popovers
		$(popoverName).find('a').on("click.behavior", function (e) {
	
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

				case "remove":
				 
					var tableProducts = JSON.parse(sessionStorage.getItem('tableProducts'));
					var productDataId = $(popoverOrigin).closest('.table-row-div').data('id');
					var trd = $(".table-row-div[data-id="+productDataId+"]");
					
					trd.next('.click-details').slideUp(450, "easeOutBounce", function () {
						$(this).remove();
					});

					trd.slideUp(450, "easeOutBounce", function () {
						$(this).remove().queue(function () {
							noProd();
						});
					});
			
					delete tableProducts[productDataId];
					sessionStorage.setItem('tableProducts', JSON.stringify(tableProducts))
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
				$(".config-modal").find('.cancel').on("click", function () {
					$(".config-modal").remove();
				});
				$(".config-modal").find('.submit').on("click", function () {
					$(".config-modal").remove();
				});
		});
};//togglePopover

togglePopover('.product-table-popover', '.product-menu', -23, 25);
togglePopover('.bundle-table-popover', '.bundle-menu', -23, 25);
togglePopover('.config-table-popover', '.config-menu', -23, 25);
togglePopover('.alert-popover-errors2', '.alert-div', -13, 35);
togglePopover('.alert-popover-errors1', '.pill-warning', -191, 35);
togglePopover('.alert-popover-errors1', '.pill-draft', -191, 35);	






var addProduct = function () {

	$('.product-result i').on("click.addrow", function (e) {
		$('.no-prods-warning').remove();
		$('.submit-for-approval-btn').removeClass('disabled-btn');
		$('.gen-prop').removeClass('disabled-btn');
		$('.more-btn').removeClass('disabled-btn');
		var $this = $(this);
		var $target = $(e.target);
		var type = $target.closest('.product-result').attr("class").replace("product-result ", "");
		var typeName = type.charAt(0).toUpperCase() + type.slice(1);
		var qty = $target.closest('.product-result').find('.input-sm').val();
		var prodTitle = $target.closest('.product-result').find('td:first-child()').children('p').text();
		var pos = $('.table-main-body').children('.table-row-div').length + 1;

		$('.table-main-body').append("<div class='table-row-div "+type+" inactive'><table><tr class='table-row clearfix'><td class='menu-icon new-menu-1'><i class='fa fa-bars'></i></td><td class='pos'>"+pos+".</td><td class='prod-type type-indicator'>"+typeName+"</td><td class='prod-name'><p>"+prodTitle+"</p></td><td class='bill-freq'><p>One Time</p></td><td class='list-price adjustable'><p>$69.99</p></td><td class='adj adjustable'><p>-10.00%</p></td><td class='unit-price adjustable'><p>$69.99</p></td><td class='qty adjustable'><p>"+qty+"</p></td><td class='ext-price adjustable'><p>$69.99</p></td><td class='del'><i class='fa fa-times-circle'></i></td></tr></table></div>").queue(function () {

			togglePopover($('.top-level-table-popover'), $('.new-menu-1 i, .top-level-table-popover'), $('.new-menu-1 i'), -23, 25);
		});


	});
};





//add product popover
var addProductPopover = function () {
	var $popover = $('.add-product-popover'),
	$button = $('.add-product-input');
	$(".product-result").hide();

	$popover.hide();	

	//show popover on cick on icon
	$button.on("click", function (e) {
			//hide if visible
			if ($popover.is(":visible")) {
				$popover.hide();
			}
			else{
				var $target = $button;	
				var	left = $target.offset().left + 0
				,	top = $target.offset().top + 28;
				$('.popover-large, .popover-small-right, .popover-small-left, .popover-large-left, .popover-large-right').hide();
			    $popover.stop().fadeIn(300).offset({left: left, top: top}).show(0, function () {

			    			$('.add-product-input').keypress( function () {
							    var inputValue = $(".add-product-input").val().toLowerCase();
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
}




// call functions

$(".loader").delay(700).fadeOut("fast");


//back button top left of screen
    $('.back-btn').click(function(){
        parent.history.back();
        return false;
    });


	//scrollbar
	$(".add-product-results").mCustomScrollbar();
	$(".product-info-div").mCustomScrollbar();

quoteSummaryPopover();
addProductPopover();
titleMorePopover();
submitForApprovalPopover(); 
editFields();

filterPopover();
showProductFromLineItem();





}); // document.ready