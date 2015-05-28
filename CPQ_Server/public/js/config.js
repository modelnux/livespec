$(document).ready(function() {

//to do popover
var toDoPopover = function () {
	var $popover = $('.todo-config-popover'),
	$button = $('.config-alert');
	
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
							if ( $(event.target).parents('.todo-config-popover').length ) {
								$popover.hide();
							}
							else if ($(event.target).hasClass('todo-config-popover')){
								$popover.hide();
							}
							else {
								
								
							}
						});
			    });	
			}			
	});//show popover on click on icon

	$('.todo-config-popover .actions .btn, .todo-config-popover i').on("click", function () {
		$popover.hide();
	})
}

configErrors = function () {
	var errors = $('.required').filter(function(){return $(this).find('.section-item-alert').length;});
	var errorCount = $('.required').filter(function(){return $(this).find('.section-item-alert').length;}).length;
	
	if (errors) {
		console.log(errors.length)
		$('.config-alert').css({"display":"inline-block"});
		$('.config-discrepancies ul').empty();
		for (var i = errors.length - 1; i >= 0; i--) {

			var error = errors[i];
			var section = $(error).find('p').text();
			var caption = $('.section-selected-subtitle').filter(function(){return $(this).text() == section;}).next('.subtitle-desc').text();
			
			caption = caption.replace("- ","");
			console.log(caption);
			$('.config-discrepancies ul').append("<li><p>"+caption+" in <a>\""+section+"\"</a></li>");
		};

		

		if (errorCount == 1) {
			
			$('.config-alert').children('p').html(" "+errors.length+" To Do <i class='fa fa-caret-down'></i>");
		
		}else{
			
			$('.config-alert').children('p').html(" "+errors.length+" To Do\'s <i class='fa fa-caret-down'></i>");
		
		}
		if (errorCount == 0) {
			$('.config-alert').hide();
		}
	}

}


//quote summary popover
var configSummaryPopover = function () {
	var $popover = $('.config-summary'),
	$button = $('.config-summary-btn');
	
	$popover.hide();	
	//show popover on cick on icon
	$button.on("click", function (e) {
			//hide if visible
			if ($popover.is(":visible")) {
				$popover.hide();
			}
			else{			
				var $target = $button;	
				var	left = $target.offset().left - 314
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


addCheckAndProduct = function () {

	$('.product-tag').on("click", function (e) {

		// insert commas
	  function commaSeparateNumber(val){
	    while (/(\d+)(\d{3})/.test(val.toString())){
	      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
	    }
	    return val;
	  }


		var product = $(this).children('.product-desc').children('.product-name').text().substr(0, 26)+"...";
		var price = parseInt($(this).children('.product-desc').children('.prod-price').text().replace('Price: $', '').replace(',',''));
		var warning = $(this).parent('.right-panel-section').find('.right-panel-warning');
		var title = $(this).parent('.right-panel-section').children('.section-selected').children('h3').text();
		var li = $('.left-panel').find('li').filter(function() {return $(this).children('p:first-child').text() === title;});
		var checkIcon = "<i class='check-icon fa fa-check'></i>";
		var liWarning = "<i class='section-item-alert pull-right fa fa-exclamation-circle'></i>";
		var currentTotal = parseInt($('.total-price').text().replace('$','').replace(',',''));

		if ( $(this).find('.check-icon').length ) {
			
				
				if($(e.target).hasClass("input")){
					
				}else{

					$(this).find('.input').val(0);
					$(this).children('.check-icon').remove();
					
				}
			
		}
		else{
			
			$(this).append(checkIcon);
				
			if($(e.target).hasClass("input")){
				
			}else{
		
				
			}
		};

		if ($(this).closest('.right-panel-section').find('.check-icon').length) {

			$(this).closest('.right-panel-section').find('.right-panel-warning').hide();
			
			li.children('.section-item-alert').remove().queue(function () {
			
				configErrors();
			
			});
			

			if (li.children('.check-icon').length == 0) {
				
				li.append(checkIcon);
			
			}

		}else{

			$(this).closest('.right-panel-section').find('.right-panel-warning').show();

			if(li.hasClass('required')){
			
				li.append('<i class="section-item-alert pull-right fa fa-exclamation-circle"></i>');	

			
			}
			
			li.children('.check-icon').remove().queue(function () {
				configErrors();
			});
			
		}
	});
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
togglePopover('.alert-popover-errors1', '.pill-draft', -191, 35);	


var scrollToPosition = function () {
	var listItems = $('.left-panel li').children('p:not(.req-alert)');
	
	var itemObject = {}
	for (var i = listItems.length - 1; i >= 0; i--) {
		item = listItems[i]
		text = $(item).text();

		var section = $('.section-selected-subtitle').filter(function() {return $(this).text() === text;});
		var name = $('.section-selected-subtitle').filter(function() {return $(this).text() === text;}).text();
		var $section = section.offset().top;

		itemObject[i] = {
			name: name,
			thisTop: $section
		}
	};

	$('p:not(.req-alert)').closest('.left-panel li').on('click', function () {

		thisName = $(this).children('p:not(.req-alert)').text();
		for (key in itemObject) {

			if (itemObject[key].name == thisName)
			var top = -(itemObject[key].thisTop - 200);
			
		$("#mCSB_2_container").stop().animate({"top":top+"px"});

		};
	})
}


var scrollToPositionFromTodo = function () {
	var listItems = $('.left-panel li').children('p:not(.req-alert)');
	
	var itemObject = {}
	for (var i = listItems.length - 1; i >= 0; i--) {
		item = listItems[i]
		text = $(item).text();

		var section = $('.section-selected-subtitle').filter(function() {return $(this).text() === text;});
		var name = $('.section-selected-subtitle').filter(function() {return $(this).text() === text;}).text();
		var $section = section.offset().top;

		itemObject[i] = {
			name: name,
			thisTop: $section
		}
	};

	$('body').on('click', '.todo-config-popover a', function () {

		thisName = $(this).text().replace("\"", "").replace("\"", "");
		console.log(thisName);
		for (key in itemObject) {

			if (itemObject[key].name == thisName)
			var top = -(itemObject[key].thisTop - 200);
			
		$("#mCSB_2_container").stop().animate({"top":top+"px"});
		};
	})
}

// call functions

$(".loader").delay(700).fadeOut("fast");


//scrollbars on config page
$(".left-panel").mCustomScrollbar();
$(".right-panel").mCustomScrollbar();

configSummaryPopover();
addCheckAndProduct();
scrollToPosition();
toDoPopover();
scrollToPositionFromTodo();

}); // document.ready