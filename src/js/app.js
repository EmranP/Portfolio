import * as flsFunctions from "./modules/functions.js";
import { isMobile } from "./menu__burger.js";
import Swiper, { Navigation, Pagination } from 'swiper';


flsFunctions.isWebp();

const swiper = new Swiper();

$(function () {
	let layoutContainer = $('.layout-container')
	$(".btn-base, .btn-about, .btn-header").on('click', function () {
		layoutContainer.css('display', 'flex')
	});

	layoutContainer.on('click', function (e) {
		if (this === e.target) {
			layoutContainer.css('display', 'none')
		}
	});

	$('.layout button').on('click', function () {
		let request = {
			'name': $('.layout input[name="name"]').val(),
			'email': $('.layout input[name="email"]'.val())
		};

		$.post('/api.php', request, function (response) {
			if (response == '1') {
				layoutContainer.css('display', 'none')
			} else {
				alert("text don't work")
			}
		});
	});
});

// ScrollTop

$(document).ready(function () {
	$('#scroll-top').click(function () {
		$("html,body").animate({ scrollTop: 0 }, 1500); return false;
	}).fadeOut(0);
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('#scroll-top').fadeIn();
		} else {
			$('#scroll-top').fadeOut();
		}
	});
});
AOS.init();
