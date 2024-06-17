$(function() {
	$(window).bind('scroll', function() {
		if ($(window).scrollTop() <= 500) {
			$('.UpIcon').hide();
			$('.HomeIcon').removeClass('yellow')
		} else {
			$('.UpIcon').show();
			$('.HomeIcon').addClass('yellow')
		}
	});
	/* UpIcon */
	$('.UpIcon').bind("click", function() {
		$('html, body').animate({
			scrollTop: 0
		}, 300);
	});

	$('#UL01 li').bind("click", function() {
		let index = $(this).index();
		console.log(index);
		$(this).addClass('view_active').siblings().removeClass('view_active');
		$("#UL01-1 .view_Tab_ul02_box").eq(index).show().siblings().hide();
	});
	$('#UL02 li').bind("click", function() {
		let index = $(this).index();
		console.log(index);
		$(this).addClass('view_active').siblings().removeClass('view_active');
		$("#UL02-2 .view_Tab_ul02_box").eq(index).show().siblings().hide();
	});

	$('.UL04 li').bind("click", function() {
		let index = $(this).index();
		console.log(index);
		$(this).addClass('more_tab_ul01_active').siblings().removeClass('more_tab_ul01_active');
		$(".UL3-3 li").eq(index).show().siblings().hide();
	});




});

function ToTwo() {
	var current = $("#index_second_box").offset().top;
	console.log(current)
	//页面滚动效果
	$("body,html").stop().animate({
		scrollTop: current,
	});
}

function ViewPage() {
	var current = $("#ViewPage-Main").offset().top;
	console.log(current)
	//页面滚动效果
	$("body,html").stop().animate({
		scrollTop: current,
	});
};

function FoodPage() {
	var current = $("#FoodPage-Main").offset().top;
	console.log(current)
	//页面滚动效果
	$("body,html").stop().animate({
		scrollTop: current,
	});
};


$(
	function() {
		let isShowList = false;
		$('#ListIcon').click(function() {
			isShowList = !isShowList
			if (isShowList == true) {
				$('#ListBox').show().fadeIn();
			} else {
				$('#ListBox').hide().fadeOut();
			}
		});
	}
)


