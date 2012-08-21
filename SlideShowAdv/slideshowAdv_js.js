
window.onload = function(){
	
	var slideshow = document.getElementsByClassName('slideshow').item(0);
	var train = slideshow.getElementsByClassName('case-train').item(0).getElementsByClassName('train').item(0);
	var lists = slideshow.getElementsByClassName('nav-bar').item(0).getElementsByTagName('li');
	
	var back_arrow = slideshow.getElementsByClassName('back-arrow').item(0);
	var next_arrow = slideshow.getElementsByClassName('next-arrow').item(0);
	
	var currentSlide = 0;
	
	show_pic = function(n){
		if(n>lists.length-1) n=0;
		if(n<0) n=lists.length-1;
		train.style.left = (-504*n) + 'px';
		lists.item(currentSlide).className = '';
		lists.item(n).className = 'active';
		currentSlide = n;
		//alert(n);
	}
	
	next_slide = function(){
		show_pic(currentSlide + 1);
	}
	
	back_slide = function(){
		show_pic(currentSlide - 1);
	}
	
	var intervalName = false;
	startSliding = function(){
		if(intervalName) return;
		intervalName = setInterval(next_slide,3000);
	}
	
	stopSliding = function(){
		if(!intervalName) return;
		clearInterval(intervalName);
		intervalName = false;
	}
	
	for(var i=0; i<lists.length; i++){
		(function(j){
			lists.item(j).onclick = function(){
				show_pic(j);	
			}
		})(i);
		
	}	
	
	show_pic(0);
	
	back_arrow.onclick = back_slide;
	next_arrow.onclick = next_slide;
	
	startSliding();
	slideshow.onmouseover = stopSliding;
	slideshow.onmouseout = startSliding;
	
	
} //End window.onload




