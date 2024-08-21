$(function () {

	$(".overlay").hide();
	$(".work_detail").hide();

	//smooth_scroll
	$('a[href^="#"]:not([href="#"])').click(function () {

		var target = $($(this).attr("href")).offset().top;

		$("html,body").animate({ scrollTop: target }, 500);

		return false;
	});

	//scroll_anime
	$(window).scroll(function () {
		const windowHeight = $(window).height();
		const scroll = $(window).scrollTop();

		$('.element').each(function () {
			const targetPosition = $(this).offset().top;
			if (scroll > targetPosition - windowHeight + 100) {
				$(this).addClass("is-fadein");
			}
		});
	});

	$(".work_item_top").click(function () {
		$(this).next(".overlay").fadeIn().next(".work_detail").fadeIn();

		$(".overlay").click(function (event) {
			if (!$(event.target).closest(".work_detail").length) {
				$(".work_detail").fadeOut();
				$(this).fadeOut();
			}
			return false;
		});
		return false;
	});

});



