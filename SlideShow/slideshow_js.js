
window.onload = function(){
	var slidshow = document.getElementsByClassName('parent_slideshow').item(0).getElementsByClassName('slideshow').item(0);
	var train = slidshow.getElementsByClassName('case_train').item(0).getElementsByClassName('train').item(0);
	var lists = slidshow.getElementsByClassName('btns').item(0).getElementsByTagName('li');
	var currentpic = 0;
	
	show_pic = function(n){  // or function show_pic(n)
		if(n>lists.length-1) n=0;
		train.style.left = (-645*n)+'px';
		lists.item(currentpic).className = '';
		lists.item(n).className = 'active';
		currentpic = n;
	}
	
	auto_slide = function() {  // or function auto_slide()
		show_pic(currentpic+1);	
	}
	
	for(var i=0 ; i<lists.length ; i++){
		(function(j){				  // or function click(j)
			lists.item(j).onclick = function() {
				show_pic(j);
			}
		})(i);						  // or click(j);
	}
	
	show_pic(0);
	
	setInterval(auto_slide,2000);
	

}

