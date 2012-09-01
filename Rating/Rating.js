$(function(){

	var ul = $('div.container > div.rating-box > ul.rating'),
		n = 0;
	
	for(var i=1; i<=10 ;i++){
        ul.append('<li title='+ i +'><a href="#"></a></li>');
    }

    var star = $('div.container > div.rating-box > ul.rating > li');
	marking = function(){
		for(var i=0; i<=$(this).index(); i++){
			star.eq(i).css({
				'background-position':'right bottom'
			});
		}
	}

	inmarking = function(){		
		star.each(function(){
			$(this).css({
				'background-position':'left top'
			});
		});

		for(var i=0; i<n; i++){
			star.eq(i).css({
				'background-position':'right bottom'
			});
		}

	}

	activeMarking = function(){
		n = $(this).index()+1;
		inmarking();
		$('span#rate').html(n);
	}

	changeImage = function(img_name){
		star.css({
			'background-image':'url(images/'+ img_name +'.png)'
		});
	}
	
	$("#select").change(function(){
		switch($(this).val()){
			case 'default' : changeImage("default"); 
				break;
			case 'black' : changeImage("black"); 
				break;
			case 'office2007' : changeImage("office2007"); 
				break;
			case 'outlook' : changeImage("outlook");  
				break;
			case 'simple' : changeImage("simple"); 
				break;
			case 'sitefinity' : changeImage("sitefinity"); 
				break;
			case 'vista' : changeImage("vista");  
				break;
			case 'web' : changeImage("web");  
				break;
			case 'webblue' : changeImage("webblue"); 
				break;
			case 'windows7' : changeImage("windows7");  
				break;
			default : break;
		}
	});
	
	star.mouseover(marking).mouseout(inmarking).click(activeMarking);
});