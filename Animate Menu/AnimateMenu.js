$(function(){
	
	var li = $('div.container nav.mainmenu menu > li'),
		img_menu = $('nav.mainmenu menu > li a > span.img-menu'),
		due = 900,
		delay = 100,
		step = 300;
	
	positionImage = function(i){
		$(this).css({
				'background-position': (-i*64) + 'px  0px'
			});	
	}
	img_menu.each(positionImage);
	
	li.each(function() {
        var that = this;
		setTimeout(function(){
				$(that).animate({
					top:-5	
				},due,'ease-in-out',function(){
					$(this).animate({top:-80},600);	
				});
		},delay);
		delay += step;
    }).mouseover(function(){
		$(this).animate({
				top:-5
			},200,'ease-in-out');
	}).mouseout(function(){
		$(this).animate({
				top:-80
			},400,'ease-in-out');
	});
	
});