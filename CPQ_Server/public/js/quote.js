$(document).ready(function() {

//no products in quote display
var noProd = function () {
	var tmb = $('.table-main-body');
	if (tmb.children('.table-row-div').length == 0) {
		tmb.append("<div class='no-prods-warning'>Currently, there are no products in this Quote</div>");
		$('.no-prods-warning').hide().fadeIn(300);
		$('.submit-for-approval-btn').addClass('disabled');
		$('.quote-summary-btn').addClass('disabled');
		$('.more-btn').addClass('disabled');
		$('.search-filter').addClass('disabled');
	}
	else{
		$('.no-prods-warning').remove();
		$('.submit-for-approval-btn').removeClass('disabled');
		$('.quote-summary-btn').removeClass('disabled');
		$('.more-btn').removeClass('disabled');
		$('.search-filter').removeClass('disabled');
	};
}


var submitForApproval = function () {
	$('.edit-quote').hide();
	alertDiv = $('.alert-div').filter( function () { return $(this).css('display') == 'inline-block';}).length;
		if( alertDiv == 0 ){
			$('.submit-for-approval-btn').on("click", function () {
					$(this).text('Mark as Ordered');
					$('.edit-quote').show();
					$('.searchGroup').addClass('disabled');
					$('.pill-draft').css('background', '#80C536').text('Ready');
					$('.fa-cog').hide();
			});
		}
		$('.edit-quote').on("click", function () {
			$('.pill-draft').css('background', '#9B9B9B').text('Draft');
			$('.submit-for-approval-btn').text('Ready for Customer');
			$('.edit-quote').hide();
			$('.searchGroup').removeClass('disabled');
			$('.fa-cog').show();
		});
}



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
				var	left = $target.offset().left - 361
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
			    });	
			}			
	});//show popover on click on icon
}




//quote summary popover
var titleMorePopover = function () {
	var $popover = $('.title-more-popover')            
	,   $button = $('.more-btn');
	
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
				var	left = $target.offset().left -164
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
			    });	
			}			
	});//show popover on click on icon
}

var editFields2 = function () {
	$('body').on("mouseover", ".table-row-div, .external-table-row", function () {
		var fields = $(this).find('.adjustable p');

		for (var i = fields.length - 1; i >= 0; i--) {
			var field = fields[i];
			var width = field.offsetWidth -15;			
			var number = $(field).text();
			$(field).parent('td').html("<input style='width: "+width+"px; padding: 5px 4px;' class='editable input' placeholder="+number+">");
		};
	});

	$('body').on("mouseleave", ".table-row-div, .external-table-row", function () {
		var fields = $(this).find('.editable');

		for (var i = fields.length - 1; i >= 0; i--) {
			var field = fields[i];
			var value = $(field).val();
			var placeholder = $(field).attr("placeholder");
			
			if ($(field).is(":focus")) {

				var $this = $(field);
				
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
					var value = $(field).val();
				
				  	if (!value){
				  		
				  		$this.parent('td').empty().html("<p class='adjustable'>"+number+"</p>");
				  	
				  	}
				  	
				  	else{
				  	
				  		$this.parent('td').empty().html("<p class='adjustable'>"+value+"</p>");
					
					}

				});

			}else{

			var number = $(field).attr("placeholder");
			$(field).parent('td').html("<p class='adjustable'>"+number+"</p>");
			
			}
		};
	});

}

editFields2();
// var editFields = function () {
		
// 	if ($('.click-table-section').find('.editable').length == 0 ) {
// 		$('.table-main-body').on("mouseover", ".adjustable p", function (e) {
// 			var number = $(this).text();
// 			$(this).parent('td').html("<input class='editable input' placeholder="+number+">");
// 		});

// 		$('.table-main-body').on("mouseout", ".editable", function (e) {
// 			if ($(this).is(":focus")) {
// 				var $this = $(this);
// 				$('body').on("click", function () {
// 					var number = $this.attr("placeholder");
// 					var value = $this.val();
// 				  	if (!value){
				  		
// 				  		$this.parent('td').empty().html("<p class='adjustable'>"+number+"</p>");
				  	
// 				  	}
				  	
// 				  	else{
				  	
// 				  		$this.parent('td').empty().html("<p class='adjustable'>"+value+"</p>");
					
// 					}

// 				});
// 				$('body').on("focus", function () {
// 					var number = $this.attr("placeholder");
// 					var value = $(this).val();
// 				  	if (!value){
				  		
// 				  		$this.parent('td').empty().html("<p class='adjustable'>"+number+"</p>");
				  	
// 				  	}
				  	
// 				  	else{
				  	
// 				  		$this.parent('td').empty().html("<p class='adjustable'>"+value+"</p>");
					
// 					}

// 				});
// 			}else{
// 			var number = $(this).attr("placeholder");
// 			$(this).parent('td').html("<p class='adjustable'>"+number+"</p>");
// 			}
// 		});
// 	}

// }






//config-modal
var configmodal = "<div class='large-modal config-modal'><div class='modal-top clearfix'><i class='close fa fa-close pull-right'></i><h3 class='modal-title'>PowerEclipse M420 1/8 Blde Server</h3><nav><div class='pick-1' data='content-1'>OVERVIEW</div><div class='pick-2' data='content-2'>CONFIGURED SPECIFICATIONS</div><div class='pick-3' data='content-3'>PRICING</div></nav></div><div class='modal-body'><div class='content-1'><div class='body'><div class='left pull-left'><img></div><div class='right pull-right'><p>The Dell™ PowerEdge™ M420 quarter-height blade server delivers unprecedented computational density, allowing up to 32individually serviceable bladeservers per chassis, withnocompromiseonenterprise-class features. </p><ul><li>Ultra-dense, quarter-height blade</li><li>Individually serviceable</li><li>Hot-plug solid-state drives and hardware RAID</li><li>Impressive systems management capabilities</li><li>Leverages M1000e enclosure</li></ul><p>Implement the right combination of features and performance scalability with the PowerEdge M-series blade servers, which can handle tough workloads in any size data centers. In addition tothe world-class management features provided in allPowerEdge servers, the M420 alsotakesadvantageofthe capabilities of the M1000e Chassis Management Controller (CMC). </p><p>See for yourself: <a href='#'>PowerEclipse M$20 compared to competitor product line</a></p><p>PowerEdge M-series blade servers use the redundant power and cooling infrastructure provided by the Dell M1000e bladeenclosure, which is exceptionally easy to deploy and manage,andmaximizespowerand cooling efficiency.</p></div></div></div><div class='content-3'><div class='body'><div class='row'><div class='left'><p>Cost</p></div><div class='right clearfix'><input class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='row'><div class='left'><p>Adjustment %</p></div><div class='right clearfix'><input class='input pull-left' placeholder='0.00' type='text'></div></div><div class='row'><div class='left'><p>Adjustment Absolute</p></div><div class='right clearfix'><input class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='line-break'></div><div class='row'><div class='left'><p>List Price</p></div><div class='right clearfix'><input class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='row'><div class='left no-input'><p class=''>Auto Adjustment (%)</p></div><div class='right clearfix'><p>0.00</p></div></div><div class='row'><div class='left no-input'><p class=''>Auto Adjustment (abs.)</p></div><div class='right clearfix'><p>$0.00</p></div></div><div class='row'><div class='left no-input'><p class=''>Auto Adjustment Reason</p></div><div class='right clearfix'><p class='left-align'>This is the reason why I gave the adjustment</p></div></div><div class='line-break'></div><div class='row'><div class='left'><p>Unit Price</p></div><div class='right clearfix'><input class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='row'><div class='left'><p>Qty</p></div><div class='right clearfix'><input class='input pull-left' placeholder='1' type='text'></div></div><div class='line-break'></div><div class='row'><div class='left'><p>Ext. Price</p></div><div class='right clearfix'><input class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='row'><div class='left'><p>Margin (%)</p></div><div class='right clearfix'><input class='input pull-left' placeholder='0.00' type='text'></div></div></div></div><div class='content-2'><div class='body'><div class='row'><div class='left'><p>Height</p></div><div class='right clearfix'><input disabled class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='row'><div class='left'><p>Width</p></div><div class='right clearfix'><input disabled class='input pull-left' placeholder='0.00' type='text'></div></div><div class='row'><div class='left'><p>Length</p></div><div class='right clearfix'><input disabled class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='row'><div class='left'><p>Weight</p></div><div class='right clearfix'><input disabled class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='row'><div class='left'><p>User Entered Value</p></div><div class='right clearfix'><input disabled class='input pull-left' placeholder='0.00' type='text'></div></div><div class='row'><div class='left'><p>User Entered Value</p></div><div class='right clearfix'><input disabled class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='row'><div class='left'><p>User Entered Value</p></div><div class='right clearfix'><input disabled class='input pull-left' placeholder='$0.00' type='text'></div></div><div class='row'><div class='left'><p>User Entered Value</p></div><div class='right clearfix'><input disabled class='input pull-left' placeholder='0.00' type='text'></div></div></div></div></div><div class='action-area clearfix'><button class='cancel btn'>Cancel</button><button class='submit btn btn-primary pull-right'>OK</button></div></div>";







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


showErrors = function () {

	var tableProducts = JSON.parse(sessionStorage.getItem('tableProducts'));
	var errors = 0;

	for(key in tableProducts){
		var product = tableProducts[key];

		if (product.type == "config") {
			if (product.errors == undefined || product.errors == true) {
				errors++;

				$('.table-row-div[data-id='+product._id+']').find('.fa-cog').css("color","#D0021B");

			}
			else {

				$('.table-row-div[data-id='+product._id+']').find('.fa-cog').addClass('configged').css({'color': 'transparent', 'background-image':'url(\'config icon.png\')', 'background-size':'100%'});
			}

		}
	}
	if (errors) {
		$('.quote-alert').css({"display":"inline-block"});
		
			if (errors == 1) {
				
				$('.quote-alert').children('p').html(" "+errors+" To Do <i class='fa fa-caret-down'></i>");
			
			}else{
				
				$('.quote-alert').children('p').html(" "+errors+" To Do\'s <i class='fa fa-caret-down'></i>");
			
			}
			submitForApproval();

	}else{
		errors--;
		$('.quote-alert').children('p').text('')
		$('.quote-alert').css({"display":"none"});
		$('.alert-popover-errors2').remove();
		submitForApproval();
		
	}
}




// modal window open on hover, close on body click, close others on hover
var target = null;
var togglePopover = function (popoverName, popoverOrigin, xOffset, yOffset) {
	$(popoverName).hide();
	
	//show popover on cick on respective icons
	$('body').on("click", popoverOrigin, function (e) {
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
						pick1.removeClass("hovered");
						pick2.removeClass("hovered");
						pick3.addClass("hovered");
						pick4.removeClass("hovered");
						content1.hide();
						content2.hide();
						content3.show();
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
						pick1.addClass("hovered");
						pick2.removeClass("hovered");
						pick3.removeClass("hovered");
						pick4.removeClass("hovered");
						content1.show();
						content2.hide();
						content3.hide();
						content4.hide();							
				break;

				case "config":
						$('.config-modal').remove();
						var popup = window.open('price_history.png','targetWindow', 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=768, height=407');
						var scrnHeight = screen.height;
						var scrnWidth = screen.width;
						var top = scrnHeight/2 - 768/2;
						var left = scrnWidth/2 - 407/2;						
						popup.moveTo(left, top);
				break;

				case "remove":
				 
					var tableProducts = JSON.parse(sessionStorage.getItem('tableProducts'));
					var productDataId = $(target).closest('.table-row-div').data('id');
					var trd = $(".table-row-div[data-id="+productDataId+"]");
					if ( trd.hasClass("config") || trd.hasClass("bundle") ) {

						trd.next('.click-details').slideUp(450, "easeOutBounce", function () {
							$(this).remove();
							trd.slideUp(450, "easeOutBounce", function () {
							$(this).remove().queue(function () {
								noProd();
								showErrors();
								submitForApproval();
								});
							});
						});
					}
					if (trd.hasClass("product")){
							trd.slideUp(450, "easeOutBounce", function () {
							$(this).remove().queue(function () {
								noProd();
								showErrors();
								submitForApproval();
								});
							});
					}

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
				else if ( content == "content-4" ) {
						pick1.removeClass("hovered");
						pick2.removeClass("hovered");
						pick3.removeClass("hovered");
						pick4.addClass("hovered");
						content1.hide();
						content2.hide();
						content3.hide();
						content4.show();				


				}
				else if (content == "content-3"){
						pick1.removeClass("hovered");
						pick2.removeClass("hovered");
						pick3.addClass("hovered");
						pick4.removeClass("hovered");
						content1.hide();
						content2.hide();
						content3.stop().fadeIn({duration: 500, queue: false}).show("slide", {direction: "right"}, 250);
						content4.hide();
				}
				else {
						pick1.removeClass("hovered");
						pick2.addClass("hovered");
						pick3.removeClass("hovered");
						pick4.removeClass("hovered");
						content1.hide();
						content4.hide();
						content3.hide();
						content2.stop().fadeIn({duration: 500, queue: false}).show("slide", {direction: "right"}, 250);
						
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
togglePopover('.second-level-popover', '.external-table-row .menu-icon', -23, 25);
togglePopover('.alert-popover-errors1', '.pill-warning', -191, 35);
togglePopover('.alert-popover-errors1', '.pill-draft', -201, 35);	



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
				var	left = $target.siblings('i').offset().left 
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
							if ( $(event.target).hasClass('input-sm')) {
							}
							else {
								$popover.hide();	
							}
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
// editFields();
filterPopover();
submitForApproval();
toDoPopover();
toDoReadyPopover();
configurationInc();

}); // document.ready