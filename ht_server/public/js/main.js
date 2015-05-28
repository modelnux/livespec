$(document).ready(function() {

tableMethods.loadTable();

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

	tableLink: function () {
		$('body').on("click", '.contractId', function () {
			window.location.href = 'contract-read-only.html';
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


tableBehavior.checkOne();
tableBehavior.checkAll();
tableBehavior.tableLink();

leftNavBehavior.contentsList();

$(".loader").delay(700).fadeOut("fast");
}); // document.ready