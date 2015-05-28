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
	},

	tooltips: {

		disabledProgram: function () {
			var mouseover;
			var tooltip;

			$(".disabledProgram").off("mouseenter");	
			$(".disabledProgram").on("mouseenter", function () {
				mouseover = true;
				tooltip = $("<div class='defaultEndTip tooltip-right'><div class='clearfix'><h3><i class='fa fa-info-circle'></i> Friendly Reminder</h3><p style='position: relative;'>This program is being operated on in the background. If you wait five minutes, this should be done.</p></div></div>");
				$this = $(this);

				setTimeout(function(){
					var	left = $this.offset().left
					,	top = $this.offset().top + 40;
					
					if(mouseover) {
						$("body").stop().after(tooltip);
						$('.defaultEndTip').finish().hide().offset({left: left, top: top}).fadeIn(200);
					}
					else{
						$('.defaultEndTip').remove();
					}

				}, 1200);

				
			});
			
			$(".disabledProgram").off("mouseout");
			$(".disabledProgram").on("mouseout", function() {
				mouseover = false;
				delete tooltip;
				$('.defaultEndTip').fadeOut("fast", function(){
					$(this).remove();
				});
			});


				
		},

		defaultEndQuarter: function () {

			var mouseover;
			var tooltip;

			$("body").off("mouseenter", ".defaultEnd");	
			$("body").on("mouseenter", ".defaultEnd", function () {
				mouseover = true;
				tooltip = $("<div class='defaultEndTip tooltip-right'><div class='clearfix'><h3><i class='fa fa-info-circle'></i> Changing the End Quarter</h3><p style='position: relative;'>The Default End Quarter is the lower of either 1. the program end-date, or 2. the product expiration date plus four quarters. Click here to change this value, or adjust it later on a product-by-product basis on the Review &amp; Modify Page</p></div></div>");
				$this = $(this);

				setTimeout(function(){
					var	left = $this.offset().left
					,	top = $this.offset().top + 40;
					
					if(mouseover) {
						$("body").stop().after(tooltip);
						$('.defaultEndTip').finish().hide().offset({left: left, top: top}).fadeIn(200);
					}
					else{
						$('.defaultEndTip').remove();
					}

				}, 1200);

				
			});
			
			$("body").off("mouseout", ".defaultEnd");
			$("body").on("mouseout", ".defaultEnd", function() {
				mouseover = false;
				delete tooltip;
				$('.defaultEndTip').fadeOut("fast", function(){
					$(this).remove();
				});
			});


		},

		defaultStartQuarter: function () {

			var mouseover;
			var tooltip;

			$("body").off("mouseenter", ".defaultStart");	
			$("body").on("mouseenter", ".defaultStart", function() {
				mouseover = true;
				tooltip = $("<div class='defaultStartTip tooltip-left'><h3><i class='fa fa-info-circle'></i> Changing the Start Quarter<p style='position: relative;'>The system will default this drug’s start quarter to the more recent of either 1. the market entry quarter, or 2. the program start quarter. Change this value by clicking here, or by adjusting the values on a product-by-product basis on the Review &amp; Modify Page.</p></div>");
				var $this = $(this);
				setTimeout(function(){
					var	left = $this.offset().left - 230
					,	top = $this.offset().top + 40;

					if(mouseover) {
						$("body").after(tooltip);
						$('.defaultStartTip').finish().hide().offset({left: left, top: top}).fadeIn(200);
					}
					else{
						$('.defaultEndTip').remove();
					}

				}, 1200);
				
				
			});
			
			$("body").off("mouseout", ".defaultStart");
			$("body").on("mouseout", ".defaultStart", function() {
				mouseover = false;
				delete tooltip;
				$('.defaultStartTip').fadeOut("fast", function(){
					$(this).remove();
				});
				
			});
		},

		defaultFormula: function () {

			var mouseover;

			$("body").off("mouseenter", ".defaultFormula");	
			$("body").on("mouseenter", ".defaultFormula", function() {
				mouseover = true;
				var tooltip = $("<div class='defaultForumlaTip tooltip-right'><h3><i class='fa fa-info-circle'></i> Changing the Formula</h3><p>Change this value by clicking this link or by adjusting the values on a product-by-product basis on the Review &amp; Modify Page.</p></div>");
				$this = $(this);
				setTimeout(function(){
					var	left = $this.offset().left
					,	top = $this.offset().top + 40;

					if(mouseover) {
						$("body").after(tooltip);
						$('.defaultForumlaTip').finish().hide().offset({left: left, top: top}).fadeIn(200);
					}
					else{
						$('.defaultForumlaTip').remove();
					}

				}, 1200);
				
				
			});
			
			$("body").off("mouseout", ".defaultFormula");
			$("body").on("mouseout", ".defaultFormula", function() {
				mouseover = false;
				$('.defaultForumlaTip').fadeOut("fast", function(){
					$(this).remove();
				});

				
			});
		},

		adjustStart: function () {

			var mouseover;

			$(".adjustStart").off("mouseenter");	
			$(".adjustStart").on("mouseenter", function() {
				mouseover = true;
				tooltip = $("<div class='adjustStartTip tooltip-right'><h3><i class='fa fa-info-circle'></i> Changing the Start Quarter</h3><p>Change this value by clicking this link or by adjusting the values on a product-by-product basis on the Review &amp; Modify Page.</p></div>");
				$this = $(this);
				setTimeout(function(){
					var	left = $this.offset().left
					,	top = $this.offset().top + 40;

					if(mouseover) {
						$("body").after(tooltip);
						$('.adjustStartTip').finish().hide().offset({left: left, top: top}).fadeIn(200);
					}
					else{
						$('.adjustStartTip').remove();
					}

				}, 1200);
				
				
			});
			
			$(".adjustStart").off("mouseout");
			$(".adjustStart").on("mouseout", function() {
				mouseover = false;
				$('.adjustStartTip').fadeOut("fast", function(){
					$(this).remove();
				});

				
			});
		},

		adjustEnd: function () {

			var mouseover;

			$(".adjustEnd").off("mouseenter");	
			$(".adjustEnd").on("mouseenter", function() {
				mouseover = true;
				tooltip = $("<div class='adjustEndTip tooltip-left'><div class='clearfix'><h3><i class='fa fa-info-circle'></i> Changing the End Quarter</h3><p style='position: relative;'>Change this value by clicking this link or by adjusting the values on a product-by-product basis on the Review Page.</p></div></div>");
				$this = $(this);
				setTimeout(function(){
					var	left = $this.offset().left - 230
					,	top = $this.offset().top + 40;

					if(mouseover) {
						$("body").after(tooltip);
						$('.adjustEndTip').finish().hide().offset({left: left, top: top}).fadeIn(200);
					}
					else{
						$('.adjustEndTip').remove();
					}

				}, 1200);
				
				
			});
			
			$(".adjustEnd").off("mouseout");
			$(".adjustEnd").on("mouseout", function() {
				mouseover = false;
				$('.adjustEndTip').fadeOut("fast", function(){
					$(this).remove();
				});

				
			});
		},

		adjustURA: function () {

			var mouseover;

			$(".adjustURA").off("mouseenter");	
			$(".adjustURA").on("mouseenter", function() {
				mouseover = true;
				var tooltip = $("<div class='adjustURATip tooltip-left'><h3><i class='fa fa-info-circle'></i> Change the URA Formula</h3><p>Select which URA formula you want to apply to the to this product within this program</p></div>");
				$this = $(this);
				setTimeout(function(){
					var	left = $this.offset().left - 230
					,	top = $this.offset().top + 40;

					if(mouseover) {
						$("body").after(tooltip);
						$('.adjustURATip').finish().hide().offset({left: left, top: top}).fadeIn(200);
					}
					else{
						$('.adjustURATip').remove();
					}

				}, 1200);
				
				
			});
			
			$(".adjustURA").off("mouseout");
			$(".adjustURA").on("mouseout", function() {
				mouseover = false;
				$('.adjustURATip').fadeOut("fast", function(){
					$(this).remove();
				});

				
			});
		},

		warningModal: function () {
			var mouseover;

			$(".orange").off("mouseenter");	
			$(".orange").on("mouseenter", function() {
				mouseover = true;
				var tooltip = $("<div class='warningTip tooltip-right'><h3><i class='fa fa-exclamation-circle'></i> 1 Warning</h3><p>Pennsylvania Medicaid Program Ends 2018 Q3</p></div>");
				$this = $(this);
				setTimeout(function(){
					var	left = $this.offset().left - 10
					,	top = $this.offset().top + 40;

					if(mouseover) {
						$("body").after(tooltip);
						$('.warningTip').finish().hide().offset({left: left, top: top}).fadeIn(200);
					}
					else{
						$('.warningTip').remove();
					}

				}, 1200);
				
				
			});
			
			$(".orange").off("mouseout");
			$(".orange").on("mouseout", function() {
				mouseover = false;
				$('.warningTip').fadeOut("fast", function(){
					$(this).remove();
				});

				
			});			


		},

		errorModal: function () {
			
			var mouseover;

			$(".red").off("mouseenter");	
			$(".red").on("mouseenter", function() {
				mouseover = true;
				var tooltip = $("<div class='errorTip tooltip-right'><h3><i class='fa fa-exclamation-circle'></i> 1 Error</h3><p>Pennsylvania Medicaid Program Ends 2018 Q3</p></div>");
				$this = $(this);
				setTimeout(function(){
					var	left = $this.offset().left - 10
					,	top = $this.offset().top + 40;

					if(mouseover) {
						$("body").after(tooltip);
						$('.errorTip').finish().hide().offset({left: left, top: top}).fadeIn(200);
					}
					else{
						$('.errorTip').remove();
					}

				}, 1200);
				
				
			});
			
			$(".red").off("mouseout");
			$(".red").on("mouseout", function() {
				mouseover = false;
				$('.errorTip').fadeOut("fast", function(){
					$(this).remove();
				});

				
			});

		},

	},

	quarterAdjustment: function () {
		$('.adjustQuarterModal').hide();
		
		$("body").off("click", '.defaultEnd, .defaultStart, .adjustStart, .adjustEnd');
		$("body").on("click", '.defaultEnd, .defaultStart, .adjustStart, .adjustEnd', function (e) {
			
			var $this = $(this),
			value = $this.text();

			if($(e.target).hasClass('defaultStart') || $(e.target).hasClass('adjustStart')){
				$('.titleArea h1').text("Adjust Start Date");
				$('.defaultOption').text("Greater of Market Entry Date Quarter and Program Start Quarter");
				$('.noneSelect').show();
				$('.noneSelect').next('p').show();
			}
			else{
				$('.titleArea h1').text("Adjust End Date");
				$('.defaultOption').text("Lower of the Program End Quarter and the Shelf Life Exp. Date plus four quarters")
				$('.noneSelect').hide();
				$('.noneSelect').next('p').hide();
			}

			$('.adjustQuarterModal').show();
			$('.fa-times, .cancel').on("click", function () {
				$('.adjustQuarterModal').hide();
			});

			$('.selectQuarter').off("click");
			$('.selectQuarter').on("click", function () {
				if($('.selected').is(":checked")){
					var year = $('.yearSelect').val();
					var qtr = $('.qtrSelect').val();
					console.log(year+", "+qtr);
					$this.html(year+" "+qtr+" <i class='fa fa-edit'></i>");
				}
				else{
					//do nothing
				}
				
				$('.adjustQuarterModal').hide();
			});

		});
	},

	uraAdjustment: function () {
			$('.adjustURAModal').hide();

			$("body").off("click", '.defaultFormula, .adjustURA');
			$("body").on("click", '.defaultFormula, .adjustURA', function () {
				$('.titleArea h1').text("Adjust URA Formula");
				$('.defaultOption').text("Default URA Formula");
				$('.adjustURAModal').show();
				
				$('.selectURA').off("click");
				$('.selectURA, .adjustURAModal .cancel, .adjustURAModal .fa-times').on("click", function() {
					$('.adjustURAModal').hide();
				});
			});
	}
};

modalBehavior.searchDropdown();
modalBehavior.actionGroupModals();
modalBehavior.listSort();
modalBehavior.topNavDropDown();
modalBehavior.extendedSearch();
modalBehavior.tooltips.disabledProgram();
modalBehavior.tooltips.defaultEndQuarter();
modalBehavior.tooltips.defaultStartQuarter();
modalBehavior.tooltips.defaultFormula();
modalBehavior.tooltips.adjustStart();
modalBehavior.tooltips.adjustEnd();
modalBehavior.tooltips.adjustURA();
modalBehavior.tooltips.warningModal();
modalBehavior.tooltips.errorModal();
modalBehavior.quarterAdjustment();
modalBehavior.uraAdjustment();
});

