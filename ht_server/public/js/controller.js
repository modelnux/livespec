var tableMethods = {

	//add product to basket if selected in quote page
	loadTable: function () {
		$.getJSON('js/data.json', function (data) {
			sessionStorage.setItem('data', JSON.stringify( data ));
		}).done(function () {
			var data = JSON.parse(sessionStorage.getItem('data'));
			for (var i = data.length - 1; i >= 0; i--) {
			$('.customerTable table').append("<tr><td class='analytics'><i class='fa fa-line-chart'></i></td><td>"+data[i].actions+"</td><td>"+data[i].a+"</td><td>"+data[i].corpId+"</td><td>"+data[i].accountNo+"</td><td>"+data[i].status+"</td><td>"+data[i].customer+"</td><td>"+data[i].city+"</td><td>"+data[i].state+"</td><td>"+data[i].zip+"</td><td>"+data[i].country+"</td><td>"+data[i].segment+"</td><td>"+data[i].category+"</td><td>"+data[i].type+"</td><td>"+data[i].channel+"</td><td>"+data[i].parent+"</td><td>"+data[i].customerLevel+"</td></tr>")
			};
		});

	},
};
