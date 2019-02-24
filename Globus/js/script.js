	$(function() {

		$(".fancybox").fancybox();

	});


            // Анимация на jQuery начало
	$(function() {

        $('.jquery-box').on('click', function() {
            $(this).animate({
                left: '+=900',
            }, 3000, 'easeInOutBack');
        });
    });


            // Css Анимация
$(function(){
    $('.css-box').on('click', function(){
        $(this).addClass('css-animated');
    });
});
            // Css Анимация - конец
