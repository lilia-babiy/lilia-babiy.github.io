



$(document).ready(function() {

	$('#sl_01').slick({
        autoplay:false,
        autoplaySpeed:3000,
		arrows:true,
		dots:false,
        pauseOnDotsHover:true,
		slidesToShow:4,
		speed:350,
		responsive:[
			{
				breakpoint: 769,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 640,
				settings: {
                    slidesToShow:1
				}
			}
		]
	});

	$('#sl_02').slick({
        autoplay:false,
        autoplaySpeed:3000,
		arrows:true,
		dots:false,
        pauseOnDotsHover:true,
		slidesToShow:4,
		speed:350,
		responsive:[
			{
				breakpoint: 769,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 640,
				settings: {
                    slidesToShow:1
				}
			}
		]
	});
});


