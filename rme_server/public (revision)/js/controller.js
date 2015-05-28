var tableMethods = {


	loadContracts: function () {
		var contracts = JSON.parse(sessionStorage.getItem('contracts'));

		if (! contracts) {
			$.getJSON('../js/contracts.json', function (data) {
				sessionStorage.setItem('contracts', JSON.stringify( data ));
			}).done(function () {
			var contracts = JSON.parse(sessionStorage.getItem('contracts'));
			for (var i = contracts.length - 1; i >= 0; i--) {
			$('.contractTable table').append("<tr><td class='check'><input class='checkOne' type='checkbox'></td><td class='id'>"+contracts[i].contractId+"</td><td>"+contracts[i].contractName+"</td><td>"+contracts[i].organization+"</td><td>"+contracts[i].customerName+"</td><td>"+contracts[i].customerId+"</td><td>"+contracts[i].customerCot+"</td><td>"+contracts[i].currency+"</td><td>"+contracts[i]["domain"]+"</td></tr>")
			};
			});
		}
		else {
			for (var i = contracts.length - 1; i >= 0; i--) {
				$('.contractTable table').append("<tr><td class='check'><input class='checkOne' type='checkbox'></td><td class='id'>"+contracts[i].contractId+"</td><td>"+contracts[i].contractName+"</td><td>"+contracts[i].organization+"</td><td>"+contracts[i].customerName+"</td><td>"+contracts[i].customerId+"</td><td>"+contracts[i].customerCot+"</td><td>"+contracts[i].currency+"</td><td>"+contracts[i]["domain"]+"</td></tr>")
			};
		}
	},
	
	loadCustomers: function () {
		var customers = JSON.parse(sessionStorage.getItem('customers'));

		if (! customers) {
			$.getJSON('../js/customers.json', function (data) {
				sessionStorage.setItem('customers', JSON.stringify( data ));
			}).done(function () {
				var customers = JSON.parse(sessionStorage.getItem('customers'));
				for (var i = customers.length - 1; i >= 0; i--) {
				$('.customerTable table').append("<tr><td class='check'><input class='checkOne' type='checkbox'></td><td class='id'>"+customers[i].name+"</td><td>"+customers[i].id+"</td><td>"+customers[i].type+"</td><td>"+customers[i].status+"</td><td>"+customers[i].contracts+"</td><td>"+customers[i].class+"</td><td>"+customers[i].city+"</td><td>"+customers[i].state+"</td><td>"+customers[i].zip+"</td><td>"+customers[i].country+"</td></tr>")
				};
			});
		}
		else {
			for (var i = customers.length - 1; i >= 0; i--) {
			$('.customerTable table').append("<tr><td class='check'><input class='checkOne' type='checkbox'></td><td class='id'>"+customers[i].name+"</td><td>"+customers[i].id+"</td><td>"+customers[i].type+"</td><td>"+customers[i].status+"</td><td>"+customers[i].contracts+"</td><td>"+customers[i].class+"</td><td>"+customers[i].city+"</td><td>"+customers[i].state+"</td><td>"+customers[i].zip+"</td><td>"+customers[i].country+"</td></tr>")
			};
		}
	},

	loadMassUpdates: function () {
		var massUpdates = JSON.parse(sessionStorage.getItem('massUpdates'));

		if (! massUpdates) {
			sessionStorage.setItem('thisMassUpdate', JSON.stringify( 0 ));
			$.getJSON('../js/medicaid-mass-updates.json', function (data) {
				sessionStorage.setItem('massUpdates', JSON.stringify( data ));
			}).done(function () {
				var massUpdates = JSON.parse(sessionStorage.getItem('massUpdates'));
				for (var i = massUpdates.length - 1; i >= 0; i--) {
				$('.massUpdateTable table').append("<tr><td class='id massUpdateId'>"+massUpdates[i].id+"</td><td>"+massUpdates[i].name+"</td><td>"+massUpdates[i].status+"</td><td>"+massUpdates[i].originator+"</td><td>"+massUpdates[i].edited+"</td><td>"+massUpdates[i].implemented+"</td></tr>")
				};
			});
		}
		else {
			for (var i = massUpdates.length - 1; i >= 0; i--) {
			$('.massUpdateTable table').append("<tr><td class='id massUpdateId'>"+massUpdates[i].id+"</td><td>"+massUpdates[i].name+"</td><td>"+massUpdates[i].status+"</td><td>"+massUpdates[i].originator+"</td><td>"+massUpdates[i].edited+"</td><td>"+massUpdates[i].implemented+"</td></tr>")
			};
		}
	},

	loadPrograms: function () {
		var programs = JSON.parse(sessionStorage.getItem('programs'));

		if (! programs) {
			sessionStorage.setItem('selectedPrograms', JSON.stringify( 0 ));
			$.getJSON('../js/medicaid-programs.json', function (data) {
				sessionStorage.setItem('programs', JSON.stringify( data ));
			}).done(function () {
				var programs = JSON.parse(sessionStorage.getItem('programs'));
				for (var i = programs.length - 1; i >= 0; i--) {
					if(i == 78){
						$('.overviewTable table').append("<tr class='disabledProgram'><td data-id='"+programs[i].id+"' class='check'></td><td>"+programs[i].name+"</td><td>"+programs[i].start+"</td><td>"+programs[i].end+"</td></tr>")
					}else{
						$('.overviewTable table').append("<tr><td data-id='"+programs[i].id+"' class='check'><input class='checkOne' type='checkbox'></td><td>"+programs[i].name+"</td><td>"+programs[i].start+"</td><td>"+programs[i].end+"</td></tr>")
					}
					switch (programs[i].type) {
						case "Medicaid":
							$('.medicaidTable table').append("<tr><td data-id='"+programs[i].id+"' class='check'><input class='checkOne' type='checkbox'></td><td>"+programs[i].name+"</td><td>"+programs[i].start+"</td><td>"+programs[i].end+"</td></tr>")
						break;
						case "SPAP":
							$('.spapTable table').append("<tr><td data-id='"+programs[i].id+"' class='check'><input class='checkOne' type='checkbox'></td><td>"+programs[i].name+"</td><td>"+programs[i].start+"</td><td>"+programs[i].end+"</td></tr>")
						break;
						case "ADAP":
							$('.adapTable table').append("<tr><td data-id='"+programs[i].id+"' class='check'><input class='checkOne' type='checkbox'></td><td>"+programs[i].name+"</td><td>"+programs[i].start+"</td><td>"+programs[i].end+"</td></tr>")
						break;
						case "State Supplemental":
							$('.suppTable table').append("<tr><td data-id='"+programs[i].id+"' class='check'><input class='checkOne' type='checkbox'></td><td>"+programs[i].name+"</td><td>"+programs[i].start+"</td><td>"+programs[i].end+"</td></tr>")
						break;
					}

				};
			});
		}
		else {
			for (var i = programs.length - 1; i >= 0; i--) {
				if(i == 78){
					$('.overviewTable table').append("<tr class='disabledProgram'><td data-id='"+programs[i].id+"' class='check'></td><td>"+programs[i].name+"</td><td>"+programs[i].start+"</td><td>"+programs[i].end+"</td></tr>")
				}else{
					$('.overviewTable table').append("<tr><td data-id='"+programs[i].id+"' class='check'><input class='checkOne' type='checkbox'></td><td>"+programs[i].name+"</td><td>"+programs[i].start+"</td><td>"+programs[i].end+"</td></tr>")
				
				switch (programs[i].type) {
					case "Medicaid":
						console.log(programs[i].type)
						$('.medicaidTable table').append("<tr><td data-id='"+programs[i].id+"' class='check'><input class='checkOne' type='checkbox'></td><td>"+programs[i].name+"</td><td>"+programs[i].start+"</td><td>"+programs[i].end+"</td></tr>")
					break;
					case "SPAP":
						$('.spapTable table').append("<tr><td data-id='"+programs[i].id+"' class='check'><input class='checkOne' type='checkbox'></td><td>"+programs[i].name+"</td><td>"+programs[i].start+"</td><td>"+programs[i].end+"</td></tr>")
					break;
					case "ADAP":
						$('.adapTable table').append("<tr><td data-id='"+programs[i].id+"' class='check'><input class='checkOne' type='checkbox'></td><td>"+programs[i].name+"</td><td>"+programs[i].start+"</td><td>"+programs[i].end+"</td></tr>")
					break;
					case "State Supplemental":
						$('.suppTable table').append("<tr><td data-id='"+programs[i].id+"' class='check'><input class='checkOne' type='checkbox'></td><td>"+programs[i].name+"</td><td>"+programs[i].start+"</td><td>"+programs[i].end+"</td></tr>")
					break;
				}
				}

			};
		}
	},
	
	loadProducts: function () {
		var products = JSON.parse(sessionStorage.getItem('products'));

		if (! products) {
			$.getJSON('../js/medicaid-products.json', function (data) {
				sessionStorage.setItem('products', JSON.stringify( data ));
			}).done(function () {
				var products = JSON.parse(sessionStorage.getItem('products'));
				for (var i = products.length - 1; i >= 0; i--) {
				$('.productTable table').append("<tr><td class='check'><input class='checkOne' type='checkbox'></td><td class='id'>"+products[i].ndc+"</td><td>"+products[i].desc+"</td><td>"+products[i].end+"</td><td>"+products[i].lotExp+"</td><td>"+products[i].cat+"</td></tr>")
				};
			});	
		}
		else {
			for (var i = products.length - 1; i >= 0; i--) {
			$('.productTable table').append("<tr><td class='check'><input class='checkOne' type='checkbox'></td><td class='id'>"+products[i].ndc+"</td><td>"+products[i].desc+"</td><td>"+products[i].end+"</td><td>"+products[i].lotExp+"</td><td>"+products[i].cat+"</td></tr>")
			};
		}
	},
	loadProductsToAdd: function () {
		var products = JSON.parse(sessionStorage.getItem('products'));

		if (! products) {
			$.getJSON('../js/medicaid-products.json', function (data) {
				sessionStorage.setItem('products', JSON.stringify( data ));
			}).done(function () {
				var products = JSON.parse(sessionStorage.getItem('products'));
				for (var i = products.length - 1; i >= 0; i--) {
				$('.productsToAddTable table').append("<tr><td class='check'><input class='checkOne' type='checkbox'></td><td class='id'>"+products[i].ndc+"</td><td>"+products[i].desc+"</td><td>"+products[i].description+"</td></tr>")
				};
			});	
		}
		else {
			for (var i = products.length - 1; i >= 0; i--) {
			$('.productsToAddTable table').append("<tr><td class='check'><input class='checkOne' type='checkbox'></td><td class='id'>"+products[i].ndc+"</td><td>"+products[i].desc+"</td><td>"+products[i].description+"</td></tr>")
			};
		}
	},

	loadViewResults: function () {
		var thisMassUpdate = JSON.parse(sessionStorage.getItem('thisMassUpdate'));

		if(thisMassUpdate !== 0){
			console.log(typeof thisMassUpdate.products)
			for (var i = thisMassUpdate.programs.length - 1; i >= 0; i--) {
				if(i % 2 == 1){
					$('.viewResultsTable table').append("<tr><td>"+thisMassUpdate.programs[i].shortName+"</td><td>"+thisMassUpdate.programs[i].name+"</td><td>Implemented</td><td>Success</td><td></td></tr>")
				}
				else if(i % 3 == 1){
					$('.viewResultsTable table').append("<tr><td>"+thisMassUpdate.programs[i].shortName+"</td><td>"+thisMassUpdate.programs[i].name+"</td><td>Implemented</td><td>Warning</td><td></td></tr>")
				}
				else if(i % 5 == 1){
					$('.viewResultsTable table').append("<tr><td>"+thisMassUpdate.programs[i].shortName+"</td><td>"+thisMassUpdate.programs[i].name+"</td><td>Not Implemented</td><td>Error</td><td></td></tr>")
				}
				else{
					$('.viewResultsTable table').append("<tr><td>"+thisMassUpdate.programs[i].shortName+"</td><td>"+thisMassUpdate.programs[i].name+"</td><td>Implemented</td><td>Success</td><td></td></tr>")
				}
			};
		}
	}

};
