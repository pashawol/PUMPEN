const $ = jQuery;
const btnToggle = $(".toggle-menu-mobile--js"),
	menu = $(".menu-mobile--js")

function 	eventHandler() {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});
	JSCCommon.modalCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

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
		prevArrow: arrr2,
		nextArrow: arrl2,
		// autoplay: true,
		autoplaySpeed: 6000,
		lazyLoad: 'ondemand',
	};
	$('.s-gal__slider--js').slick({
		...defaultSlide,
		
		slidesToShow: 1,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
					arrows: false,
			}
		}, {
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
					arrows: false,
			}

		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
				arrows: true,
			}


		}],
		
	});


	$('.s-catalog__slider--js').slick({
		...defaultSlide,
		
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
	 
	 
	$(".top-nav__btn-search--js").click(function(){
		$(".search-block").slideToggle();
	})
	};
	// /form
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
		// $('.popup-with-move-anim').magnificPopup({
		// 	type: 'inline',

		// 	fixedContentPos: true,
		// 	fixedBgPos: true,

		// 	overflowY: 'auto',

		// 	closeBtnInside: true,
		// 	preloader: false,

		// 	midClick: true,
		// 	removalDelay: 300,
		// 	mainClass: 'my-mfp-zoom-in',
		// 	tClose: 'Закрыть (Esc)',
		// }); 
		// // / modal window 
		// // modal галерея
		// $(".gal").each(function () {

		// 	$(this).find("a").magnificPopup({
		// 		type: 'image',
		// 		closeOnContentClick: false,
		// 		closeBtnInside: false,
		// 		mainClass: 'mfp-with-zoom mfp-img-mobile',
		// 		tClose: 'Закрыть (Esc)',
		// 		image: {
		// 			verticalFit: true,
		// 			// titleSrc: function(item) {
		// 			//   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
		// 			// }

		// 		},
		// 		gallery: {
		// 			enabled: true,
		// 			tPrev: 'Назад (Кнопка влева)', // title for left button
		// 			tNext: 'Вперед (Кнопка вправа)', // title for right button
		// 			tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
		// 		}
		// 	});
		// })
		// // /modal галерея


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