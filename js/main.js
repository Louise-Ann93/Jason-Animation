$(document).ready(function() {

	$(".day-1").click(function(){
		if ($("#thought").hasClass('thought')) {
			$("#thought").removeClass('thought').addClass('thought-clear');
		} else {
			$("#thought").removeClass('thought-clear').addClass('thought');
		}
		if ($('.button-1').hasClass('invisible')) {
			$(".button-1").removeClass('invisible')
		} else {
			$(".button-1").addClass('invisible')
		}
	});

	$(".day-2").click(function(){
		if ($("#thought").hasClass('thought')) {
			$("#thought").removeClass('thought').addClass('thought-clear');
		} else {
			$("#thought").removeClass('thought-clear').addClass('thought');
		}
		if ($('.button-2').hasClass('invisible')) {
			$(".button-2").removeClass('invisible')
		} else {
			$(".button-2").addClass('invisible')
		}
	});

	$(".day-3").click(function(){
		if ($("#thought").hasClass('thought')) {
			$("#thought").removeClass('thought').addClass('thought-clear');
		} else {
			$("#thought").removeClass('thought-clear').addClass('thought');
		}
		if ($('.button-3').hasClass('invisible')) {
			$(".button-3").removeClass('invisible')
		} else {
			$(".button-3").addClass('invisible')
		}
	});

	$(".day-4").click(function(){
		if ($("#thought").hasClass('thought')) {
			$("#thought").removeClass('thought').addClass('thought-clear');
		} else {
			$("#thought").removeClass('thought-clear').addClass('thought');
		}
		if ($('.button-4').hasClass('invisible')) {
			$(".button-4").removeClass('invisible')
		} else {
			$(".button-4").addClass('invisible')
		}
	});

	$(".day-5").click(function(){
		if ($("#thought").hasClass('thought')) {
			$("#thought").removeClass('thought').addClass('thought-clear');
		} else {
			$("#thought").removeClass('thought-clear').addClass('thought');
		}
		if ($('.button-5').hasClass('invisible')) {
			$(".button-5").removeClass('invisible')
		} else {
			$(".button-5").addClass('invisible')
		}
	});

	$(".day-6").click(function(){
		if ($("#thought").hasClass('thought')) {
			$("#thought").removeClass('thought').addClass('thought-clear');
		} else {
			$("#thought").removeClass('thought-clear').addClass('thought');
		}
		if ($('.button-6').hasClass('invisible')) {
			$(".button-6").removeClass('invisible')
		} else {
			$(".button-6").addClass('invisible')
		}
	});

	$(".day-7").click(function(){
		if ($("#thought").hasClass('thought')) {
			$("#thought").removeClass('thought').addClass('thought-clear');
		} else {
			$("#thought").removeClass('thought-clear').addClass('thought');
		}
		if ($('.button-7').hasClass('invisible')) {
			$(".button-7").removeClass('invisible')
		} else {
			$(".button-7").addClass('invisible')
		}
	});


	// $(".day-2").click(function(){
	// 	if ($('#sky').hasClass('storm')) {
	// 		$(".clear-sky").css("animation-play-state", "running");
	// 		$("#sky").removeClass('storm').addClass('clear-sky')
	// 	} else {
	// 		$(".storm").css("animation-play-state", "running");
	// 		$("#sky").removeClass('clear-sky').addClass('storm')
	// 	}
	// });
});
