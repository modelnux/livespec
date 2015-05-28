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


var clickDetails = function () {

$('.click-details').hide();

$('body').on("click", '.table-row-div', function () {

	if ($(this).next('.click-details').is(":visible")) {
		$(this)
		.next('.click-details').slideUp(350, "easeInBack", function () {
			$(this).prev('.table-row-div').removeClass("active");
		});
		
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


showErrors = function () {

	var notConfigged = $('div.config').filter(function () { return $(this).next('.click-details').find('.external-table-row').length == 0; });

	console.log(notConfigged);

	if (notConfigged.length) {
	$('.alert-div').css({"display":"inline-block"});
	$('.alert-div').children('p').text(notConfigged.length+" error(s)");

	}else{
	$('.alert-div').css({"display":"none"});
	}


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

					resultTable.append("<tr data-id='"+product.products[i]._id+"'class='product-result "+product.products[i].type+"'><td><p>"+product.products[i].name+"</p></td><td><p>"+product.products[i].id+"</p></td><td><p>"+product.products[i].price+"</p></td><td><input placeholder='1' class='input-sm' type='number'></td><td><i class='fa fa-plus-circle'></i></td></tr>");
				};
			});

		var tableProducts = JSON.parse(sessionStorage.getItem('tableProducts'));
		var configgedProd = sessionStorage.getItem('configgedProd');


		for (key in tableProducts) {
			var prod = tableProducts[key];
				if (prod != null) {
				
				$('.table-main-body').append("<div data-id='"+prod._id+"' class='table-row-div "+prod.type+" inactive'><table><tr class='table-row clearfix'><td class='menu-icon'><i class='"+prod.type+"-menu fa fa-bars'></i></td><td class='pos'>"+prod.pos+".</td><td class='prod-type type-indicator'>"+prod.type+"</td><td class='prod-name'><p>"+prod.name+"</p></td><td class='bill-freq'><p>One Time</p></td><td class='list-price adjustable'><p>"+prod.price+"</p></td><td class='adj adjustable'><p>-10.00%</p></td><td class='unit-price adjustable'><p>"+prod.price+"</p></td><td class='qty adjustable'><p>"+prod.qty+"</p></td><td class='ext-price adjustable'><p>"+prod.price+"</p></td><td class='del'><i class='fa fa-times-circle'></i></td></tr></table></div>");
				
					if (prod.type == "config") {
					
						$('.table-row-div[data-id='+prod._id+']').after("<div class='click-details'><div class='bordered clearfix'><table class='pull-left'><tr class='click-table-titles'><td>&nbsp;</td><td>List Price</td><td>Adjustment</td><td>Extended Price</td></tr><tr class='click-table-data'><td>One-time Total</td><td>$3,216.30</td><td>$0.00 (0.00%)</td><td>$3,216.30</td></tr><tr class='click-table-data'><td>Yearly Total</td><td>$19.99/yr</td><td>$0.00 (0.00%)</td><td>$19.99/yr</td></tr></table><button class='config-btn btn-go btn pull-left'>Configure</button></div></div>");
					
					}

					if (prod.type == "bundle") {
					
						$('.table-row-div[data-id='+prod._id+']').after("<div class='click-details'><div class='bordered clearfix'><table class='pull-left'><tr class='click-table-titles'><td>&nbsp;</td><td>List Price</td><td>Adjustment</td><td>Extended Price</td></tr><tr class='click-table-data'><td>One-time Total</td><td>$332.50</td><td>-$45.90 (8.00%)</td><td>$1,290.00</td></tr><tr class='click-table-data'><td>Yearly Total</td><td>$19.99/yr</td><td>$0.00 (0.00%)</td><td>$19.99/yr</td></tr></table></div><div class='click-table-section'><table class='external-table-titles'><tr><td class='prod'>Product Name<i class='fa fa-arrow-down inline-icon'></i></td><td class='prodId'>Product ID</td><td class='sec'>Section</td><td class='billFreq'>Billing Frequency</td><td class='listPrice'>List Price</td><td class='adj'>Adjustment (%)</td><td class='unitPrice'>Unit Price</td><td class='qty'>Qty</td><td class='extPrice'>Ext. Price</td></tr></table><table class='external-table-data'><tr class='external-table-row'><td class='prod'><p>4GB SDRAM, 1333 MT/s, Standard Volt, Single Rank, x4 Data Width</p></td><td class='prodId'>900475</td><td class='sec'>System Options</td><td class='billFreq adjustable'><p>One Time</p></td><td class='listPrice adjustable'><p>$14.30</p></td><td class='adj adjustable'><p>0.00%</p></td><td class='unitPrice adjustable'><p>$14.30</p></td><td class='qty adjustable'><p>1</p></td><td class='extPrice adjustable'><p>$14.30</p></td></tr><tr class='external-table-row'><td class='prod'><p>400 GB Solid State Drive 5400RPM 64MB SATA 6/GBS</p></td><td class='prodId'>900475</td><td class='sec'>System Options</td><td class='billFreq adjustable'><p>One Time</p></td><td class='listPrice adjustable'><p>$700.00</p></td><td class='adj adjustable'><p>0.00%</p></td><td class='unitPrice adjustable'><p>$700.00</p></td><td class='qty adjustable'><p>1</p></td><td class='extPrice adjustable'><p>$700.00</p></td></tr></table></div>");
					
					}

				}

				if (prod.addon0) {	
					$('.table-row-div[data-id='+prod._id+']').next('.click-details').append("<div class='click-table-section'><table class='external-table-titles'><tr><td class='prod'>Product Name<i class='fa fa-arrow-down inline-icon'></i></td><td class='prodId'>Product ID</td><td class='sec'>Section</td><td class='billFreq'>Billing Frequency</td><td class='listPrice'>List Price</td><td class='adj'>Adjustment (%)</td><td class='unitPrice'>Unit Price</td><td class='qty'>Qty</td><td class='extPrice'>Ext. Price</td></tr></table><table class='external-table-data'></table></div>");

					}
					
					for (var i = Object.keys(prod).length - 1; i >= 0; i--) {
							var addOn = prod["addon"+i];
							
							if (addOn) {

							$('.table-row-div[data-id='+prod._id+']').next('.click-details').find('.external-table-data').append("<tr class='external-table-row'><td class='prod'><p>"+addOn.name+"</p></td><td class='prodId'>900475</td><td class='sec'>System Options</td><td class='billFreq adjustable'><p>One Time</p></td><td class='listPrice adjustable'><p>"+addOn.price+"</p></td><td class='adj adjustable'><p>0.00%</p></td><td class='unitPrice adjustable'><p>"+addOn.price+"</p></td><td class='qty adjustable'><p>1</p></td><td class='extPrice adjustable'><p>"+addOn.price+"</p></td></tr>");
							}
					 }; 
				

		};
		clickDetails();
		openConfigged(configgedProd);
		noProd(); 
		showErrors();
		
		if ( window.location.href.match('config.html') ) {

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
				  .append("<div data-id='"+_id+"' class='product-tag'><div class='product-desc'><p class='product-name'>"+name+"</p><p class='prod-id'>ID: "+id+"</p><p class='prod-price'>List Price: <b>"+price+"</b></p></div></div>");

			};
		}

		

	},

	//add product to basket if selected in quote page
	addProductToQuote: function () {
		var tableProducts = JSON.parse(sessionStorage.getItem('tableProducts')) || {};
		$('body').on("click", ".product-result td:last-child", function () {
			productDataId = $(this).parent('tr').data('id')-1;
			var productCatalog = JSON.parse(sessionStorage.getItem('data'));
			var pos = $('.table-main-body').children('.table-row-div').length + 1;
			var thisProd = productCatalog.products[productDataId];

			tableProducts[productDataId] = {
				_id: productDataId,
				id: thisProd.id,
				name: thisProd.name,
				price: thisProd.price,
				qty: thisProd.qty,
				section: thisProd.section,
				type: thisProd.type,
				pos: pos

			};

			
			
			$('.table-main-body').append("<div data-id='"+productDataId+"' class='table-row-div "+thisProd.type+" inactive'><table><tr class='table-row clearfix'><td class='menu-icon new-menu-1'><i class='fa fa-bars'></i></td><td class='pos'>"+pos+".</td><td class='prod-type type-indicator'>"+thisProd.type+"</td><td class='prod-name'><p>"+thisProd.name+"</p></td><td class='bill-freq'><p>One Time</p></td><td class='list-price adjustable'><p>"+thisProd.price+"</p></td><td class='adj adjustable'><p>-10.00%</p></td><td class='unit-price adjustable'><p>"+thisProd.price+"</p></td><td class='qty adjustable'><p>"+thisProd.qty+"</p></td><td class='ext-price adjustable'><p>"+thisProd.price+"</p></td><td class='del'><i class='fa fa-times-circle'></i></td></tr></table></div>");

				noProd();

				if (thisProd.type == "config") {
				
					$('.table-row-div[data-id='+productDataId+']').after("<div class='click-details'><div class='bordered clearfix'><table class='pull-left'><tr class='click-table-titles'><td>&nbsp;</td><td>List Price</td><td>Adjustment</td><td>Extended Price</td></tr><tr class='click-table-data'><td>One-time Total</td><td>$3,216.30</td><td>$0.00 (0.00%)</td><td>$3,216.30</td></tr><tr class='click-table-data'><td>Yearly Total</td><td>$19.99/yr</td><td>$0.00 (0.00%)</td><td>$19.99/yr</td></tr></table><button class='config-btn btn-go btn pull-left'>Configure</button></div></div>");
					$('.click-details').hide();
				}

				if (thisProd.type == "bundle") {
				
					$('.table-row-div[data-id='+productDataId+']').after("<div class='click-details'><div class='bordered clearfix'><table class='pull-left'><tr class='click-table-titles'><td>&nbsp;</td><td>List Price</td><td>Adjustment</td><td>Extended Price</td></tr><tr class='click-table-data'><td>One-time Total</td><td>$332.50</td><td>-$45.90 (8.00%)</td><td>$1,290.00</td></tr><tr class='click-table-data'><td>Yearly Total</td><td>$19.99/yr</td><td>$0.00 (0.00%)</td><td>$19.99/yr</td></tr></table></div><div class='click-table-section'><table class='external-table-titles'><tr><td class='prod'>Product Name<i class='fa fa-arrow-down inline-icon'></i></td><td class='prodId'>Product ID</td><td class='sec'>Section</td><td class='billFreq'>Billing Frequency</td><td class='listPrice'>List Price</td><td class='adj'>Adjustment (%)</td><td class='unitPrice'>Unit Price</td><td class='qty'>Qty</td><td class='extPrice'>Ext. Price</td></tr></table><table class='external-table-data'><tr class='external-table-row'><td class='prod'><p>4GB SDRAM, 1333 MT/s, Standard Volt, Single Rank, x4 Data Width</p></td><td class='prodId'>900475</td><td class='sec'>System Options</td><td class='billFreq adjustable'><p>One Time</p></td><td class='listPrice adjustable'><p>$14.30</p></td><td class='adj adjustable'><p>0.00%</p></td><td class='unitPrice adjustable'><p>$14.30</p></td><td class='qty adjustable'><p>1</p></td><td class='extPrice adjustable'><p>$14.30</p></td></tr><tr class='external-table-row'><td class='prod'><p>400 GB Solid State Drive 5400RPM 64MB SATA 6/GBS</p></td><td class='prodId'>900475</td><td class='sec'>System Options</td><td class='billFreq adjustable'><p>One Time</p></td><td class='listPrice adjustable'><p>$700.00</p></td><td class='adj adjustable'><p>0.00%</p></td><td class='unitPrice adjustable'><p>$700.00</p></td><td class='qty adjustable'><p>1</p></td><td class='extPrice adjustable'><p>$700.00</p></td></tr></table></div>");
					$('.click-details').hide();
				}
			
				sessionStorage.setItem('tableProducts', JSON.stringify(tableProducts));
				showErrors();

		});
		// sessionStorage.setItem('tableProducts', JSON.stringify(data));
	},

	//removce products from quoteline
	removeProduct: function () {
		$('.table-main-body').on('click', ".table-row-div table .table-row td.del i", function () {
			var tableProducts = JSON.parse(sessionStorage.getItem('tableProducts'));
			var productDataId = $(this).closest('.table-row-div').data('id');
			var trd = $(".table-row-div[data-id="+productDataId+"]");
			trd.next('.click-details').slideUp(450, "easeOutBounce", function () {
				$(this).remove();
			});
			trd.slideUp(450, "easeOutBounce", function () {
				$(this).remove().queue(function(){
					noProd();
					showErrors();
				});
			});

			delete tableProducts[productDataId];

			sessionStorage.setItem('tableProducts', JSON.stringify(tableProducts));


		});
	},

	viewFollowOns: function () {
		$('.table-main-body').on('click', ".table-row-div table .table-row td", function () {
			
		});

	},

	selectProductToConfig: function () {
		//config button in click-details
		$('body').on("click", '.config-btn', function () {
			var configProdPos = $(this).closest('.click-details')
								    .prev('.table-row-div')
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

				configProd["addon"+i] = productList.products[number-1];

			};

			tableProducts[configId] = configProd;
			sessionStorage.setItem('tableProducts', JSON.stringify(tableProducts));
			sessionStorage.setItem('configgedProd', JSON.stringify(configgedProd));
			sessionStorage.removeItem('configProd');

			parent.history.back();
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
				var number = $(items[i]).data("id");

				configProd["addon"+i] = productList.products[number-1];
			};

			for (key in configProd) {
				if( typeof configProd[key] == "object") {
					var prodForList = configProd[key];
					var price = prodForList.price.replace('$', '');
					var name = prodForList.name;
					var qty = prodForList.id;
					

					
					if (price.indexOf("/yr") == 5) {
						annualPrice = parseFloat(price.replace('/yr', ''))
						totalAnnual += annualPrice;
						console.log(annualPrice);
					}
					price = parseFloat(price);

					$('.prices-div table').append("<tr><td>"+name+"</td><td>"+qty+"</td><td>$"+price+"</td></tr>");


					totalPrice += price;
				}
			}
			console.log(totalPrice);
			console.log(totalAnnual);
			$('.total-price').text("$"+totalPrice);
			$('.total-recurring').text("$"+totalAnnual);

		});

	},


	quoteSummary: function () {
		$('.quote-summary-btn').on("click", function () {
			$('.prices-div table').empty();
			var tableProducts = JSON.parse(sessionStorage.getItem('tableProducts'));
			var $table = $('.prices-div table');

			for (key in tableProducts) {
				
				var products = tableProducts[key];
				$table.append("<tr><td>"+products.name+"</td><td>"+products.qty+"</td><td>$"+products.price+"</td></tr>");
				
				for (subkey in products) {
					if( typeof products[subkey] == "object") {
						var addon = products[subkey];			
						$table.append("<tr><td>"+addon.name+"</td><td>"+addon.qty+"</td><td>$"+addon.price+"</td></tr>");
					}
				}	
			}
		});
	},


	productSummary = function () {
		
	}

};


dynamicQuotes.loadProducts();
dynamicQuotes.addProductToQuote();
dynamicQuotes.removeProduct();
dynamicQuotes.selectProductToConfig();
dynamicQuotes.submitFollowOn();
dynamicQuotes.configSummary();
dynamicQuotes.quoteSummary();


});































