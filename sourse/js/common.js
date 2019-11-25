const $ = jQuery;
const btnToggle = $(".toggle-menu-mobile--js"),
	menu = $(".menu-mobile--js"),
  btnOpenBasket = $(".basket-add"),
  btnCloseBasket = $(".basket-close"),
	basket = $(".basket-side--js")

function eventHandler() {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});
	JSCCommon.modalCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();
	
	
	JSCCommon.basketMenu();

	JSCCommon.inputMask();

	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/main.jpg);"></div>')
	// /добавляет подложку для pixel perfect



	// const url = document.location.href;
	// $.each($(".top-nav__nav a "), function () {

	// 	if (this.href == url) {
	// 		if ($(this).hasClass("top-nav__link") == true) {

	// 			$(this).addClass('top-nav__link-active');
	// 		}
	// 		if ($(this).hasClass("footer__link") == true) {

	// 			$(this).addClass('footer__link-active');
	// 		} 
	// 	}; 
	// }); 

	// /закрыть/открыть мобильное меню

	function heightses() {

		const w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		const topH = $("header ").innerHeight();

		$(window).scroll(function () {
			if ($(this).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});
		// конец добавил
		if (window.matchMedia("(min-width: 1200px)").matches) {

			btnToggle.removeClass("on");
			// $("body").removeClass("fixed");
			menu.removeClass("active");
			$("body").removeClass("fixed");
		}
	}

	$(window).resize(function () {
		heightses();

	});

	heightses();

	// листалка по стр
	$(" .top-nav li a, .scroll-link").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});

	const icon = '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path>';
	const arrl2 = (' <div class="r">' + icon),
		arrr2 = (' <div class="l">' + icon);
	// // карусель

	const defaultSlide = {
		speed: 600,
		infinite: true,
		loop: true,
		arrows: true,
		mobileFirst: true,
		// prevArrow: arrr2,
		// nextArrow: arrl2,
		// autoplay: true,
		autoplaySpeed: 6000,
		lazyLoad: 'ondemand',
	};
	$('.footer__slider--js').slick({
		...defaultSlide,
		fade: true,
		prevArrow: $('.footer__slider-prev'),
		nextArrow: $('.footer__slider-next'),
		asNavFor: '.footer__slider-date--js',
		slidesToShow: 1,
	});
	$('.footer__slider-date--js').slick({
		...defaultSlide,
		fade: true,
		prevArrow: $('.footer__slider-prev'),
		nextArrow: $('.footer__slider-next'),
		asNavFor: '.footer__slider--js',
		slidesToShow: 1,
	});


	$('.s-catalog__slider--js').slick({
		...defaultSlide,
			autoplay: true,
			autoplaySpeed: 6000,
		slidesToShow: 2,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 6,
					arrows: false,
					dots: false,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					arrows: false,
					dots: false,
				}
			},

			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					arrows: false,

				}

			}, {
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}


			}],

	});
	$('.s-product-builder__main-slider--js').slick({
		speed: 600,
		infinite: true,
		loop: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
		mobileFirst: true,
		asNavFor: '.s-product-builder__side-slider--js',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: false,
				}
			}],
	});
	$('.s-product-builder__side-slider--js').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: false,
		vertical: true,
		verticalSwiping: true,
		focusOnSelect: true,
		asNavFor: '.s-product-builder__main-slider--js'
	});

	$('.s-gall__main-slider--js').slick({
		speed: 600,
		infinite: true,
		loop: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
		mobileFirst: true,
		asNavFor: '.s-gall__side-slider--js',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: false,
				}
			}],
	});
	
	$('.s-gall__side-slider--js').slick({
		mobileFirst: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		speed: 450,
		infinite: true,
		loop: true,
		arrows: false,
		vertical: true,
		verticalSwiping: true,
		focusOnSelect: true,
		asNavFor: '.s-gall__main-slider--js',
		responsive: [
			{
				breakpoint: 1240,
				settings: {
					slidesToShow: 4,
				}
			}],
	});

	$('.s-page-slider__slider--js').slick({
		speed: 600,
		infinite: true,
		loop: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		// fade: true,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: false,
				}
			}],
	});

	$(".top-nav__btn-search--js").click(function () {
		$(".search-block").slideToggle();
	})

	$(".accordion__toggle").click(function () {
		$(this).parents().toggleClass("active")
		$(this).toggleClass("active").next().slideToggle();
	})

	$(".acc-head").click(function () {
		$(this).next('.acc-body').slideToggle();
	})


	$(".s-prod-descr__btn--js").click(function () {
		$(this).parents('.s-prod-descr__main-col').find('.text-hidden').slideToggle();
	})
	
	
	$(".s-questions__btn--js").click(function () {
		$(this).parents('.s-questions__row').find('.s-questions__text-disabled').slideToggle();
	})

	$('.dropdown-menu').click(function (e) {
		e.stopPropagation();
	});


	if ($("img").is(".zoom-block-js")) {

		// zoom-image
		var jcWheelZoom = JcWheelZoom.create('.zoom-block-js', {
			prepare: function (scale, correct_x, correct_y) {
				// do something when image prepared
			},
			rescale: function (scale, correct_x, correct_y, min_scale) {
				// do something image rescaled
			}
		});
		window.addEventListener('resize', function () {
			jcWheelZoom.prepare();
		})
		document.getElementById('zoom_up').addEventListener('click', function () {
			jcWheelZoom.zoomUp();
		});

		document.getElementById('zoom_down').addEventListener('click', function () {
			jcWheelZoom.zoomDown();
		});
		
		document.getElementById('zoom_none').addEventListener('click', function () {
			jcWheelZoom.prepare();
		});
		
	}
};
 
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}
const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	// функции для запуска lazy


	// /LazyFunction

	modalCall() {

		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			// type : 'inline',
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
	},
	// /magnificPopupCall
	mobileMenu() {
		// закрыть/открыть мобильное меню

		btnToggle.click(function () {

			btnToggle.toggleClass("on");
			// $("body").toggleClass("fixed");
			menu.toggleClass("active");
			$("body, html").toggleClass("fixed");
			return false;
		});
		// $('.menu-mobile--js ul li a').on('click', function () {
		// 	$(".menu-mobile--js .toggle-mnu").click();
		// });

		$(document).mouseup(function (e) {
			const container = $(".menu-mobile--js.active");
			if (container.has(e.target).length === 0) {
				btnToggle.removeClass("on");
				// $("body").toggleClass("fixed");
				menu.removeClass("active");
				$("body, html").removeClass("fixed");
			}
		});
		$(".sub-menu").each(function () {
			$(this).after('<div class="toggle-l"></div>');
		})

		$(document).on('click', '.toggle-l', function () {
			$(this).prev().slideToggle()
			return false;
		})
	},
	// /mobileMenu
	basketMenu() {
		// закрыть/открыть корзину

		btnOpenBasket.click(function () {

			// btnOpenBasket.toggleClass("on");
			// $("body").toggleClass("fixed");
			basket.toggleClass("active");
			$("body, html").toggleClass("fixed-b");
			return false;
		});
		btnCloseBasket.click(function () {

			// btnOpenBasket.toggleClass("on");
			// $("body").toggleClass("fixed");
			basket.toggleClass("active");
			$("body, html").toggleClass("fixed-b");
			return false;
		});

		$(document).mouseup(function (e) {
			const containerBasket = $(".basket-side--js.active");
			if (containerBasket.has(e.target).length === 0) {
				// btnOpenBasket.removeClass("on");
				// $("body").toggleClass("fixed");
				basket.removeClass("active");
				$("body, html").removeClass("fixed-b");
			}
		});
	},
	// /mobileMenu

	// табы  . 
	tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});
	},
	// /табы  . 


	// /nlineSVG
	// CustomInputFileCustomInputFile() {
	// 	const file = $(".add-file input[type=file]");
	// 	file.change(function () {
	// 		const filename = $(this).val().replace(/.*\\/, "");
	// 		const name = $(".add-file__filename  ");
	// 		name.text(filename);

	// 	});
	// },

	// /CustomYoutubeBlock
	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+7(999)999-99-99");
	}
	// /inputMask

};

// JSCCommon.LazyFunction();
/***/
