var window_width = $(window).width();
var num = 1; // setInterval 반복

if(window_width > 1024) {
	var bgImgUrl = "./assets/image/bg/pc/";
	var bgImgLength = 20;

	setInterval(function(){
		if(num<=bgImgLength){
			$("#gallery_main").append("<img src='"+bgImgUrl+"("+num+").jpg' alt='"+num+"번 사진' class='imgGallery' title='"+num+"번 사진'>");
			num++;
		} // if
	},100); // setInterval
} // pc
else {
	var bgImgUrl = "./assets/image/bg/phone/";
	var bgImgLength = 19;

	setInterval(function(){
		if(num<=bgImgLength){
			$("#gallery_main").append("<img src='"+bgImgUrl+""+num+".png' alt='"+num+"번 사진' class='imgGallery' title='"+num+"번 사진'>");
			num++;
		} // if
	},100); // setInterval
} // mobile