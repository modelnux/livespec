// styleguide module
var mnApp = angular.module("mnApp", []);

// LeftNav Controller
mnApp.controller("navMenu", function ($scope, $http) {

	$scope.products = [
					{name: "Website"},
					{name: "Revvy"},
					{name: "RME"},
					{name: "Salesforce"}
					];

	$scope.productCats = [
					{name: "Guidelines",
					 subcat1: "Layout",
					 subcat2: "Headers",
					 subcat3: "Lists",
					 subcat4: "Tables",
					 subcat5: "Icons"
					},
					{name: "Color Palette"},
					{name: "Typography"},
					{name: "Background"},
					{name: "Basic Components", 
					 subcat1: "Buttons",
					 subcat2: "Switches",
					 subcat3: "Forms"
					},
					{name: "Javascript",
						subcat1: "Tooltip",
						subcat2: "Dropdown",
						subcat3: "Special Widgets",
						subcat4: "Modals",
						subcat5: "Tabs"
					},
					{name: "Notificiations",
						subcat1: "System Error",
						subcat2: "Application Error",
						subcat3: "Application Status"
					},
					];

	$scope.getPage = function (id, prod) {
		$http.get("/pages/"+prod+"/"+id)
		.success( function (res) {	
			var prod = encodeURIComponent(res.prod);
			var id = encodeURIComponent(res.id);
			console.log("/pages/"+prod+"/"+id+".html");
			$('#center-body').empty().load("pages/"+prod+"/"+id+".html");
			// innject response variable to make a part of the SPA visible using ng-show!!!
		});
	}

	$scope.getPageSub = function (id, idcat, prod) {
		$http.get("/pages/"+prod+"/"+idcat+"/"+id)
		.success( function (res) {	
			var prod = encodeURIComponent(res.prod);
			var id = encodeURIComponent(res.id);
			var idcat = encodeURIComponent(res.idcat);	
			console.log("/pages/"+prod+"/"+idcat+"/"+id+".html");
			$('#center-body').empty().load("pages/"+prod+"/"+idcat+"/"+id+".html");
			// innject response variable to make a part of the SPA visible using ng-show!!!
		});
	}
});

//rightNav Controller
mnApp.controller("rightNav", function () {

});
