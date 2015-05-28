$(document).ready(function () {

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

var clickDetails = function () {

$('.click-details').hide();

$('body').on("click", '.table-row-div', function (e) {

	if ($(this).next('.click-details').is(":visible")) {
		if($(e.target).hasClass('config-menu') || $(e.target).hasClass('bundle-menu') ||  $(e.target).hasClass('product-menu') || $(e.target).hasClass('adjustable') || $(e.target).hasClass('editable')) {
			// do nothing
		}else{
			$(this)
			.next('.click-details').slideUp(350, "easeInBack", function () {
				$(this).prev('.table-row-div').removeClass("active");
			});
		}
	}
	else{
		$(this).siblings('.click-details').slideUp(350, "easeInBack");
		
		$(this)
		.siblings('.table-row-div').removeClass("active");
		
		$(this)
		.addClass("active")
		.next('.click-details').slideDown(350, "easeOutBack");
	}
});
}


var openConfigged = function (configgedProd) {
	
	if (configgedProd) {
		var trd = $('.table-row-div').filter( function () { 
				return $(this).data('id') == configgedProd;
			});
		trd.addClass('active').next('.click-details').get(0).style.display = 'block';
		sessionStorage.removeItem('configgedProd');
	}
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

function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
}

function capitaliseFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}


var dynamicQuotes = {
	//load initial quote view
	loadProducts: function  () {
		$.getJSON('js/data.json', function (data) {
			sessionStorage.setItem('data', JSON.stringify(data));	
		}).done(function () {
				var product = JSON.parse(sessionStorage.getItem('data'));
				var resultTable = $('.add-product-results table');
				
				for (var i = product.products.length - 1; i >= 0; i--) {

					resultTable.append("<tr data-id='"+product.products[i]._id+"'class='product-result "+product.products[i].type+"'><td><p>"+product.products[i].name+"</p></td><td><p>"+product.products[i].id+"</p></td><td><p>"+product.products[i].price+"</p></td><td><input placeholder='0' class='input-sm' type='number'></td><td><i class='fa fa-plus-circle'></i></td></tr>");
				};
			});

		var tableProducts = JSON.parse(sessionStorage.getItem('tableProducts'));
		var configgedProd = sessionStorage.getItem('configgedProd');

		var pos = 0;
		for (key in tableProducts) {
			var prod = tableProducts[key];
				if (prod != null) {

					pos++;
					var qty = parseInt(prod.qty);
					var totalPrice = prod.price;
					var totalAnnual = 0;
					totalPrice = parseFloat(totalPrice.replace("$", "").replace(",",""));
					totalPrice = totalPrice * qty;
					var cappedType = capitaliseFirstLetter(prod.type);
					prod.pos = pos;

					if(prod.addon0) {
						for (key in prod) {
							if (typeof prod[key] == "object") {
								var addOn = prod[key];
								var price = addOn.price;
								price = parseFloat(price.replace("$", "").replace(",","")) * addOn.qty;
								totalPrice += price;
							}
						}
					}

					totalPrice = commaSeparateNumber(totalPrice);
				
				if (prod.type == "config") {
					$('.table-main-body').append("<div data-id='"+prod._id+"' class='table-row-div "+prod.type+" inactive'><table><tr class='table-row clearfix'><td class='menu-icon'><i class='"+prod.type+"-menu fa fa-bars'></i></td><td class='config-icon'><i class='fa fa-cog'></i></td><td class='pos'>"+prod.pos+".</td><td class='prod-type type-indicator'>"+cappedType+"</td><td class='prod-name'><p>"+prod.name+"</p></td><td class='bill-freq'><p>"+prod.billing+"</p></td><td class='list-price'><p>--</p></td><td class='adj adjustable'><p>-10.00%</p></td><td class='unit-price'><p>--</p></td><td class='qty adjustable'><p>"+prod.qty+"</p></td><td class='ext-price adjustable'><p>$"+totalPrice+"</p></td></tr></table></div>");

					if(prod.addon0) {
						for (key in prod) {
							if (typeof prod[key] == "object") {
								var addOn = prod[key];
								var price = addOn.price;
								var qty = addOn.qty;
									if(addOn.billing == "Yearly") {
										price = addOn.price;
										price = price.replace("$", "");
										price = parseInt(price.replace('/yr', ''));
										console.log(price);
										totalAnnual += price*qty;

										var annualRow = "<tr class='table-row clearfix'><td class='menu-icon new-menu-1'></td><td class='config-icon'></td><td class='pos'></td><td class='prod-type type-indicator'></td><td class='prod-name'><p></p></td><td class='bill-freq'><p>Yearly</p></td><td class='list-price'><p>--</p></td><td class='adj adjustable'><p>0.00%</p></td><td class='unit-price'><p>--</p></td><td class='qty adjustable'><p>1</p></td><td class='ext-price adjustable'><p>$"+totalAnnual+"</p></td></tr>";
									
										$('.table-row-div[data-id='+prod._id+'] table').append(annualRow);
									}
							}
						}
					}
				}
				
				if(prod.type == "product" || prod.type == "bundle") {
				
					$('.table-main-body').append("<div data-id='"+prod._id+"' class='table-row-div "+prod.type+" inactive'><table><tr class='table-row clearfix'><td class='menu-icon new-menu-1'><i class='"+prod.type+"-menu fa fa-bars'></i></td><td class='config-icon'></td><td class='pos'>"+prod.pos+".</td><td class='prod-type type-indicator'>"+cappedType+"</td><td class='prod-name'><p>"+prod.name+"</p></td><td class='bill-freq'><p>One Time</p></td><td class='list-price adjustable'><p>"+prod.price+"</p></td><td class='adj adjustable'><p>0.00%</p></td><td class='unit-price adjustable'><p>"+prod.price+"</p></td><td class='qty adjustable'><p>"+prod.qty+"</p></td><td class='ext-price adjustable'><p>"+prod.price+"</p></td></tr></table></div>");
				}


					if (prod.type == "config") {
					
						$('.table-row-div[data-id='+prod._id+']').after("<div class='click-details'><div class='bordered clearfix'><table></table></div><div class='click-table-section'><table class='external-table-titles'><tr><td class='menu-icon new-menu-1'></td><td class='prod'>Product Name<i class='fa fa-arrow-down inline-icon'></i></td><td class='prodId'>Product ID</td><td class='sec'>Section</td><td class='billFreq'>Billing Frequency</td><td class='listPrice'>List Price</td><td class='adj'>Adjustment (%)</td><td class='unitPrice'>Unit Price</td><td class='qty'>Qty</td><td class='extPrice'>Ext. Price</td></tr></table><table class='external-table-data'><tr class='external-table-row'><td class='menu-icon new-menu-1'><i class='fa fa-bars'></i></td><td class='prod'><p>"+prod.name+"</p></td><td class='prodId'>900475</td><td class='sec'>"+prod.section+"</td><td class='billFreq'><p>"+prod.billing+"</p></td><td class='listPrice adjustable'><p>"+prod.price+"</p></td><td class='adj adjustable'><p>0.00%</p></td><td class='unitPrice adjustable'><p>"+prod.price+"</p></td><td class='qty adjustable'><p>1</p></td><td class='extPrice adjustable'><p>"+prod.price+"</p></td></tr></table></div></div>");
					
					}

					if (prod.type == "bundle") {
					
						$('.table-row-div[data-id='+prod._id+']').after("<div class='click-details'><div class='click-table-section'><table class='external-table-titles'><tr><td class='menu-icon new-menu-1'></td><td class='sec'>Section</td><td class='prod'>Product Name<i class='fa fa-arrow-down inline-icon'></i></td><td class='prodId'>Product ID</td><td class='billFreq'>Billing Frequency</td><td class='listPrice'>List Price</td><td class='adj'>Adjustment (%)</td><td class='unitPrice'>Unit Price</td><td class='qty'>Qty</td><td class='extPrice'>Ext. Price</td></tr></table><table class='external-table-data'><tr class='external-table-row'><td class='menu-icon new-menu-1'><i class='fa fa-bars'></i><td class='sec'>System Options</td></td><td class='prod'><p>4GB SDRAM, 1333 MT/s, Standard Volt, Single Rank, x4 Data Width</p></td><td class='prodId'>900475</td><td class='billFreq'><p>One Time</p></td><td class='listPrice adjustable'><p>$14.30</p></td><td class='adj adjustable'><p>0.00%</p></td><td class='unitPrice adjustable'><p>$14.30</p></td><td class='qty adjustable'><p>1</p></td><td class='extPrice adjustable'><p>$14.30</p></td></tr><tr class='external-table-row'><td class='menu-icon new-menu-1'><i class='fa fa-bars'></i></td><td class='sec'>System Options</td><td class='prod'><p>400 GB Solid State Drive 5400RPM 64MB SATA 6/GBS</p></td><td class='prodId'>900475</td><td class='billFreq'><p>One Time</p></td><td class='listPrice adjustable'><p>$700.00</p></td><td class='adj adjustable'><p>0.00%</p></td><td class='unitPrice adjustable'><p>$700.00</p></td><td class='qty adjustable'><p>1</p></td><td class='extPrice adjustable'><p>$700.00</p></td></tr></table></div>");
					
					}

				}
					
					for (var i = Object.keys(prod).length - 1; i >= 0; i--) {
							var addOn = prod["addon"+i];

							if (addOn) {

									if(addOn.billing == "Yearly") {
										price = addOn.price;
										price = price.replace("$", "");
										price = parseFloat(price.replace('/yr', ''));
										addOn.price = "$"+price;
									}

									price = addOn.price;
									price = price.replace("$", "").replace(",","");
									price = parseInt(price);
									price = price * addOn.qty;
									price = commaSeparateNumber(price);

							$('.table-row-div[data-id='+prod._id+']').next('.click-details').find('.external-table-data').append("<tr class='external-table-row'><td class='menu-icon new-menu-1'><i class='fa fa-bars'></i></td><td class='prod'><p>"+addOn.name+"</p></td><td class='prodId'>900475</td><td class='sec'>"+addOn.section+"</td><td class='billFreq'><p>"+addOn.billing+"</p></td><td class='listPrice adjustable'><p>"+addOn.price+"</p></td><td class='adj adjustable'><p>0.00%</p></td><td class='unitPrice adjustable'><p>"+addOn.price+"</p></td><td class='qty adjustable'><p>"+addOn.qty+"</p></td><td class='extPrice adjustable'><p>$"+price+"</p></td></tr>");
							}
					 }; 
				
			if(prod.errors == true || prod.errors == undefined && prod.type == "config"){
				$('.quote-discrepancies ul').append("<li><p data-id="+prod._id+"><a>#"+prod.pos+"</a> Complete the configuration of <a>\""+prod.name+"\"</a></p></li>");
			}


		};
		
		if ( window.location.href.match('config.html') ) {
			$('.todo-update-popover').hide();
			var product = JSON.parse(sessionStorage.getItem('data'));

			for (var i = product.products.length - 1; i >= 0; i--) {

				var sec = product.products[i].section
				, name = product.products[i].name
				, id = product.products[i].id
				, price = product.products[i].price
				, _id = product.products[i]._id;
				
				$('.section-selected-subtitle').filter( function () { 
					return $(this).text() === sec;
				}).closest('.right-panel-section')
				  .append("<div data-id='"+_id+"' class='product-tag'><div class='product-desc'><p class='product-name'>"+name+"</p><p class='prod-id'>ID: "+id+"</p><p class='prod-price'>One-Time List Price: <b>"+price+"</b></p><div class='qty-group'>Quantity <input value='"+qty+"' class='input' /></div></div></div>");

			};

			var configProd = JSON.parse(sessionStorage.getItem('configProd'));
			var checkIcon = "<i class='check-icon fa fa-check'></i>";
			$('.title').text(configProd.name);
			$('.pill-draft').hide();
			for(key in tableProducts) {
				var product = tableProducts[key];

				if(configProd._id == product._id){

					for(key in product){

						if(typeof product[key] == "object"){
							
							var addon = product[key];
							
							$('.product-tag[data-id='+addon._id+']').append(checkIcon);

							$('.product-tag[data-id='+addon._id+']').find('.input').val(addon.qty);

							var li = $('.left-panel li').filter(function(){return $(this).children('p').text() == addon.section;});
							
							if (li.find('.check-icon').length == 0){
								li.append(checkIcon);
							}
						}
					}
				}	
			}
		
			var required = $('.required').filter(function () { return $(this).find('.check-icon').length == 0;});
			var rightWarning = "<div class='right-panel-warning'><i class='fa fa-exclamation-circle'></i><p>A selection is required below</p></div>";

			for (var i = required.length - 1; i >= 0; i--) {
				name = $(required[i]).text();

				if($(required[i]).children('.section-item-alert').length == 0) {
					$(required[i]).append('<i class="section-item-alert pull-right fa fa-exclamation-circle"></i>');

					var tag = $('.section-selected-subtitle').filter(function(){return $(this).text() == name;});
				
					$(tag).closest('.section-selected').append(rightWarning);
			
				}
			
			};
		}

		
		clickDetails();
		openConfigged(configgedProd);
		noProd(); 
		showErrors();
		configErrors();
	},

	//add product to basket if selected in quote page
	addProductToQuote: function () {
		var tableProducts = JSON.parse(sessionStorage.getItem('tableProducts')) || {};
		$('body').on("click", ".product-result td", function (e) {
			if ($(e.target).is(".input-sm")) {
				// do nothing
			}else{
				productDataId = $(this).closest('tr').data('id')-1;
				var productCatalog = JSON.parse(sessionStorage.getItem('data'));
				var pos = $('.table-main-body').children('.table-row-div').length + 1;
				var thisProd = productCatalog.products[productDataId];
				var cappedType = capitaliseFirstLetter(thisProd.type);
				
				tableProducts[productDataId] = {
					_id: productDataId,
					id: thisProd.id,
					name: thisProd.name,
					price: thisProd.price,
					qty: thisProd.qty,
					section: thisProd.section,
					type: thisProd.type,
					billing: thisProd.billing,
					pos: pos

				};

				if(thisProd.type == "config") {
				
					$('.table-main-body').append("<div data-id='"+productDataId+"' class='table-row-div "+thisProd.type+" inactive'><table><tr class='table-row clearfix'><td class='menu-icon'><i class='"+thisProd.type+"-menu fa fa-bars'></i></td><td class='config-icon'><i class='fa fa-cog'></i></td><td class='pos'>"+pos+".</td><td class='prod-type type-indicator'>"+cappedType+"</td><td class='prod-name'><p>"+thisProd.name+"</p></td><td class='bill-freq'><p>"+thisProd.billing+"</p></td><td class='list-price'><p>--</p></td><td class='adj adjustable'><p>-10.00%</p></td><td class='unit-price'><p>--</p></td><td class='qty adjustable'><p>"+thisProd.qty+"</p></td><td class='ext-price adjustable'><p>"+thisProd.price+"</p></td></tr></table></div>");


					$('.quote-discrepancies ul').append("<li><p data-id="+productDataId+"><a>#"+pos+"</a> Complete the configuration of <a>\""+thisProd.name+"\"</a></p></li>");
			
				}
				
				if(thisProd.type == "product" || thisProd.type == "bundle") {
				
					$('.table-main-body').append("<div data-id='"+productDataId+"' class='table-row-div "+thisProd.type+" inactive'><table><tr class='table-row clearfix'><td class='menu-icon new-menu-1'><i class='"+thisProd.type+"-menu fa fa-bars'></i></td><td class='config-icon'></td><td class='pos'>"+pos+".</td><td class='prod-type type-indicator'>"+cappedType+"</td><td class='prod-name'><p>"+thisProd.name+"</p></td><td class='bill-freq'><p>One Time</p></td><td class='list-price adjustable'><p>"+thisProd.price+"</p></td><td class='adj adjustable'><p>-10.00%</p></td><td class='unit-price adjustable'><p>"+thisProd.price+"</p></td><td class='qty adjustable'><p>"+thisProd.qty+"</p></td><td class='ext-price adjustable'><p>"+thisProd.price+"</p></td></tr></table></div>");
				}
					noProd();

					if (thisProd.type == "config") {
					
						$('.table-row-div[data-id='+productDataId+']').after("<div class='click-details'><div class='bordered clearfix'><table></table></div><div class='click-table-section'><table class='external-table-titles'><tr><td class='menu-icon new-menu-1'></td><td class='sec'>Section</td><td class='prod'>Product Name<i class='fa fa-arrow-down inline-icon'></i></td><td class='prodId'>Product ID</td><td class='billFreq'>Billing Frequency</td><td class='listPrice'>List Price</td><td class='adj'>Adjustment (%)</td><td class='unitPrice'>Unit Price</td><td class='qty'>Qty</td><td class='extPrice'>Ext. Price</td></tr></table><table class='external-table-data'><tr class='external-table-row'><td class='menu-icon new-menu-1'><i class='fa fa-bars'></i></td><td class='sec'>"+thisProd.section+"</td><td class='prod'><p>"+thisProd.name+"</p></td><td class='prodId'>900475</td><td class='billFreq'><p>"+thisProd.billing+"</p></td><td class='listPrice adjustable'><p>"+thisProd.price+"</p></td><td class='adj adjustable'><p>0.00%</p></td><td class='unitPrice adjustable'><p>"+thisProd.price+"</p></td><td class='qty adjustable'><p>1</p></td><td class='extPrice adjustable'><p>"+thisProd.price+"</p></td></tr></table></div></div>");
						$('.click-details').hide();
					}

					if (thisProd.type == "bundle") {
					
						$('.table-row-div[data-id='+productDataId+']').after("<div class='click-details'><div class='click-table-section'><table class='external-table-titles'><tr><td class='menu-icon new-menu-1'></td><td class='sec'>Section</td><td class='prod'>Product Name<i class='fa fa-arrow-down inline-icon'></i></td><td class='prodId'>Product ID</td><td class='billFreq'>Billing Frequency</td><td class='listPrice'>List Price</td><td class='adj'>Adjustment (%)</td><td class='unitPrice'>Unit Price</td><td class='qty'>Qty</td><td class='extPrice'>Ext. Price</td></tr></table><table class='external-table-data'><tr class='external-table-row'><td class='menu-icon new-menu-1'><i class='fa fa-bars'></i><td class='sec'>System Options</td></td><td class='prod'><p>4GB SDRAM, 1333 MT/s, Standard Volt, Single Rank, x4 Data Width</p></td><td class='prodId'>900475</td><td class='billFreq'><p>One Time</p></td><td class='listPrice adjustable'><p>$14.30</p></td><td class='adj adjustable'><p>0.00%</p></td><td class='unitPrice adjustable'><p>$14.30</p></td><td class='qty adjustable'><p>1</p></td><td class='extPrice adjustable'><p>$14.30</p></td></tr><tr class='external-table-row'><td class='menu-icon new-menu-1'><i class='fa fa-bars'></i></td><td class='sec'>System Options</td><td class='prod'><p>400 GB Solid State Drive 5400RPM 64MB SATA 6/GBS</p></td><td class='prodId'>900475</td><td class='billFreq'><p>One Time</p></td><td class='listPrice adjustable'><p>$700.00</p></td><td class='adj adjustable'><p>0.00%</p></td><td class='unitPrice adjustable'><p>$700.00</p></td><td class='qty adjustable'><p>1</p></td><td class='extPrice adjustable'><p>$700.00</p></td></tr></table></div>");

						$('.click-details').hide();
					}
				
					sessionStorage.setItem('tableProducts', JSON.stringify(tableProducts));
					showErrors();
				}
		});
		// sessionStorage.setItem('tableProducts', JSON.stringify(data));
	},

	viewFollowOns: function () {
		$('.table-main-body').on('click', ".table-row-div table .table-row td", function () {
			
		});

	},

	selectProductToConfig: function () {
		//config button in click-details
		$('body').on("click", '.config-icon i', function () {
			var configProdPos = $(this).closest('.table-row-div')
								    .data('id');
			var tableProducts = JSON.parse(sessionStorage.getItem('tableProducts'));
			var configProd = tableProducts[configProdPos];
			sessionStorage.setItem('configProd', JSON.stringify(configProd));

	 		window.location.href = 'config.html';
		});
	},

	submitFollowOn: function () {
		
		$('.back-btn, .update-quote').on("click", function () {
				
				var configProd = JSON.parse(sessionStorage.getItem('configProd'));
				var configgedProd = configProd._id;
				var tableProducts = JSON.parse(sessionStorage.getItem('tableProducts'));
				var productList = JSON.parse(sessionStorage.getItem('data'));
				var items = $('.product-tag').filter( function () { 
						return $(this).children('.check-icon').is(":visible");
					});
				var configId = configProd._id;


				for (var i = items.length - 1; i >= 0; i--) {
					var number = $(items[i]).data("id");
					var qty = $(items[i]).find('.input').val();
					
					configProd["addon"+i] = productList.products[number-1];
					configProd["addon"+i].qty = qty;
				};

				var errors = $('.section-item-alert').length;

				if (errors >= 1) {
					configProd.errors = true;

					var $popover = $('.todo-update-popover'),
					$button = $('.update-quote');
					
					//show popover on cick on icon
							//hide if visible
							if ($popover.is(":visible")) {
								$popover.stop().hide();
							}
							else{		
								$('.popover-small-right, .popover-small-left, .popover-large-left, .popover-large-right').hide();
							    $popover.stop().fadeIn(300).show( 0, function () {
										//hide popovers when mouse clicks
										$('body').on("click",  function (event) {
											if ( $(event.target).parents('.todo-update-popover').length ) {
											}
											else if ($(event.target).hasClass('todo-update-popover')){
											}
											else {
												$popover.hide();
											}
										});
							    });	
							}			

					$('.todo-update-popover i').on("click", function () {
						$popover.stop().hide();
					});

					$('.todo-update-popover .btn-primary').on("click", function () {
						$popover.stop().hide();

						tableProducts[configId] = configProd;
						sessionStorage.setItem('tableProducts', JSON.stringify(tableProducts));
						sessionStorage.setItem('configgedProd', JSON.stringify(configgedProd));
						sessionStorage.removeItem('configProd');

						parent.history.back();
					});

					$('.todo-update-popover i').on("click", function () {
						$popover.stop().hide();
					});
			
					

				}
				else{
					configProd.errors = false;
			
					tableProducts[configId] = configProd;
					sessionStorage.setItem('tableProducts', JSON.stringify(tableProducts));
					sessionStorage.setItem('configgedProd', JSON.stringify(configgedProd));
					sessionStorage.removeItem('configProd');

					parent.history.back();
				}

			
		});

	},


	configSummary: function () {

		$('.config-summary-btn').on("click", function () {
			
			$('.prices-div table').empty();

			var configProd = JSON.parse(sessionStorage.getItem('configProd'));
			
			var configgedProd = configProd._id;
			var tableProducts = JSON.parse(sessionStorage.getItem('tableProducts'));
			var productList = JSON.parse(sessionStorage.getItem('data'));
			var totalPrice = 0;
			var totalAnnual = 0;
			var items = $('.product-tag').filter( function () { 
					return $(this).children('.check-icon').is(":visible");
				});
			var configId = configProd._id;

			for (var i = items.length - 1; i >= 0; i--) {
			
				var qty = $(items[i]).find('.input').val();
				var number = $(items[i]).data("id");

				configProd["addon"+i] = productList.products[number-1];
				configProd["addon"+i].qty = qty;
			};

			for (key in configProd) {
			
				if( typeof configProd[key] == "object") {
				
					var prodForList = configProd[key];
					var price = prodForList.price.replace('$', '').replace(",","");
					console.log(price);
					var name = prodForList.name;
					var qty = prodForList.qty;
					var billing = prodForList.billing;


					
					if (price.indexOf("/yr") == 5) {
			
						annualPrice = parseFloat(price.replace('/yr', ''))
						totalAnnual += annualPrice*qty;
			
					}
			
					price = parseFloat(price)*qty;

					$('.prices-div table').append("<tr><td>"+name+"</td><td>"+qty+"</td><td>"+billing+"</td><td>$"+commaSeparateNumber(price)+"</td></tr>");


					totalPrice += price;
				}
			}
			$('.total-price').text("$"+commaSeparateNumber(totalPrice));
			$('.total-recurring').text("$"+commaSeparateNumber(totalAnnual));

		});

	},


	quoteSummary: function () {
		$('.quote-summary-btn').on("click", function () {
			$('.prices-div table').empty();
			var tableProducts = JSON.parse(sessionStorage.getItem('tableProducts'));
			var $table = $('.prices-div table');
			var totalPrice = 0;
			var totalAnnual = 0;

			for (key in tableProducts) {

				var products = tableProducts[key];
				console.log(products);	

				if(products.billing == "Yearly") {
					price = products.price;
					price = price.replace("$", "");
					price = parseFloat(price.replace('/yr', ''));
					products.price = "$"+price;
					totalAnnual += price*products.qty;
				}

				price = products.price;
				price = price.replace("$", "").replace(",","");
				price = parseInt(price);
				price = price * products.qty;
				console.log(price);
				totalPrice += price;
				price = commaSeparateNumber(price);
				


				$table.append("<tr><td>"+products.name+"</td><td>"+products.qty+"</td><td>"+products.billing+"</td><td>$"+price+"</td></tr>");
				
				for (subkey in products) {
					if( typeof products[subkey] == "object") {
						var addon = products[subkey];	

						if(addon.billing == "Yearly") {
							price = addon.price;
							price = price.replace("$", "");
							price = parseFloat(price.replace('/yr', ''));
							addon.price = "$"+price;
							totalAnnual += price*addon.qty;
						}

						price = addon.price;
						price = price.replace("$", "").replace(",","");
						price = parseInt(price);
						price = price * addon.qty;
						console.log(price);
						totalPrice += price;
						price = commaSeparateNumber(price);
						

						$table.append("<tr><td>"+addon.name+"</td><td>"+addon.qty+"</td><td>"+addon.billing+"</td><td>$"+price+"</td></tr>");
					}
				}	
			}

			$('.total-price').text("$"+commaSeparateNumber(totalPrice));
			$('.total-recurring').text("$"+commaSeparateNumber(totalAnnual));
		});
	},

	toDoRedirect: function () {
		$('body').on("click", '.todo-popover .discrepancies a', function () {
			var configProdPos = $(this).closest('p')
								    .data('id');
			var tableProducts = JSON.parse(sessionStorage.getItem('tableProducts'));
			var configProd = tableProducts[configProdPos];

			sessionStorage.setItem('configProd', JSON.stringify(configProd));

	 		window.location.href = 'config.html';
		});
	}

};


dynamicQuotes.loadProducts();
dynamicQuotes.addProductToQuote();
dynamicQuotes.selectProductToConfig();
dynamicQuotes.submitFollowOn();
dynamicQuotes.configSummary();
dynamicQuotes.quoteSummary();
dynamicQuotes.toDoRedirect();

});































