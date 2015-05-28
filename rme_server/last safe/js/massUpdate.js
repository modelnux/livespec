$(document).ready(function() {

$('.mainBody').layout({applyDefaultStyles: true, resizable: true, slidable: true});

tableMethods.loadContracts();
tableMethods.loadCustomers();
tableMethods.loadMassUpdates();
tableMethods.loadPrograms();
tableMethods.loadProducts();
tableMethods.loadProductsToAdd();
tableMethods.loadViewResults();

$(".popover-large-left").hide();
$(".popover-small-right").hide();
$(".popover-small-left").hide();
$(".popover-small-right ").hide();


var tableBehavior = {

	checkOne: function () {
		$('body').on("click", '.checkOne', function(){
		    if($(this).is(":checked")){
		        $(this).closest("tr").css({"background":"#FFF0D6"});
		    }
		    else if($(this).is(":not(:checked)")){
		        $(this).closest("tr").css({"background":"none"});
		    }
		});
	},

	checkAll: function () {
		$('.checkAll').on("click", function () {
		    if($(this).is(":checked")){
		        $(this).closest("tr").siblings('tr').css({"background":"#FFF0D6"}).find(".checkOne").prop('checked', true);;
		    }
		    else if($(this).is(":not(:checked)")){
		        $(this).closest("tr").siblings('tr').css({"background":"none"}).find(".checkOne").prop('checked', false);;
		    }
		});
	},

	contractTableLink: function () {
		$('.contractTable').on("click", '.id', function () {
			window.location.href = 'http://alexsaw.com/rme/contract-read-only.html';
		});
	},

	customerTableLink: function () {
		$('.customerTable').on("click", '.id', function () {
			window.location.href = 'http://alexsaw.com/rme/customer-read-only.html';
		});
	}
};

var leftNavBehavior = {

	moreLess: function () {
		
	},

	contentsList: function () {
		$('.subsection ul').hide();
		$('.active').next('ul').show();
		$('.subsection h3').on("click", function () {
			if ($(this).next('ul').css('display') == 'none') {
				$('.subsection h3').removeClass('active');
				$('.subsection h3').next('ul').slideUp(200);
				$('.subsection h3').children('i').addClass('fa-caret-right').removeClass('fa-caret-down');
				$(this).next('ul').slideDown(200);
				$(this).addClass('active');
				$(this).children('i').addClass('fa-caret-down').removeClass('fa-caret-right');
			}
			else {
				$(this).next('ul').slideUp(200);
				$(this).children('i').addClass('fa-caret-right').removeClass('fa-caret-down');
				$(this).removeClass('active');
			}
		});
	}
};

var clickNav = {

	contracts: function () {
		$('.subsection .search-btn, .contracts').on("click", function () {
			window.location.href = 'http://alexsaw.com/rme/contract-search.html';
		});
	},
	home: function () {
		$('.home, .alerts').on("click", function () {
			window.location.href = 'http://alexsaw.com/rme/home.html';
		});		
	},
	customers: function () {
		$('.customers').on("click", function () {
			window.location.href = 'http://alexsaw.com/rme/customer-search.html';
		});
	},
	edit: function  () {
		$('.edit').on("click", function () {
			if ( window.location.href.match('contract-read-only.html') ) {
				window.location.href = 'http://alexsaw.com/rme/contract-input.html';
			}
			else {
				window.location.href = 'http://alexsaw.com/rme/customer-input.html';
			}
		});
	},
	read: function  () {
		$('.read').on("click", function () {
			if ( window.location.href.match('contract-input.html') ) {
				window.location.href = 'http://alexsaw.com/rme/contract-read-only.html';
			}
			else {
				window.location.href = 'http://alexsaw.com/rme/customer-read-only.html';
			}
		});
	},
	close: function  () {
		$('.closeTable').on("click", function () {
			if ( window.location.href.match('contract-input.html') || window.location.href.match('contract-read-only.html') ) {
				window.location.href = 'http://alexsaw.com/rme/contract-search.html';
			}
			else {
				window.location.href = 'http://alexsaw.com/rme/customer-search.html';
			}
		});
	},
	back: function  () {
		$('.back').on("click", function () {
			window.history.back();
		});
	},
	refresh: function  () {
		$('.refresh').on("click", function () {
			location.reload();
		});
	}
}


clickNav.customers();
clickNav.contracts();
clickNav.home();
clickNav.edit();
clickNav.read();
clickNav.close();
clickNav.back();
clickNav.refresh();


tableBehavior.checkOne();
tableBehavior.checkAll();
tableBehavior.customerTableLink();
tableBehavior.customerTableLink();
tableBehavior.contractTableLink();

leftNavBehavior.contentsList();

MassUpdateFunctions.firstStep();
MassUpdateFunctions.secondStep();
MassUpdateFunctions.linkedWizardTitles();
MassUpdateFunctions.selectProductsTabs();
MassUpdateFunctions.addProductsToTableModalAdd();
MassUpdateFunctions.addProductsToTableModalEndDate();
MassUpdateFunctions.selectProductsToAddInModal();
MassUpdateFunctions.thirdStep();
MassUpdateFunctions.validationErrorModalActions();
MassUpdateFunctions.populateProductTables();
MassUpdateFunctions.createNewMassUpdate();
MassUpdateFunctions.selectMassUpdateFromSearch();
MassUpdateFunctions.cancel();
MassUpdateFunctions.populateReviewAndModify();
MassUpdateFunctions.actionButtonsOnLeftPanel.massUpdate();
MassUpdateFunctions.runValidation();
MassUpdateFunctions.removeProductsFromEndDateTable();
MassUpdateFunctions.finishMassUpdate();


$(".loader").delay(1500).fadeOut("slow");
}); // document.ready