// 변수 선언
var window_width = $(window).width();
var date = new Date(); // 오늘 날짜 / 시간
var hour = date.getHours(); // 현재 시간
var minutes = date.getMinutes(); // 현재 분
var seconds = date.getSeconds(); // 현재 초
var outputSeconds; // 보이는 초
var time = hour+":"+minutes; // 현재 시각
var reverse = 0; // 반전 여부
const cute = new Audio("./assets/audio/챠니챠니뀽.mp3"); // 오디오

// 현재 시간
function renderCurrentTime() {
	date = new Date();
	hour = date.getHours();
	minutes = date.getMinutes();
	seconds = date.getSeconds();
	if(minutes<10) {
		time = hour+":0"+minutes;
	} else {
		time = hour+":"+minutes;
	}
	$(".time").text(time);
	if(seconds<10) {
		outputSeconds = "0"+seconds;
	} else {
		outputSeconds = seconds;
	}
	$(".second").text(outputSeconds);
}

setInterval(renderCurrentTime);

if(window_width > 1024) {
	// 변수 선언
	var bgImgUrl = "./assets/image/bg/pc/"; // 배경화면 경로
	var bgImgLength = 20;

	// 배경화면
	function bgChange(input) {
		number = parseInt(input)-1;
		output = bg[number];
		var bgImg = "url('"+output+"')"

		$("#background").css({"background-image":bgImg});
		$("#background").css({"transform":"scaleX(1)"});
		reverse = 0;
	}
	// renderQuote()

	const bg = new Array;
		
	for(i=1; i<=bgImgLength; i++) {
		bg.push(bgImgUrl+"("+i+").jpg");
	}

	function bgRandom() {
		const choseImage = bg[Math.floor(Math.random() * bg.length)];

		console.log(choseImage);

		var bgImg = "url('"+choseImage+"')"

		$("#background").css({"background-image":bgImg});
	}

	bgRandom();

	function clickBgChange(){
		var inputElement = prompt("코드를 입력해 주세요. (bg : 1~"+bgImgLength+")");
		if(inputElement=="g") {
			location.assign("./gallery.html");
		} else if(inputElement=="ran") {
			bgRandom();
		} else {
			if((inputElement<=bgImgLength)&&(inputElement>0)) {
				bgChange(inputElement);
			} else {
				alert("명령을 알아들을 수 없거나 숫자가 너무 크거나 작습니다. (INT, 1~"+bgImgLength+")");
			}
		}
	}

	$(".time").click(clickBgChange); // cick

	$(document).keydown(function(event) {
	  if (event.which == 67) {
		clickBgChange();
	  }
	});

	$(document).keydown(function(event) {
	  if (event.which == 82) {
		bgRandom();
	  }
	});
	$(document).keydown(function(event) {
	  if (event.which == 86) {
			cute.play();
	  }
	});
	$(document).keydown(function(event) {
	  if (event.which == 221) {
			if(reverse==0) {
				$("#background").css({"transform":"scaleX(-1)"});
				reverse = 1;
			} else {
				$("#background").css({"transform":"scaleX(1)"});
				reverse = 0;
			}
	  }
	});
	$(".time").hover(function() {
		$(".seconds_popup").css({"display":"flex"});
	}, function() {
		$(".seconds_popup").css({"display":"none"});
	});
} // pc
else {
	// 변수 선언
	var bgImgUrl = "./assets/image/bg/phone/"; // 배경화면 경로
	var bgImgLength = 19	;

	// 배경화면
	function bgChange(input) {
		number = parseInt(input)-1;
		output = bg[number];
		var bgImg = "url('"+output+"')"

		$("#background").css({"background-image":bgImg});
	}
	// renderQuote()

	const bg = new Array;
		
	for(i=1; i<=bgImgLength; i++) {
		bg.push(bgImgUrl+""+i+".png");
	}

	function bgRandom() {
		const choseImage = bg[Math.floor(Math.random() * bg.length)];

		console.log(choseImage);

		var bgImg = "url('"+choseImage+"')"

		$("#background").css({"background-image":bgImg});
	}

	bgRandom();

	function clickBgChange(){
		var inputElement = prompt("코드를 입력해 주세요. (INT, 1~"+bgImgLength+")");
		if(inputElement=="g") {
			location.assign("./gallery.html");
		} else if(inputElement=="ran") {
			bgRandom();
		} else {
			if((inputElement<=bgImgLength)&&(inputElement>0)) {
				bgChange(inputElement);
			} else {
				alert("명령을 알아들을 수 없거나 숫자가 너무 크거나 작습니다. (INT, 1~"+bgImgLength+")");
			}
		}
	}

	$(".time").click(clickBgChange); // cick

	$(document).keydown(function(event) {
	  if (event.which == 67) {
		clickBgChange();
	  }
	});

	$(document).keydown(function(event) {
	  if (event.which == 82) {
		bgRandom();
	  }
	});
} // phone

$(window).resize(function() {
	bgRandom();
}); // 리사이즈 시 랜덤 배경화면