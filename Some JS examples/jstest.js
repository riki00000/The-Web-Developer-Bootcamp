
function onPageLoad() {
	alert("CONNECTED");
	var h1 = document.querySelector("h1");
var body = document.querySelector("body");

	var isBlue = false;
var cnt = 0;
var interval = setInterval(function (){
	cnt++;
	if(isBlue){
		body.style.background = "white";
	}else{
		body.style.background = "#3498db";
	}

console.log(cnt);
	if(cnt === 10) {
		clearInterval(interval);
	}


	isBlue = !isBlue;
}, 1000);


h1.style.color = "pink";

var li = document.querySelector("li");
}