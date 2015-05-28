//UI Treatments and movement
$(document).ready(function () {

//left-nav accordian
	
	$('.product-name').siblings('div').hide();
	$('.product-cat').siblings('.subcat-group').hide();

		$('.product-name').on("click", function() {
			$(this).siblings('.cats-group').slideToggle(500, "easeOutBack");
		});
	

		$('.product-cat').on("click", function() {
				if ($(this).siblings().children().length) {
					$(this).siblings('.subcat-group').slideToggle(500, "easeOutBack");
				}
		});

//scrollbar
	// $(".left-nav").mCustomScrollbar();
	// $(".centerBody").mCustomScrollbar();


//guidelines image nav

$('.sectionDesc').hide();

var guidelinesNav = {

	header: function  () {
		$('.header').on('mouseover', function () {
			$('.sectionDesc p').text('Header');
			$('.sectionDesc').show();
		});

		$('.header').on("mouseleave", function() {
			$('.sectionDesc').hide();
		});

		$('.header').on("click", function () {
			
		});
	},

	nav: function  () {
		$('.nav').on('mouseover', function () {
			$('.sectionDesc p').text('Navigation');
			$('.sectionDesc').show();
		});

		$('.nav').on("mouseleave", function() {
			$('.sectionDesc').hide();
		});

		$('.nav').on("click", function () {
			
		});
	},
	
	forms: function  () {
		$('.forms').on('mouseover', function () {
			$('.sectionDesc p').text('Forms');
			$('.sectionDesc').show();
		});

		$('.forms').on("mouseleave", function() {
			$('.sectionDesc').hide();
		});

		$('.forms').on("click", function () {
			
		});
	},

	buttons: function  () {
		$('.buttons').on('mouseover', function () {
			$('.sectionDesc p').text('Buttons');
			$('.sectionDesc').show();
		});

		$('.buttons').on("mouseleave", function() {
			$('.sectionDesc').hide();
		});

		$('.buttons').on("click", function () {
			
		});
	},

	tables: function  () {
		$('.tables').on('mouseover', function () {
			$('.sectionDesc p').text('Tables');
			$('.sectionDesc').show();
		});

		$('.tables').on("mouseleave", function() {
			$('.sectionDesc').hide();
		});

		$('.tables').on("click", function () {
			
		});
	},

	leftNavfooter: function  () {
		$('.leftNav').on('mouseover', function () {
			$('.sectionDesc p').text('Left Navigation');
			$('.sectionDesc').show();
		});

		$('.leftNav').on("mouseleave", function() {
			$('.sectionDesc').hide();
		});

		$('.leftNav').on("click", function () {
			
		});
	},

	icons: function  () {
		$('.icons').on('mouseover', function () {
			$('.sectionDesc p').text('Icons');
			$('.sectionDesc').show();
		});

		$('.icons').on("mouseleave", function() {
			$('.sectionDesc').hide();
		});

		$('.icons').on("click", function () {
			
		});
	},

	footer: function  () {
		$('.footer').on('mouseover', function () {
			$('.sectionDesc p').text('Footer');
			$('.sectionDesc').show();
		});

		$('.footer').on("mouseleave", function() {
			$('.sectionDesc').hide();
		});

		$('.footer').on("click", function () {
			
		});
	},

	images: function  () {
		$('.images').on('mouseover', function () {
			$('.sectionDesc p').text('Images');
			$('.sectionDesc').show();
		});

		$('.images').on("mouseleave", function() {
			$('.sectionDesc').hide();
		});

		$('.images').on("click", function () {
			
		});
	}
};

guidelinesNav.header();
guidelinesNav.nav();
guidelinesNav.forms();
guidelinesNav.buttons();
guidelinesNav.tables();
guidelinesNav.leftNavfooter();
guidelinesNav.icons();
guidelinesNav.footer();
guidelinesNav.images();

});

