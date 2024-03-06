var myMenuArray = new Array();
var ww=992;

$(document).ready(function() {
	ww = document.body.clientWidth;
	adjustMyMenu();
});

$(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustMyMenu();
});

function adjustMyMenu() {
	if(myMenuArray.length==0 && ww<=992) {
		var arrowCount = 1;
		while(document.getElementById('myMenu'+arrowCount)) arrowCount++;
		arrowCount--;
		
		for(mCnt=arrowCount; mCnt>=1; mCnt--) {
			myMenuArray[mCnt] = document.getElementById('myMenu'+mCnt).innerHTML;
			document.getElementById('myMenu'+mCnt).innerHTML = '';
		}
		
		$(document).keyup(function(e) {
			if(e.keyCode==27) {
				$(".top-menu ul").slideUp("slow" , function(){
				});
			}
		});
		
		$(document).click(function(e) {
			var parents = $(e.target).parents('[id$=TempMainNav]');
			if(parents.length==0) {
				$(".top-menu ul").slideUp("slow" , function(){
				});
			}
		});
	}
}

function showMyMenu(mCnt) {
	if(ww<=992) {
		if(document.getElementById('myMenu'+mCnt).innerHTML=='') {
			document.getElementById('myMenu'+mCnt).innerHTML = myMenuArray[mCnt];
		} else {
			document.getElementById('myMenu'+mCnt).innerHTML = '';
		}
		return false;
	}
	
}