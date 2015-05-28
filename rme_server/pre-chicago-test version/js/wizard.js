var MassUpdateFunctions = {

	formFunctions: {
		slider: function () {
		    $( "#slider-range" ).slider({
				range: true,
				min: 2000,
				max: 2050,
				values: [ 2010, 2020 ],
				slide: function( event, ui ) {
				$( "#amount" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
				}
		    });
		    	$( "#amount" ).val( "" + $( "#slider-range" ).slider( "values", 0 ) +
		      " - " + $( "#slider-range" ).slider( "values", 1 ) );

		},

		filterSlider: function () {
		    $( "#slider-range2" ).slider({
				range: true,
				min: 2000,
				max: 2050,
				values: [ 2010, 2020 ],
				slide: function( event, ui ) {
				$( "#amount2" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
				}
		    });
		    	$( "#amount2" ).val( "" + $( "#slider-range2" ).slider( "values", 0 ) +
		      " - " + $( "#slider-range2" ).slider( "values", 1 ) );
		 
		},

		stateSelect: function () {
			var states = ['AK','AL','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];

			$('.stateList').hide();
			$('.stateSelect').off("focus");
			$('.stateSelect').on("focus", function (e){
				$('.stateList').slideDown("fast");

				if($('.stateList').children('.stateItem').length == 0){
					$('.stateList').append("<div class='stateItem'><i class='fa fa-square-o'></i>All</div>")
					for (var i = 0; i <= states.length - 1; i++) {
						$('.stateList').append("<div class='stateItem'><i class='fa fa-square-o'></i>"+states[i]+"</div>")
					};			
				}

				
				$('.stateItem i').off("click");
				$('.stateItem i').click(function () {
					$(this).addClass("fa-check-square-o").removeClass('fa-square-o');
					var stateSelected = $(this).closest('.stateItem').text()
					$('.stateSelectedBoxes').append("<div class='stateSelectedBox'>"+stateSelected+" <i class='fa fa-times'></i></div>")
					$('.stateSelect').focus();
				})

				$('.stateList').mouseleave(function () {
					$('.stateList').slideUp();
					$('.stateSelect').blur();
				})
			})
		},

		typeSelect: function () {
			var types = ['ADAP', 'Medicaid', 'SPAP', 'State Supplemental'];

			$('.typeList').hide();
			$('.typeSelect').off("focus");
			$('.typeSelect').on("focus", function (e){
				$('.typeList').slideDown("fast");

				if($('.typeList').children('.typeItem').length == 0){
					$('.typeList').append("<div class='typeItem'><i class='fa fa-square-o'></i>All</div>")
					for (var i = 0; i <= types.length - 1; i++) {
						$('.typeList').append("<div class='typeItem'><i class='fa fa-square-o'></i>"+types[i]+"</div>")
					};
				}
				
				$('.typeItem i').off("click");
				$('.typeItem i').click(function () {
					$(this).addClass("fa-check-square-o").removeClass('fa-square-o');
					var typeSelected = $(this).closest('.typeItem').text()
					$('.typeSelectedBoxes').append("<div class='typeSelectedBox'>"+typeSelected+" <i class='fa fa-times'></i></div>")
					$('.typeSelect').focus();
				})

				$('.typeList').mouseleave(function () {
					$('.typeList').slideUp();
					$('.typeSelect').blur();
				})
			})
		}
	},

	programFilterFunctions: {

		filterStates: function () {
			
			var states = ['AK','AL','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];

				if($('.stateCheckBoxHolder').children('p').length == 0){
					$('.stateCheckBoxHolder').append("<p><i class='fa fa-square-o'></i> All</p>")
					for (var i = 0; i <= states.length - 1; i++) {
						$('.stateCheckBoxHolder').append("<p><i class='fa fa-square-o'></i> "+states[i]+"</p>")
					};			
				}

		},

		selectState: function () {
			$('.stateCheckBoxHolder p').off("click");
			$('.stateCheckBoxHolder p').on("click", function () {
				$(this).find('.fa').addClass('fa-check-square-o').removeClass('fa-square-o')
			});
		},

		selectType: function () {
			$('.checkBoxHolder p').off("click");
			$('.checkBoxHolder p').on("click", function () {
				$(this).find('.fa').addClass('fa-check-square-o').removeClass('fa-square-o')
			});
		},
		
		selectProgramsFromFilter: function () {
			$('.programModalTable .fa-trash').off("click");
			$('.programModalTable .fa-trash').on("click", function () {
				$(this).closest('tr').addClass('removed');
			});
		},

		makeSelection: function () {
			$('.programSelectionConfirm').off("click");
			$('.programSelectionConfirm').on("click", function  () {
				var programsToAdd = $('.programModalTable table').find('tr').filter(function () {
					return $(this).not('.removed');
				})

			var selectedProgramsIds = [];
			for (var i = programsToAdd.length - 1; i >= 0; i--) {
				var programId = $(programsToAdd[i]).data('id');
				if(typeof programId == "string"){
					selectedProgramsIds.push(programId);
				}
			};
			
			var programs = JSON.parse(sessionStorage.getItem('programs'));
			var selectedPrograms = [];
			for (var k = programs.length - 1; k >= 0; k--) {
				for (var i = selectedProgramsIds.length - 1; i >= 0; i--) {
					
					if(programs[k].id == selectedProgramsIds[i]){
						selectedPrograms.push(programs[k]);
					}
				};
			};

			sessionStorage.setItem('selectedPrograms', JSON.stringify( selectedPrograms ));
			var selection = JSON.parse(sessionStorage.getItem('selectedPrograms'));

			for (var i = selection.length - 1; i >= 0; i--) {
				$('.programTable table').append("<tr data-id='"+selection[i].id+"'><td class='check'><input class='checkOne' type='checkbox'></td><td>"+selection[i].shortName+"</td><td>"+selection[i].name+"</td><td>"+selection[i].type+"</td><td>"+selection[i].start+"</td><td>"+selection[i].end+"</td></tr>")
			};

			$('.awesomeProgramSearch').hide();
			$('.programSelectModal').hide();
			$('.programTable').show();

			})
		}
		
	},



	cancel: function () {
		if (window.location.href.match('medicaid-search.html')){
			
		}
		else{
			$('.ui-layout-toggler').click();
		}
		

		$('.backToSearch').on("click", function(){
			window.location.href = "/medicaid/medicaid-search.html"
		});
	},

	actionButtonsOnLeftPanel: {

		submit: function () {
			
		},
		delete: function () {

			
		},
		massUpdate: function () {
			$('.massUpdateLink').on("click", function() {
				window.location.href = "/medicaid/medicaid-search.html";
			});
		}
			
	},

	linkedWizardTitles: function () {

		$('.visited').find('.number').html("<i class='listCheck fa fa-check'></i>");
		var thisMassUpdate = JSON.parse(sessionStorage.getItem('thisMassUpdate'));

		if(thisMassUpdate.lastStep == "6") {
			$('.wizardIndicator').find('li').removeClass('visited unvisited').addClass('visited').find('.number').html("<i class='listCheck fa fa-check'></i>");
		}

		$('.wizardIndicator li').on("click", function () {

			var name = $(this).attr("name");

			switch(name) {
			    case 'step1':
			        window.location.href = "/medicaid/medicaid-wizard-1.html";
			        break;
			    case 'step2':
			        window.location.href = "/medicaid/medicaid-wizard-2.html";
			        break;
			    case 'step3':
			        window.location.href = "/medicaid/medicaid-wizard-3.html";
			        break;
			    case 'step4':
			        window.location.href = "/medicaid/medicaid-wizard-4.html";
			        break;
			    case 'step5':
			    	window.location.href = "/medicaid/medicaid-wizard-5.html";
			    	break;
			    case 'step6':
			    	window.location.href = "/medicaid/medicaid-wizard-6.html";
				}
		});
	},
	
	selectMassUpdateFromSearch: function () {
		
			$('body').on("click", ".massUpdateId", function () {
				var updateId = $(this).text();
				var massUpdates = JSON.parse(sessionStorage.getItem('massUpdates'));

				for(key in massUpdates){
					if (massUpdates[key].id == updateId)
						var thisMassUpdate = massUpdates[key];
				
				}
				
				sessionStorage.setItem('thisMassUpdate', JSON.stringify( 0 ));
				sessionStorage.setItem('endDateProducts', JSON.stringify( 0 ));
				sessionStorage.setItem('addProducts', JSON.stringify( 0 ));
				sessionStorage.setItem('selectedPrograms', JSON.stringify( 0 ));
				sessionStorage.setItem('thisMassUpdate', JSON.stringify( thisMassUpdate ));
				thisMassUpdate = JSON.parse(sessionStorage.getItem('thisMassUpdate'));
				
			switch(thisMassUpdate.lastStep) {
			    case 1:
			        window.location.href = "/medicaid/medicaid-wizard-1.html";
			        break;
			    case 2:
			        window.location.href = "/medicaid/medicaid-wizard-2.html";
			        break;
			    case 3:
			        window.location.href = "/medicaid/medicaid-wizard-3.html";
			        break;
			    case 4:
			        window.location.href = "/medicaid/medicaid-wizard-4.html";
			        break;
			    case 5:
			    	window.location.href = "/medicaid/medicaid-wizard-5.html";
			    	break;
			    case 6:
			    	window.location.href = "/medicaid/medicaid-wizard-6.html";
			    	break;
				}
				
			});			
	},

	createNewMassUpdate: function () {

			$('.newMassUpdate').on("click", function () {
				var data = {
					"id": null,
				    "name": null,
				    "status": "New",
				    "originator": null,
				    "edited": null,
				    "implemented": "N/A",
				    "programs": [],
				    "lastStep": 2,
				    "notes": null
				};	
				sessionStorage.setItem('thisMassUpdate', JSON.stringify( data ));
				sessionStorage.setItem('endDateProducts', JSON.stringify( 0 ));
				sessionStorage.setItem('addProducts', JSON.stringify( 0 ));
				sessionStorage.setItem('selectedPrograms', JSON.stringify( 0 ));
				window.location.href = "/medicaid/medicaid-wizard-1.html"
			});
	},

	firstStep: function () {

		var thisMassUpdate = JSON.parse(sessionStorage.getItem('thisMassUpdate'));			

		var nameAcronym;
		var ownerAcronym;
		var idNumber;
		$('.newMassUpdateId').text(" ");
		if (thisMassUpdate.name == null) {

			$('.massUpdateName').keyup(function() {
				if(typeof $('.massUpdateName').val() != undefined){
					var nameAc = $(this).val().split(' ');
					nameAcronym = "MMU-" + nameAc[0].substring(0,2) + nameAc[1].substring(0,2) + "-";
				}
				$('.newMassUpdateId').text(nameAcronym.toUpperCase());
			});

			$('.massUpdateOrig').keyup(function() {
				if(typeof $('.massUpdateName').val() != undefined){
					var ownerAc = $(this).val().split(' ');
					ownerAcronym = ownerAc[0].charAt(0) + ownerAc[1].charAt(0) + "";
				}
				$('.newMassUpdateId').text(nameAcronym.toUpperCase() + ownerAcronym.toUpperCase());
			});
			
			$('.massUpdateOrig').blur(function() {
				idNumber = Math.floor((Math.random() * 1000000));
				$('.newMassUpdateId').text(nameAcronym.toUpperCase() + ownerAcronym.toUpperCase() + idNumber);
			});
			

			var currentdate = new Date();
			var datetime = currentdate.getDay() + "/"+currentdate.getMonth() 
			+ "/" + currentdate.getFullYear() + " " +
			+ currentdate.getHours() + ":" 
			+ currentdate.getMinutes() + ":" + currentdate.getSeconds();

		
			$('.massUpdateDate').val(datetime);
			$('.massUpdateOrig').attr("placeholder", "Aime Analyst");
			$('.massUpdateOrig').attr("placeholder", "Aime Analyst");
			$('.massUpdateImplemented').attr("placeholder", "Not Implemented")
		}
		else {
			$('.massUpdateName').val(thisMassUpdate.name);
			$('.newMassUpdateId').text(thisMassUpdate.id);
			$('.massUpdateOrig').val(thisMassUpdate.originator);
			$('.massUpdateDate').val(thisMassUpdate.edited);			
		}



		$('.saveMassUpdate').on("click", function() {
			var name = $('.massUpdateName').val();
			var orig = $('.massUpdateOrig').val();
			var massUpdateId = $('.newMassUpdateId').text();
			var currentdate = new Date();
			var datetime = currentdate.getDay() + "/"+currentdate.getMonth() 
			+ "/" + currentdate.getFullYear() + " " +
			+ currentdate.getHours() + ":" 
			+ currentdate.getMinutes() + ":" + currentdate.getSeconds();
			var note = $('.massUpdateNotes').val();
			
						var data = {
							"id": massUpdateId,
						    "name": name,
						    "status": "New",
						    "originator": orig,
						    "edited": datetime,
						    "implemented": "N/A",
						    "programs": [],
						    "lastStep": 2,
						    "notes": note
							};

			var massUpdates = JSON.parse(sessionStorage.getItem('massUpdates'));
			massUpdates.push(data);
			sessionStorage.setItem('massUpdates', JSON.stringify( massUpdates ));
			sessionStorage.removeItem('thisMassUpdate');
			sessionStorage.setItem('thisMassUpdate', JSON.stringify( data ));

			window.location.href = "/medicaid/medicaid-wizard-2.html";
		});
	},

	secondStep: function () {
		var thisMassUpdate = JSON.parse(sessionStorage.getItem('thisMassUpdate'))

		if(thisMassUpdate.programs.length == 0){
			$('.programTable').hide();
			$('.awesomeProgramSearch').show();
		}
		else{
			$('.programTable').show();
			$('.awesomeProgramSearch').hide();

			var selection = thisMassUpdate.programs;

			for (var i = selection.length - 1; i >= 0; i--) {
				$('.programTable table').append("<tr data-id='"+selection[i].id+"'><td class='check'><input class='checkOne' type='checkbox'></td><td>"+selection[i].shortName+"</td><td>"+selection[i].name+"</td><td>"+selection[i].type+"</td><td>"+selection[i].start+"</td><td>"+selection[i].end+"</td></tr>")
			};
		}
		
		var selectedPrograms = JSON.parse(sessionStorage.getItem('selectedPrograms'));

		$('.savePrograms').on("click", function () {
			
			var programs = JSON.parse(sessionStorage.getItem('programs'));
			var checks = $('.checkOne').closest('tr');
			
			var selectedPrograms = [];
			var selectedProgramsId = [];

			for (var i = checks.length - 1; i >= 0; i--) {
				var sa = $(checks[i]).data('id');
				
				selectedProgramsId[i] = sa;				
			};

			for(key in programs) {
				
				for (var i = selectedProgramsId.length - 1; i >= 0; i--) {
					
					if(programs[key].id == selectedProgramsId[i]){
							
							selectedPrograms[i] = programs[key];
							
					}
				}
			};
			
			thisMassUpdate.programs = selectedPrograms;
			console.log(thisMassUpdate.programs)
			thisMassUpdate.lastStep = 3;
			sessionStorage.setItem('selectedPrograms', JSON.stringify( selectedPrograms ));
			sessionStorage.setItem('thisMassUpdate', JSON.stringify( thisMassUpdate ));
			window.location.href = "/medicaid/medicaid-wizard-3.html";
		})
	},

	selectProductsTabs: function () {
		$('.addPanel').hide();
		$('.endDatePanel').show();
		$('.addProductsTableTip').hide();
		$('.removeEndDates, .removeAdds').addClass('disabled');

		$('.panelWithTabs .add').on("click", function () {
			$(this).siblings('li').removeClass("selected");
			$(this).addClass("selected");
			$('.endDatePanel').hide();
			$('.addPanel').show();
			$('.addProductsTableTip').show();
			$('.endDateProductsTableTip').hide();

		});

		$('.panelWithTabs .endDate').on("click", function () {
			$(this).siblings('li').removeClass("selected");
			$(this).addClass("selected");
			$('.addPanel').hide();
			$('.endDatePanel').show();
			$('.endDateProductsTableTip').show();
			$('.addProductsTableTip').hide();

		});
	},

	addProductsToTableModalAdd: function () {
		$('.addProductModal').hide();

		$('.addProductModal .fa-times').on("click", function () {
				$('.addProductModal').hide();
				$('.selectedProductsTable table').find('tr').slice(1).remove();
		});
		
		
			var ndcAdd = [];
			var addProducts = [];
			$('.addAddProduct').off("click");
			$('.addAddProduct').on("click.addAdd", function () {
					$('.addProductsTableTip').remove();
					$('.addEnds').hide();
					$('.addAdds').show();
					$('.addProductModal').show();
					$('.addAdds').off("click");

					$('.addAdds').on("click", function () {
						$('.removeAdds').removeClass('disabled');
						var productsToAddToAdd = $('.selectedProductsTable').find('tr').slice(1);
						
						$(productsToAddToAdd).each(function() {
							ndcAdd.push(parseInt($(this).find('.id').text()));
						});
						
						var productListAdd = JSON.parse(sessionStorage.getItem('products'));
						

						addProducts = [];
						for (var i = ndcAdd.length - 1; i >= 0; i--) {

							for (var prod in productListAdd){
								if (ndcAdd[i] == productListAdd[prod].ndc) {
									addProducts.push(productListAdd[prod]);
								}
							}
						};

						sessionStorage.setItem('addProducts', JSON.stringify( addProducts ))
						$('.selectedProductsTable table').find('tr').slice(1).remove();
						$('.addProductModal').hide();

						$('.addProducts table').find('tr').slice(1).remove();
						var addProducts = JSON.parse(sessionStorage.getItem('addProducts'));

						for(prod in addProducts){
							$('.addProducts table').append("<tr><td class='check'><input class='checkOne' type='checkbox'></td><td>"+addProducts[prod].ndc+"</td><td>"+addProducts[prod].desc+"</td><td class='editableIcon defaultStart' data=\""+addProducts[prod].start+"\">Default Start Quarter <i class='fa fa-edit'></i></td><td class='editableIcon defaultEnd' data=\""+addProducts[prod].end+"\">Default End Quarter <i class='fa fa-edit'></i></td><td class='editableIcon defaultFormula' data=\""+addProducts[prod].ura+"\">Default Formula <i class='fa fa-edit'></i></td><td>"+addProducts[prod].cat+"</td></tr>");
						}
					});
			});
	},

	addProductsToTableModalEndDate: function () {
			var ndcEnd = [];
			var endDateProducts = [];
			$('.addEndDateProduct').off("click");
			$('.addEndDateProduct').on("click.addEnd", function () {
					$('.endDateProductsTableTip').remove();
					$('.addAdds').hide();
					$('.addEnds').show();
					$('.addProductModal').show();
					$('.addEnds').off("click");

					$('.addEnds').on("click", function () {
						$('.removeEndDates').removeClass('disabled');
						var productsToAddToEnd = $('.selectedProductsTable').find('tr').slice(1);
						

						$(productsToAddToEnd).each(function() {
							ndcEnd.push(parseInt($(this).find('.id').text()));
						});
						
						var productListEndDate = JSON.parse(sessionStorage.getItem('products'));

						endDateProducts = [];	
						for (var i = ndcEnd.length - 1; i >= 0; i--) {
							for (var prod in productListEndDate){
								if (ndcEnd[i] == productListEndDate[prod].ndc) {
									endDateProducts.push(productListEndDate[prod]);
								}
							}
						};
						

						sessionStorage.setItem('endDateProducts', JSON.stringify(endDateProducts));

						$('.selectedProductsTable table').find('tr').slice(1).remove();
						$('.addProductModal').hide();

						$('.endDateProducts table').find('tr').slice(1).remove();
						var endDateProducts = JSON.parse(sessionStorage.getItem('endDateProducts'));

						for(prod in endDateProducts) {
							$('.endDateProducts table').append("<tr><td class='check'><input class='checkOne' type='checkbox'></td><td>"+endDateProducts[prod].ndc+"</td><td>"+endDateProducts[prod].desc+"</td><td class='editableIcon defaultEnd' data=\""+endDateProducts[prod].end+"\">Default End Quarter <i class='fa fa-edit'></i></td><td>"+endDateProducts[prod].lotExp+"</td><td>"+endDateProducts[prod].cat+"</td></tr>");
						}
						

					});
			});

	},
	populateProductTables: function () {
						$('.endDateProducts table').find('tr').slice(1).remove();
						var endDateProducts = JSON.parse(sessionStorage.getItem('endDateProducts'));

						if(typeof endDateProducts == "object"){
							$('.removeEndDates').removeClass('disabled');
						}

						for(prod in endDateProducts) {
							$('.endDateProducts table').append("<tr><td class='check'><input class='checkOne' type='checkbox'></td><td class='ndc'>"+endDateProducts[prod].ndc+"</td><td>"+endDateProducts[prod].desc+"</td><td class='editableIcon defaultEnd' data=\""+endDateProducts[prod].end+"\">Default End Quarter <i class='fa fa-edit'></i></td><td>"+endDateProducts[prod].lotExp+"</td><td>"+endDateProducts[prod].cat+"</td></tr>");
						}

						$('.addProducts table').find('tr').slice(1).remove();
						var addProducts = JSON.parse(sessionStorage.getItem('addProducts'));

						if(typeof endDateProducts == "object"){
							$('.removeAdds').removeClass('disabled');
						}

						for(prod in addProducts){
							$('.addProducts table').append("<tr><td class='check'><input class='checkOne' type='checkbox'></td><td class='ndc'>"+addProducts[prod].ndc+"</td><td>"+addProducts[prod].desc+"</td><td class='editableIcon defaultStart' data=\""+addProducts[prod].start+"\">Default Start Quarter <i class='fa fa-edit'></i></td><td class='editableIcon defaultEnd' data=\""+addProducts[prod].end+"\">Default End Quarter <i class='fa fa-edit'></i></td><td class='editableIcon defaultFormula' data=\""+addProducts[prod].ura+"\">Default Formula <i class='fa fa-edit'></i></td><td>"+addProducts[prod].cat+"</td></tr>");
						}
	},

	selectProductsToAddInModal: function () {
		$('.selectProducts').on("click", function() {

			var toBeAdded = $('.productsToAddTable').find('tr').filter(function() {
			    return $(this).find('input').is(':checked');
			});
			$('.selectedProductsTable table').append(toBeAdded);
			
			$('.selectedProductsTable').find('.checkOne').prop("checked", false).closest('tr').css('background', 'white');
		
		});
	},
	removeProductsFromAddTable: function () {
		
	},
	removeProductsFromEndDateTable: function () {

		$('.removeEndDates').on("click", function () {
			var removeItems = [];
			var items = $('.endDateProducts').find('tr').filter(function(){
				return $(this).find('.checkOne').is(":checked");
			}).find('.ndc');
			
			for (var i = items.length - 1; i >= 0; i--) {
				var ndc = parseInt($(items[i]).text());
			removeItems[i] = ndc;
			};
			var endDateProducts = JSON.parse(sessionStorage.getItem('endDateProducts'));
			
			for(prod in endDateProducts){
				for (var i = removeItems.length - 1; i >= 0; i--) {
					if(endDateProducts[prod].ndc == removeItems[i]){
						delete endDateProducts[prod];
					}
				};
			}

			//to be continued!!!!
			


		});
	},
	thirdStep: function () {
		$('.saveProducts').on("click", function() {
			var thisMassUpdate = JSON.parse(sessionStorage.getItem('thisMassUpdate'));
			var endDateProducts = JSON.parse(sessionStorage.getItem('endDateProducts'));
			var addProducts = JSON.parse(sessionStorage.getItem('addProducts'));

			for(k in thisMassUpdate.programs){
					thisMassUpdate.programs[k].addProducts = []
					thisMassUpdate.programs[k].endDateProducts = []
				};

			for(key in addProducts) {
				for(k in thisMassUpdate.programs){
					thisMassUpdate.programs[k].addProducts[key] = addProducts[key]
				}
			};
			for(key in endDateProducts) {
				for(k in thisMassUpdate.programs){
					thisMassUpdate.programs[k].endDateProducts[key] = endDateProducts[key]
				}
			};
			thisMassUpdate.lastStep = 4;
			sessionStorage.setItem('thisMassUpdate', JSON.stringify(thisMassUpdate));
			window.location.href = "/medicaid/medicaid-wizard-4.html";
		});
	},

	validationErrorModalActions: function () {

		$('.errorModal').hide();
		$('.errorItem, .warningItem').hide();

		$('.red, .orange').off("click");
		$('.red, .orange').on("click", function () {
			$('.errorModal').show();
		});

		$('.errorList, .warningList').off("click");
		$('.warningList').on("click", function () {
			if($('.warningItem').is(":hidden")){
				$('.warningItem').show();
				$(this).find('li:first-child')
			}
			else{
				$('.warningItem').hide();
			}

		});
		$('.errorList').on("click", function () {
			if($('.errorItem').is(":hidden")){
				$('.errorItem').show();
				$(this).find('li:first-child')
			}
			else{
				$('.errorItem').hide();
			}

		});
	},

	runValidation: function () {
		var thisMassUpdate = JSON.parse(sessionStorage.getItem('thisMassUpdate'));
		$('.confirmValidateModal').hide();
		
		$('.validate').off("click");
		$('.confirmValidateModal').find('.fa-times, .cancel').on("click", function() {
			$(this).closest('.confirmValidateModal').hide();
		})
		if(thisMassUpdate.validated == undefined || thisMassUpdate.validated == "no") {
			$('.validateButton').text('Validate');
			$('.validate, .validateButton').on('click', function () {
				$('.titleArea h1').text("Begin Validation?");
				$('.confirmValidateModal').show();

				$('.validateConfirm').on("click", function () {
					thisMassUpdate.validated = "errors";
					sessionStorage.setItem('thisMassUpdate', JSON.stringify(thisMassUpdate));
					thisMassUpdate = JSON.parse(sessionStorage.getItem('thisMassUpdate'));
					$('.confirmValidateModal').hide();
					$('.validateButton').text('Revalidate');					
				});
			});
		}
		else if (thisMassUpdate.validated == "errors") {
			$('.validateButton').text('Revalidate');
			
			$('.validate, .validateButton').on('click', function () {
				$('.titleArea h1').text("Begin Validation?");
				$('.confirmValidateModal').show();

				$('.validate, .validateButton').off("click");
				$('.validateConfirm').on("click", function () {
					$('.confirmValidateModal').hide();
					$('.validateButton').text('Revalidate');	
					thisMassUpdate = JSON.parse(sessionStorage.getItem('thisMassUpdate'));
					thisMassUpdate.validated = "yes";
					sessionStorage.setItem('thisMassUpdate', JSON.stringify(thisMassUpdate));					
				});
			});			
		}
		else if (thisMassUpdate.validated == "yes") {
			$('.validateButton').text('Submit for Approval');
			
			
			$('.validate, .validateButton').on('click', function () {
				thisMassUpdate = JSON.parse(sessionStorage.getItem('thisMassUpdate'));
				thisMassUpdate.validated = "submitted";
				thisMassUpdate.lastStep = 5;
				sessionStorage.setItem('thisMassUpdate', JSON.stringify(thisMassUpdate));
				window.location.href = "/medicaid/medicaid-wizard-5.html";
			});			
		}
		else if (thisMassUpdate.validated == "submitted") {
			$('.validateButton').text('Submit for Apporval').addClass('disabled');
			$('li[name="step6"]').removeClass('unvisited').addClass('visited').find('.number').html("<i class='listCheck fa fa-check'></i>");

			$('.validate, .validateButton').on('click', function () {
			});	
		}
		
	},

	approveMassUpdate: function () {
		$('.approveMassUpdate').on("click", function () {
			window.location.href = "/medicaid/medicaid-wizard-6.html";
		});
	},

	populateReviewAndModify: function () {
		var thisMassUpdate = JSON.parse(sessionStorage.getItem('thisMassUpdate'));

		for(all in thisMassUpdate){
			
			for(k in thisMassUpdate[all]){
				
				if (typeof thisMassUpdate[all][k] == "object") {
						for(prod in thisMassUpdate[all][k].addProducts){
							if(thisMassUpdate.validated == "errors" && k % 8 == 1){
							$('.reviewTable table').append("<tr><td></td><td class='fa fa-exclamation-triangle orange'></td><td data="+thisMassUpdate[all][k].addProducts[prod].ndc+">"+thisMassUpdate[all][k].addProducts[prod].desc+"</td><td>"+thisMassUpdate[all][k].name+"</td><td>"+thisMassUpdate[all][k].start+" - "+thisMassUpdate[all][k].end+"</td><td class='editableIcon adjustStart'>"+thisMassUpdate[all][k].addProducts[prod].start+" <i class='fa fa-edit'></i></td><td class='editableIcon adjustEnd'>"+thisMassUpdate[all][k].addProducts[prod].end+" <i class='fa fa-edit'></i></td><td>"+thisMassUpdate[all][k].addProducts[prod].ura+"</td><td class='editableIcon adjustURA'>"+thisMassUpdate[all][k].addProducts[prod].ura+" <i class='fa fa-edit'></i></td><td>Add</td></tr>")
							}
							else{
							$('.reviewTable table').append("<tr><td></td><td></td><td data="+thisMassUpdate[all][k].addProducts[prod].ndc+">"+thisMassUpdate[all][k].addProducts[prod].desc+"</td><td>"+thisMassUpdate[all][k].name+"</td><td>"+thisMassUpdate[all][k].start+" - "+thisMassUpdate[all][k].end+"</td><td class='editableIcon adjustStart'>"+thisMassUpdate[all][k].addProducts[prod].start+" <i class='fa fa-edit'></i></td><td class='editableIcon adjustEnd'>"+thisMassUpdate[all][k].addProducts[prod].end+" <i class='fa fa-edit'></i></td><td>"+thisMassUpdate[all][k].addProducts[prod].ura+"</td><td class='editableIcon adjustURA'>"+thisMassUpdate[all][k].addProducts[prod].ura+" <i class='fa fa-edit'></i></td><td>Add</td></tr>")
							}
						}
						for(prod in thisMassUpdate[all][k].endDateProducts){
							if(thisMassUpdate.validated == "errors" && k % 11 == 1){
							$('.reviewTable table').append("<tr><td></td><td class='fa fa-exclamation-circle red'></td><td data="+thisMassUpdate[all][k].endDateProducts[prod].ndc+">"+thisMassUpdate[all][k].endDateProducts[prod].desc+"</td><td>"+thisMassUpdate[all][k].name+"</td><td>"+thisMassUpdate[all][k].start+" - "+thisMassUpdate[all][k].end+"</td><td>"+thisMassUpdate[all][k].endDateProducts[prod].start+"</td><td class='editableIcon adjustEnd'>"+thisMassUpdate[all][k].endDateProducts[prod].end+" <i class='fa fa-edit'></i></td><td>"+thisMassUpdate[all][k].endDateProducts[prod].ura+"</td><td class='editableIcon adjustURA'>"+thisMassUpdate[all][k].endDateProducts[prod].ura+" <i class='fa fa-edit'></i></td><td>End-Date</td></tr>")
							}
							else{
							$('.reviewTable table').append("<tr><td></td><td></td><td data="+thisMassUpdate[all][k].endDateProducts[prod].ndc+">"+thisMassUpdate[all][k].endDateProducts[prod].desc+"</td><td>"+thisMassUpdate[all][k].name+"</td><td>"+thisMassUpdate[all][k].start+" - "+thisMassUpdate[all][k].end+"</td><td>"+thisMassUpdate[all][k].endDateProducts[prod].start+"</td><td class='editableIcon adjustEnd'>"+thisMassUpdate[all][k].endDateProducts[prod].end+" <i class='fa fa-edit'></i></td><td>"+thisMassUpdate[all][k].endDateProducts[prod].ura+"</td><td class='editableIcon adjustURA'>"+thisMassUpdate[all][k].endDateProducts[prod].ura+" <i class='fa fa-edit'></i></td><td>End-Date</td></tr>")
							}
						}
				}
			}
		}
		sessionStorage.setItem('thisMassUpdate', JSON.stringify(thisMassUpdate));
	},

	finishMassUpdate: function () {
		$('.finishMassUpdate').on("click", function () {
			window.location.href = "/medicaid/medicaid-search.html";
		})
	}
};













 