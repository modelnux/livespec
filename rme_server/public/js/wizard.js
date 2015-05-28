var MassUpdateFunctions = {

	formFunctions: {
		slider: function () {
		    $( "#slider-range" ).slider({
				range: true,
				min: 2000,
				max: 2050,
				values: [ 2000, 2050 ],
				slide: function( event, ui ) {
				$( "#amount" ).text( "" + ui.values[ 0 ] + " Q1 - " + ui.values[ 1 ] +" Q4" );
				}
		    });
		    	$( "#amount" ).text( "" + $( "#slider-range" ).slider( "values", 0 ) +
		      " Q1 - " + $( "#slider-range" ).slider( "values", 1 ) +" Q4");

		},

		filterSlider: function () {
		    $( "#slider-range2" ).slider({
				range: true,
				min: 2000,
				max: 2050,
				values: [ 2000, 2050 ],
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
				});

				$('.typeList').mouseleave(function () {
					$('.typeList').slideUp();
					$('.typeSelect').blur();
				});
			})
		},

		yearSelect: function () {
			var years = ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"];

			$('.yearList').hide();
			$('.yearSelect').off("focus");
			$('.yearSelect').on("focus", function (e){
				$('.yearList').slideDown("fast");
				$('input.selected').prop("checked", true);

				if($('.yearList').children('.yearItem').length == 0){
					for (var i = 0; i <= years.length - 1; i++) {
						$('.yearList').append("<div class='yearItem'>"+years[i]+"</div>")
					};
				}
				
				$('body').off("click", '.yearItem');
				$('body').on("click", '.yearItem', function () {
					var yearSelected = $(this).text()
					$('.yearList').slideUp("fast");
					$('.yearSelect').val(yearSelected)
				});

				$('.yearList').mouseleave(function () {
					$('.yearList').slideUp();
					$('.yearSelect').blur();
				});
			})

		},

		qtrSelect: function () {
			var qtrs = ['Q1', 'Q2', 'Q3', 'Q4'];

			$('.qtrList').hide();
			$('.qtrSelect').off("focus");
			$('.qtrSelect').on("focus", function (e){
				$('.qtrList').slideDown("fast");
				$('input.selected').prop("checked", true);
				
				if($('.qtrList').children('.qtrItem').length == 0){
					for (var i = 0; i <= qtrs.length - 1; i++) {
						$('.qtrList').append("<div class='qtrItem'>"+qtrs[i]+"</div>")
					};
				}
				
				$('body').off("click", '.qtrItem');
				$('body').on("click",'.qtrItem',function () {
					var qtrSelected = $(this).text()
					$('.qtrSelect').val(qtrSelected);
					$('.qtrList').slideUp("fast");
				})

				$('.qtrList').mouseleave(function () {
					$('.qtrList').slideUp();
					$('.qtrSelect').blur();
				})
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



	breadCrumbs: function () {
		thisMassUpdate = JSON.parse(sessionStorage.getItem('thisMassUpdate'));

		var name = thisMassUpdate.name;

		if(name == null){
			$('.massUpdateNameCrumb').text("New Mass Update");
		}
		else{
			$('.massUpdateNameCrumb').text(name);
		}

		$('.massUpdateCrumb').off("click");
		$('.massUpdateCrumb').on("click", function () {
			window.location.href = "/medicaid/medicaid-search.html"
		});

		$('.massUpdateNameCrumb').off("click");
		$('.massUpdateNameCrumb').on("click", function () {
			
			
				
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
			    	if(thisMassUpdate.lastStep >= "1"){
			        	window.location.href = "/medicaid/medicaid-wizard-1.html";
			        }
			        break;
			    case 'step2':
			    	if(thisMassUpdate.lastStep >= "2"){
			        	window.location.href = "/medicaid/medicaid-wizard-2.html";
			        }
			        break;
			    case 'step3':
			    	if(thisMassUpdate.lastStep >= "3"){
			        	window.location.href = "/medicaid/medicaid-wizard-3.html";
			        }
			        break;
			    case 'step4':
			    	if(thisMassUpdate.lastStep >= "4"){
			        	window.location.href = "/medicaid/medicaid-wizard-4.html";
			        }
			        break;
			    case 'step5':
			    	if(thisMassUpdate.lastStep >= "5"){
			        	window.location.href = "/medicaid/medicaid-wizard-5.html";
			        }
			    	break;
			    case 'step6':
			    	if(thisMassUpdate.lastStep >= "6"){
			        	window.location.href = "/medicaid/medicaid-wizard-6.html";
			        }
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
				    "lastStep": 2,
				    "programs": [],
				    "validated": "no",
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

		$('.massUpdateDate').val(datetime);
		$('.massUpdateOrig').attr("value", "Aime Analyst");
		$('.massUpdateImplemented').attr("placeholder", "Not Implemented");
		$('.newMassUpdateId').text(" ");

		if (thisMassUpdate.name == null) {
			$('.saveMassUpdate').addClass('disabled');
			$('.massUpdateName').keyup(function() {
				if(typeof $('.massUpdateName').val() != undefined){
					var nameAc = $(this).val();
					if(nameAc.indexOf(' ')){
						nameAc.split(' ');
						nameAcronym = "MMU-" + nameAc[0].substring(0,2) + nameAc[1].substring(0,2) + "-";
					}
					else{
						nameAcronym = "MMU-" + nameAc;
					}
				}
			});

			$('.massUpdateName').blur(function() {
				$('.newMassUpdateId').text(nameAcronym.toUpperCase());
				
				if(typeof $('.massUpdateName').val() != undefined){
					var ownerAc = $('.massUpdateOrig').val().split(' ');
					ownerAcronym = ownerAc[0].charAt(0) + ownerAc[1].charAt(0) + "";
				}
				$('.newMassUpdateId').text(nameAcronym.toUpperCase() + ownerAcronym.toUpperCase());
				
				idNumber = Math.floor((Math.random() * 1000000));
				$('.newMassUpdateId').text(nameAcronym.toUpperCase() + ownerAcronym.toUpperCase() + idNumber);
				$('.saveMassUpdate').removeClass('disabled');
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
				$('.saveMassUpdate').removeClass('disabled');
			});
			

			var currentdate = new Date();
			var datetime = currentdate.getDate() + "/"+currentdate.getMonth() 
			+ "/" + currentdate.getFullYear() + " " +
			+ currentdate.getHours() + ":" 
			+ currentdate.getMinutes();

			$('.massUpdateDate').attr("placeholder", datetime);	

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
			var currentdate = new Date();
			var datetime = currentdate.getDate() + "/"+currentdate.getMonth() 
			+ "/" + currentdate.getFullYear() + " " +
			+ currentdate.getHours() + ":" 
			+ currentdate.getMinutes();
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
						    "validated": "no",
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

	addProgramsModalFuncitonality: function () {

		var selectedPrograms = JSON.parse(sessionStorage.getItem('selectedPrograms'));
		
		$('.programSelectModal').hide();
		$('.programSelectionConfirm').addClass('disabled');

		$('.programSelectModal .fa-times, .cancel').on("click", function () {
				$('.programSelectModal').hide();
				$('.selectedProgramsTable table').find('tr').slice(1).remove();
		});
		
		

			$('.chooseMorePrograms').off("click");
			$('.chooseMorePrograms').on("click", function () {
				var idToAdd = [];
				var programsToAdd = [];

					$('.programsToAddTableTip').remove();
					$('.programSelectModal').show();

					$('.selectPrograms').off("click");
					$('.selectPrograms').on("click", function () {
						$('.programSelectionConfirm').removeClass('disabled');
						var programsToAdd = $('.programsToAddTable').find('tr').slice(1);
						var selectedProgramsToAdd = programsToAdd.filter(function () {
							return $(this).find('.checkOne').is(':checked');
						});
						

						$(selectedProgramsToAdd).each(function() {
							idToAdd.push($(this).data("id"));
						});
						
						var programs = JSON.parse(sessionStorage.getItem('programs'));

						selectedPrograms = [];
						for (var i = idToAdd.length - 1; i >= 0; i--) {

							for (prog in programs){
								if (idToAdd[i] == programs[prog].id) {
									console.log(idToAdd[i]);
									selectedPrograms.push(programs[prog]);
								}
							}
						};
						console.log(selectedPrograms)
						sessionStorage.setItem('selectedPrograms', JSON.stringify( selectedPrograms ));

						var selectedPrograms = JSON.parse(sessionStorage.getItem('selectedPrograms'));

						for(prog in selectedPrograms){
							$('.selectedProgramsTable table').append("<tr class='id' data-id="+selectedPrograms[prog].id+"><td class='check'><input class='checkOne' type='checkbox'></td><td>"+selectedPrograms[prog].name+"</td><td>"+selectedPrograms[prog].type+"</td><td>"+selectedPrograms[prog].start+"</td><td>"+selectedPrograms[prog].end+"</td></tr>");
						}

						$('.programSelectionConfirm').off("click");
						$('.programSelectionConfirm').on("click", function () {
						$('.savePrograms').removeClass('disabled');
						for(prog in selectedPrograms){
							$('.programTable table').append("<tr class='id' data-id="+selectedPrograms[prog].id+"><td class='check'><input class='checkOne' type='checkbox'></td><td>"+selectedPrograms[prog].shortName+"</td><td>"+selectedPrograms[prog].name+"</td><td>"+selectedPrograms[prog].type+"</td><td>"+selectedPrograms[prog].start+"</td><td>"+selectedPrograms[prog].end+"</td></tr>");
						}
						$('.programSelectModal').hide();
						$('.addProgramsTooltip').hide();
						sessionStorage.setItem('selectedPrograms', JSON.stringify( selectedPrograms ));
						});

					});
			});
			
		
	},

	disabledButtonsInProgramSelectModal: function () {
		$('.selectPrograms').addClass('disabled');

		$('.programsToAddTable').off("click", "td");
		$('.programsToAddTable').on("click", "td", function () {
			$('.selectPrograms').removeClass('disabled');

			var check = $(this).closest("tr").find(".checkOne").prop("checked") == true;

			if(check){
				$(this).find(".checkOne").prop("checked", false).closest('tr').css("background","rgb(255, 240, 214");
			}
			else{
				$(this).find(".checkOne").prop("checked", true);
				$('.selectPrograms').removeClass('disabled');
			}


			var checked = $(".programsToAddTable").find('.checkOne').filter(function () {
				return $(this).is(":checked");
			});
			console.log(checked.length)
				if(checked.length){
					$('.selectPrograms').removeClass('disabled');
				}
		});

		$('.removeProgram').addClass('disabled');
		$(".programSelectModal").off("click", 'tr');
		$(".programSelectModal").on("click", 'tr', function () {

			var check = $(this).find(".checkOne");

			if(check.prop("checked") == true){
				$(this).find(".checkOne").prop("checked", false);
			}
			else{
				$(this).find(".checkOne").prop("checked", true);
			}

			var check = $(".selectedProgramsTable").find('.checkOne').filter(function () {
				return $(this).is(":checked");
			});
				if(check.length){
					$('.removeProgram').removeClass('disabled');
				}
				else{
					$('.removeProgram').addClass('disabled');
				}
		});
	},

	secondStep: function () {
		var thisMassUpdate = JSON.parse(sessionStorage.getItem('thisMassUpdate'))
		$('.addProgramsTooltip').hide();
		var selection = thisMassUpdate.programs;

		if(selection.length){
			$('.savePrograms').removeClass('disabled');
			$('.addProgramsTooltip').hide();
		}
		else{
			$('.savePrograms').addClass('disabled');
			$('.addProgramsTooltip').delay(5000).fadeIn();
		}

		for (var i = selection.length - 1; i >= 0; i--) {
			$('.programTable table').append("<tr data-id='"+selection[i].id+"'><td class='check'><input class='checkOne' type='checkbox'></td><td>"+selection[i].shortName+"</td><td>"+selection[i].name+"</td><td>"+selection[i].type+"</td><td>"+selection[i].start+"</td><td>"+selection[i].end+"</td></tr>")
		};

		$('.savePrograms').on("click", function () {
			var selectedPrograms = JSON.parse(sessionStorage.getItem('selectedPrograms'));

			thisMassUpdate.programs = selectedPrograms;
			console.log(thisMassUpdate.programs)
			thisMassUpdate.lastStep = 3;
			sessionStorage.setItem('thisMassUpdate', JSON.stringify( thisMassUpdate ));
			window.location.href = "/medicaid/medicaid-wizard-3.html";
		})
	},

	selectProductsTabs: function () {
		$('.endDateProductsTableTip').hide();
		var addProducts = JSON.parse(sessionStorage.getItem('addProducts'));
		var endDateProducts = JSON.parse(sessionStorage.getItem('endDateProducts'));

		if(addProducts.length || endDateProducts.length){
			$('.saveProducts').removeClass('disabled');
			$('.endDateProductsTableTip').hide();
		}
		else{
			$('.saveProducts').addClass('disabled');
			$('.endDateProductsTableTip').delay(6000).fadeIn();
		}

		$('.addPanel').hide();
		$('.endDatePanel').show();
		$('.addProductsTableTip').hide();
		$('.removeEndDates, .removeAdds').addClass('disabled');

		$('.panelWithTabs .add').on("click", function () {
			$(this).siblings('li').removeClass("selected");
			$(this).addClass("selected");
			$('.endDatePanel').hide();
			$('.addPanel').show();
			$('.endDateProductsTableTip').hide();

			if(addProducts.length || endDateProducts.length){
				$('.addProductsTableTip').stop().hide();
			}
			else{
				$('.addProductsTableTip').stop().delay(6000).fadeIn();
			}

		});

		$('.panelWithTabs .endDate').on("click", function () {
			$(this).siblings('li').removeClass("selected");
			$(this).addClass("selected");
			$('.addPanel').hide();
			$('.endDatePanel').show();
			$('.addProductsTableTip').hide();

			if(addProducts.length || endDateProducts.length){
				$('.endDateProductsTableTip').hide();
			}
			else{
				$('.endDateProductsTableTip').delay(6000).fadeIn();
			}

		});
	},

	addProductsToTableModalAdd: function () {
		$('.addProductModal').hide();

		$('.addProductModal .fa-times, .cancel').on("click", function () {
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
						$('.saveProducts').removeClass('disabled');
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
						$('.saveProducts').removeClass('disabled');
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

		$('.selectProducts').addClass('disabled');
		$('.productsToAddTable').off("click", "tr");
		$('.productsToAddTable').on("click", "tr", function () {
			
			var check = $(this).find(".checkOne");

			if(check.prop("checked") == true){
				$(this).find(".checkOne").prop("checked", false);
			}
			else{
				$(this).find(".checkOne").prop("checked", true);
				$(this).css("background", "rgb(255, 240, 214)");
			}

			var check = $(".productsToAddTable").find('.checkOne').filter(function () {
				return $(this).is(":checked");
			});
				if(check.length){
					$('.selectProducts').removeClass('disabled');
				}
				else{
					$('.selectProducts').addClass('disabled');
				}
			});

		$('.remove').addClass('disabled');

		$(".selectedProductsTable").off("click", 'tr');
		$(".selectedProductsTable").on("click", 'tr', function () {
		var check = $(".selectedProductsTable").find('.checkOne').filter(function () {
			return $(this).is(":checked");
		});
			if(check.length){
				$('.remove').removeClass('disabled');
			}
			else{
				$('.remove').addClass('disabled');
			}
		});

		$('.productsToAddTable').off("click", ".checkOne");
		$('.productsToAddTable').on("click", ".checkOne", function () {
			
			var check = $(this);

			if(check.prop("checked") == true){
				$(this).prop("checked", false);
			}
			else{
				$(this).prop("checked", true);
				$(this).css("background", "rgb(255, 240, 214)");
			}

			var check = $(".productsToAddTable").find('.checkOne').filter(function () {
				return $(this).is(":checked");
			});
				if(check.length){
					$('.selectProducts').removeClass('disabled');
				}
				else{
					$('.selectProducts').addClass('disabled');
				}
			});

		$('.remove').addClass('disabled');

		$(".selectedProductsTable").off("click", 'tr');
		$(".selectedProductsTable").on("click", 'tr', function () {
		var check = $(".selectedProductsTable").find('.checkOne').filter(function () {
			return $(this).is(":checked");
		});
			if(check.length){
				$('.remove').removeClass('disabled');
			}
			else{
				$('.remove').addClass('disabled');
			}
		});


		$('.selectProducts').off("click");
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


		if (window.location.href.match('medicaid-wizard-4.html')) {
			$('.cancelValidation').hide();
			$(".validatedAlert").hide();
			$(".validateAlert").hide();
			$('.withdrawButton').hide();
			$('.validateButton').text('Revalidate');
			thisMassUpdate = JSON.parse(sessionStorage.getItem('thisMassUpdate'));
				if (thisMassUpdate.validated == "no") {
					$('.submitForApproval, .validateButton, .back').hide();
					$('.cancelValidation').show();
					$('.reviewTable').find('tr').css("opacity",".5");
					$('.reviewTable').find('td').css('color','black');
					$(".validateAlert").show();
					setTimeout( function () {
						thisMassUpdate = JSON.parse(sessionStorage.getItem('thisMassUpdate'));
						$('.validateButton').text('Revalidate');	
						thisMassUpdate.validated = "errors";
						sessionStorage.setItem('thisMassUpdate', JSON.stringify(thisMassUpdate));
						window.location.reload();
					}, 15000);
				}
				else if (thisMassUpdate.validated == "errors"){
					$('.validateButton').text('Revalidate');
					$(".validateAlert").show();
					$('.validatingIndicator').hide();
					$('.submitForApproval').addClass('disabled');
					$('.validateButton').removeClass('disabled');
				}
				else if (thisMassUpdate.validated == "yes"){
					$(".validatedAlert").show();
					$('.validatingIndicator').hide();
					$('.submitForApproval').removeClass('disabled');
					$('.validateButton').addClass('disabled');
				}
				else if(thisMassUpdate.validated == "submitted"){
					$('.submitForApproval').text('Continue to Approval Page').removeClass('disabled');
					$('.validateButton').addClass('disabled');
					$('.validatingIndicator').hide();
					$('.validateButton').hide();
					$('.withdrawButton').show();
				}

		} 




		$('.validateButton').on('click', function () {
			thisMassUpdate = JSON.parse(sessionStorage.getItem('thisMassUpdate'));
			if (thisMassUpdate.validated == "errors") {
				$('.validateButton').text('Validate');	
				thisMassUpdate.validated = "yes";
				sessionStorage.setItem('thisMassUpdate', JSON.stringify(thisMassUpdate));
				$('.submitForApproval').removeClass('disabled');					
				window.location.reload();
				}
				else if (thisMassUpdate.validated == "yes") {
					$('.validateButton').text('Validate');
					$('.alert').hide();	
				}
				else if (thisMassUpdate.validated == "submitted") {
					$('.submitForApproval').text('View Approval Status').removeClass('disabled');
					$('li[name="step6"]').removeClass('unvisited').addClass('visited').find('.number').html("<i class='listCheck fa fa-check'></i>");

					$('.submitForApproval').on('click', function () {
						window.location.href = "/medicaid/medicaid-wizard-5.html";
					});	
				}
		});		


		$('.submitForApproval').on('click', function () {
			thisMassUpdate = JSON.parse(sessionStorage.getItem('thisMassUpdate'));
			thisMassUpdate.validated = "submitted";
			thisMassUpdate.lastStep = 5;
			sessionStorage.setItem('thisMassUpdate', JSON.stringify(thisMassUpdate));
			window.location.href = "/medicaid/medicaid-wizard-5.html";
		});		
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
							if(thisMassUpdate[all][k].name == "Pennsylvania Medicaid" && thisMassUpdate.validated == "errors"){
							$('.reviewTable table').append("<tr><td></td><td class='fa fa-exclamation-triangle orange'></td><td>"+thisMassUpdate[all][k].addProducts[prod].ndc+"</td><td data="+thisMassUpdate[all][k].addProducts[prod].ndc+">"+thisMassUpdate[all][k].addProducts[prod].desc+"</td><td>"+thisMassUpdate[all][k].name+"</td><td>"+thisMassUpdate[all][k].start+" - "+thisMassUpdate[all][k].end+"</td><td class='editableIcon adjustStart'>"+thisMassUpdate[all][k].addProducts[prod].start+" <i class='fa fa-edit'></i></td><td class='editableIcon adjustEnd'>"+thisMassUpdate[all][k].addProducts[prod].end+" <i class='fa fa-edit'></i></td><td>"+thisMassUpdate[all][k].addProducts[prod].ura+"</td><td class='editableIcon adjustURA'>"+thisMassUpdate[all][k].addProducts[prod].ura+" <i class='fa fa-edit'></i></td><td>Add</td></tr>")
							}
							else if(thisMassUpdate.validated == "yes" || thisMassUpdate.validated == "submitted"){
							$('.reviewTable table').append("<tr><td></td><td></td><td>"+thisMassUpdate[all][k].addProducts[prod].ndc+"</td><td data="+thisMassUpdate[all][k].addProducts[prod].ndc+">"+thisMassUpdate[all][k].addProducts[prod].desc+"</td><td>"+thisMassUpdate[all][k].name+"</td><td>"+thisMassUpdate[all][k].start+" - "+thisMassUpdate[all][k].end+"</td><td class='editableIcon adjustStart'>"+thisMassUpdate[all][k].addProducts[prod].start+" <i class='fa fa-edit'></i></td><td class='editableIcon adjustEnd'>"+thisMassUpdate[all][k].addProducts[prod].end+" <i class='fa fa-edit'></i></td><td>"+thisMassUpdate[all][k].addProducts[prod].ura+"</td><td class='editableIcon adjustURA'>"+thisMassUpdate[all][k].addProducts[prod].ura+" <i class='fa fa-edit'></i></td><td>Add</td></tr>")
							}
							else if(thisMassUpdate.validated == "errors"){
							$('.reviewTable table').append("<tr><td></td><td></td><td>"+thisMassUpdate[all][k].addProducts[prod].ndc+"</td><td data="+thisMassUpdate[all][k].addProducts[prod].ndc+">"+thisMassUpdate[all][k].addProducts[prod].desc+"</td><td>"+thisMassUpdate[all][k].name+"</td><td>"+thisMassUpdate[all][k].start+" - "+thisMassUpdate[all][k].end+"</td><td class='editableIcon adjustStart'>"+thisMassUpdate[all][k].addProducts[prod].start+" <i class='fa fa-edit'></i></td><td class='editableIcon adjustEnd'>"+thisMassUpdate[all][k].addProducts[prod].end+" <i class='fa fa-edit'></i></td><td>"+thisMassUpdate[all][k].addProducts[prod].ura+"</td><td class='editableIcon adjustURA'>"+thisMassUpdate[all][k].addProducts[prod].ura+" <i class='fa fa-edit'></i></td><td>Add</td></tr>")
							}
							else if(thisMassUpdate.validated == "no"){
							$('.reviewTable table').append("<tr><td></td><td class='fa fa-exclamation-circle grey'></td><td>"+thisMassUpdate[all][k].addProducts[prod].ndc+"</td><td data="+thisMassUpdate[all][k].addProducts[prod].ndc+">"+thisMassUpdate[all][k].addProducts[prod].desc+"</td><td>"+thisMassUpdate[all][k].name+"</td><td>"+thisMassUpdate[all][k].start+" - "+thisMassUpdate[all][k].end+"</td><td class='editableIcon adjustStart'>"+thisMassUpdate[all][k].addProducts[prod].start+" <i class='fa fa-edit'></i></td><td class='editableIcon adjustEnd'>"+thisMassUpdate[all][k].addProducts[prod].end+" <i class='fa fa-edit'></i></td><td>"+thisMassUpdate[all][k].addProducts[prod].ura+"</td><td class='editableIcon adjustURA'>"+thisMassUpdate[all][k].addProducts[prod].ura+" <i class='fa fa-edit'></i></td><td>Add</td></tr>")
							}
						}
						for(prod in thisMassUpdate[all][k].endDateProducts){
							if(thisMassUpdate[all][k].name == "Pennsylvania Medicaid" && thisMassUpdate.validated == "errors"){
							$('.reviewTable table').append("<tr><td></td><td class='fa fa-exclamation-circle red'></td><td>"+thisMassUpdate[all][k].endDateProducts[prod].ndc+"</td><td data="+thisMassUpdate[all][k].endDateProducts[prod].ndc+">"+thisMassUpdate[all][k].endDateProducts[prod].desc+"</td><td>"+thisMassUpdate[all][k].name+"</td><td>"+thisMassUpdate[all][k].start+" - "+thisMassUpdate[all][k].end+"</td><td>"+thisMassUpdate[all][k].endDateProducts[prod].start+"</td><td class='editableIcon adjustEnd'>"+thisMassUpdate[all][k].endDateProducts[prod].end+" <i class='fa fa-edit'></i></td><td>"+thisMassUpdate[all][k].endDateProducts[prod].ura+"</td><td class='editableIcon adjustURA'>"+thisMassUpdate[all][k].endDateProducts[prod].ura+" <i class='fa fa-edit'></i></td><td>End-Date</td></tr>")
							}
							else if(thisMassUpdate.validated == "yes" || thisMassUpdate.validated == "submitted"){
							$('.reviewTable table').append("<tr><td></td><td></td><td>"+thisMassUpdate[all][k].endDateProducts[prod].ndc+"</td><td data="+thisMassUpdate[all][k].endDateProducts[prod].ndc+">"+thisMassUpdate[all][k].endDateProducts[prod].desc+"</td><td>"+thisMassUpdate[all][k].name+"</td><td>"+thisMassUpdate[all][k].start+" - "+thisMassUpdate[all][k].end+"</td><td>"+thisMassUpdate[all][k].endDateProducts[prod].start+"</td><td class='editableIcon adjustEnd'>"+thisMassUpdate[all][k].endDateProducts[prod].end+" <i class='fa fa-edit'></i></td><td>"+thisMassUpdate[all][k].endDateProducts[prod].ura+"</td><td class='editableIcon adjustURA'>"+thisMassUpdate[all][k].endDateProducts[prod].ura+" <i class='fa fa-edit'></i></td><td>End-Date</td></tr>")
							}
							else if(thisMassUpdate.validated == "errors"){
							$('.reviewTable table').append("<tr><td></td><td></td><td>"+thisMassUpdate[all][k].endDateProducts[prod].ndc+"</td><td data="+thisMassUpdate[all][k].endDateProducts[prod].ndc+">"+thisMassUpdate[all][k].endDateProducts[prod].desc+"</td><td>"+thisMassUpdate[all][k].name+"</td><td>"+thisMassUpdate[all][k].start+" - "+thisMassUpdate[all][k].end+"</td><td>"+thisMassUpdate[all][k].endDateProducts[prod].start+"</td><td class='editableIcon adjustEnd'>"+thisMassUpdate[all][k].endDateProducts[prod].end+" <i class='fa fa-edit'></i></td><td>"+thisMassUpdate[all][k].endDateProducts[prod].ura+"</td><td class='editableIcon adjustURA'>"+thisMassUpdate[all][k].endDateProducts[prod].ura+" <i class='fa fa-edit'></i></td><td>End-Date</td></tr>")
							}
							else if(thisMassUpdate.validated == "no"){
							$('.reviewTable table').append("<tr><td></td><td class='fa fa-exclamation-circle grey'></td><td>"+thisMassUpdate[all][k].endDateProducts[prod].ndc+"</td><td data="+thisMassUpdate[all][k].endDateProducts[prod].ndc+">"+thisMassUpdate[all][k].endDateProducts[prod].desc+"</td><td>"+thisMassUpdate[all][k].name+"</td><td>"+thisMassUpdate[all][k].start+" - "+thisMassUpdate[all][k].end+"</td><td>"+thisMassUpdate[all][k].endDateProducts[prod].start+"</td><td class='editableIcon adjustEnd'>"+thisMassUpdate[all][k].endDateProducts[prod].end+" <i class='fa fa-edit'></i></td><td>"+thisMassUpdate[all][k].endDateProducts[prod].ura+"</td><td class='editableIcon adjustURA'>"+thisMassUpdate[all][k].endDateProducts[prod].ura+" <i class='fa fa-edit'></i></td><td>End-Date</td></tr>")
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













 