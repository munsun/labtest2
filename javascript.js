$(document).ready(function () {

	$('#button1').on("click", function () {
		if ($('#logo1 img').attr('src') == 'images/turnon.png') {
			$('#logo1 img').attr('src', 'images/turnoff.png');
			$('#logo2 img').attr('src', 'images/turnoff.png');
		} else {
			$('#logo1 img').attr('src', 'images/turnon.png');
			$('#logo2 img').attr('src', 'images/turnon.png');
		}
	});

	$('#button2').on("click", function () {
		$('#button1').css('color', 'green');
		$('#button2').css('color', 'blue');
		$('#button3').css('color', 'yellow');
		$('h1').css('font-family', 'Verdana, sans-serif');
	});

	$('#button3').on("click", function () {
		$('#mainnav').css({
			'width': '800px',
			'opacity': '0.75'
		});
	});

	$('#double').on("click", function () {
		var dblText = $('#double-textarea')
		if (dblText.val().length == 0) {
			alert("Input cannot be blank");
		} else if(isNaN(parseInt(dblText.val()))){
			alert("Input should be a number");
		} else {
			var num = parseInt(dblText.val());
			dblText.val(num * 2);
		}
	});

	$('#check').on("click", function () {
		var numbers = document.getElementsByName('numberValues');
		var valid = true;

		for (var i = 0; i < numbers.length; i++) {
			var numText = $(numbers[i]);
			if (numText.val().length == 0) {
				alert("Input cannot be blank");
				valid = false;
				break;
			} else if (isNaN(parseInt(numText.val()))) {
				alert("Input should be a number");
				valid = false;
				break;
			}
		}

		 if (valid) {
		 	if(divisionValueIsValid()){
		 		var divisionNum = parseInt($('#division-value').val());
		 		var isAllZero = true;
		 		for (var i = 0; i < numbers.length; i++) {
		 			var numText = $(numbers[i]);
		 			var num = parseInt(numText.val());
		 			var result = num % divisionNum;
		 			if (result != 0 && isAllZero) {
		 				isAllZero = false;
		 			}
		 			numText.val(result);
		 		}

		 		if (isAllZero) {
		 			alert("Each number divided by Division Value gets a remainder of 0");
		 		} else {
		 			alert("Not all of these number divided by Division Value gets a remainder of 0");
		 		}
		 	}
		}
		
	});

	var divisionValueIsValid = function () {
		if ($('#division-value').val().length == 0) {
			alert("Division value cannot be blank");
			return false;
		} else if (isNaN(parseInt($('#division-value').val()))) {
			alert("Division should be a number");
			return false;
		}
		else if (parseInt($('#division-value').val()) <= 0) {
			alert("Division value should only be positive!");
			return false;
		}

		return true;
	}
});
