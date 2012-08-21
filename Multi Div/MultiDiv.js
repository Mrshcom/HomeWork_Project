
$(function(){
	
	var pics = $('div.container div.border div.pixel');
	var btn_1 = $('div.btn:nth-child(1)');
	var btn_2 = $('div.btn:nth-child(2)');
	var btn_3 = $('div.btn:nth-child(3)');
	var btn_4 = $('div.btn:nth-child(4)');
	var btn_5 = $('div.btn:nth-child(5)');
	var btn_6 = $('div.btn:nth-child(6)');
	
	rnd = function(a,b){
		return (Math.floor(Math.random()*(b-a+1))+a);	
	}
	
		var itop = 0, 
			ileft = 0, 
			n = 16, // num of div in a row
			iwidth = pics.width(),  // width of divs
			iheight = pics.height(); // height of divs
			
	position = function() {
		
		if(ileft == (n*iwidth)) {ileft=0;  itop += iheight; }
		//ileft == (n*iwidth) ? ileft=0 && itop += iheight  : ileft+=iwidth ;
		$(this).css({'background-position': (-ileft) + 'px ' + (-itop) + 'px'});
		$(this).animate({top:itop, left:ileft},600);
		ileft += iwidth;
		
    }
			
			
 	pics.each(position);
	
	
	////////////// Change Image with Effect ////////////////////////////////////////////////
	btn_1.click( hide = function(){
		itop = 0;
		ileft = 0;
		num_img = rnd(1,5);
		
		pics.each(function(){
			$(this).animate({top:rnd(0,360),
							left:rnd(0,360),
							'-webkit-transform':'rotate(' + rnd(-360,360) + 'deg)'
			},400,'cubic-bezier(0.95,0.001,0.97,0.002)',function(){
				
					$(this).animate({backgroundImage:'url(\'images/' + num_img + '.jpg\')',	
									'-webkit-transform':'rotate(0deg)'					
							});
					//position.call();
					
					/*start = function(){
						 position();	
					}
					start();*/
					if(ileft == (n*iwidth)) {ileft=0;  itop += iheight; }
					$(this).css({'background-position': (-ileft) + 'px ' + (-itop) + 'px'});
					$(this).animate({top:itop, left:ileft},600);
					ileft += iwidth;
											
				});		
			
		});
	});
	////////////// End Change Image with Effect ////////////////////////////////////////////////
	
	
	////////////// Change Image with Effect ////////////////////////////////////////////////
	btn_2.click( hide = function(){
		itop = 0;
		ileft = 0;
		num_img = rnd(1,5);
		
		pics.each(function(){
			$(this).animate({'border-radius':'50%',
							width:10,
							height:10
			},500,'cubic-bezier(0, 1, 1, .02)',function(){
				
					$(this).animate({backgroundImage:'url(\'images/' + num_img + '.jpg\')',	
									'border-radius':'0',
									width:iwidth,
									height:iheight
									},400);					
				});		
			
		});
	});
	////////////// End Change Image with Effect ////////////////////////////////////////////////
	
		
	////////////// Change Image with Effect ////////////////////////////////////////////////
	btn_3.click( hide = function(){
		itop = 0;
		ileft = 0;
		num_img = rnd(1,5);
		
		pics.each(function(){
			$(this).animate({top:rnd(-600,600),
							left:rnd(-600,800),
							'-webkit-transform':'rotate(' + rnd(-360,360) + 'deg)'
			},400,'cubic-bezier(0.95,0.001,0.97,0.002)',function(){
				
					$(this).animate({backgroundImage:'url(\'images/' + num_img + '.jpg\')',	
									'-webkit-transform':'rotate(0deg)'						
							});
					//position.call();
					
					if(ileft == (n*iwidth)) {ileft=0;  itop += iheight; }
					$(this).css({'background-position': (-ileft) + 'px ' + (-itop) + 'px'});
					$(this).animate({top:itop, left:ileft},600);
					ileft += iwidth;
											
				});		
			
		});
	});
	////////////// End Change Image with Effect ////////////////////////////////////////////////
		
	////////////// Change Image with Effect ////////////////////////////////////////////////
	btn_4.click( hide = function(){
		itop = 0;
		ileft = 0;
		num_img = rnd(1,5);
		
		pics.each(function(){
			$(this).animate({top:rnd(-100,400), // (-600,600)
							left:rnd(-100,400), // (-600,800)
							opacity:0,
							'-webkit-transform':'rotate(' + rnd(-360,360) + 'deg)'
			},400,'ease-in',function(){
				
					$(this).animate({backgroundImage:'url(\'images/' + num_img + '.jpg\')',	
									'-webkit-transform':'rotate(0deg)',
									opacity:1					
							},400);
					//position.call();
					
					if(ileft == (n*iwidth)) {ileft=0;  itop += iheight; }
					$(this).css({'background-position': (-ileft) + 'px ' + (-itop) + 'px'});
					$(this).animate({top:itop, left:ileft},600);
					ileft += iwidth;
											
				});		
			
		});
	});
	////////////// End Change Image with Effect ////////////////////////////////////////////////
	
	////////////// Change Image with Effect ////////////////////////////////////////////////
	btn_5.click( hide = function(){
		itop = 0;
		ileft = 0;
		num_img = rnd(1,5);
		
		pics.each(function(){
			$(this).animate({
							'-webkit-transform':'rotate(90deg)'
			},600,'ease-in',function(){
				
					$(this).animate({backgroundImage:'url(\'images/' + num_img + '.jpg\')',	
									'-webkit-transform':'rotate(0deg)'					
							});
					
											
				});		
			
		});
	});
	////////////// End Change Image with Effect ////////////////////////////////////////////////
	
	////////////// Change Image with Effect ////////////////////////////////////////////////
	btn_6.click( hide = function(){
		itop = 0;
		ileft = 0;
		num_img = rnd(1,5);
		
		pics.each(function(){
			$(this).animate({
							'-webkit-transform':'rotateX(180deg)'
			},400,'ease-in',function(){
				
					$(this).animate({backgroundImage:'url(\'images/' + num_img + '.jpg\')',	
									'-webkit-transform':'rotateX(0deg)'				
							},400);
					
											
				});		
			
		});
	});
	////////////// End Change Image with Effect ////////////////////////////////////////////////
	

		
	
});