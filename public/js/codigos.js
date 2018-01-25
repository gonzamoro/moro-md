/*function efectos()
{
	$('.fancybox').fancybox()
}

$(document).on('ready', efectos)*/


$(document).ready(function() {
	$(".galeria").fancybox({
		maxWidth  : 800,
		padding:0,
		openEffect	: 'fade',
		closeEffect	: 'fade'
	});
	$(".fancybox-media").fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});
});
