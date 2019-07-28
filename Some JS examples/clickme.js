var button = document.getElementById("textChange");
var button2 = document.getElementById("colorChange");
var paragraph = document.querySelector("p");
// var body = document.querySelector("body");
var flag = true;

button.addEventListener("click", function() {
	if(paragraph.textContent === "Someone clicked the button"){
		paragraph.textContent = "No one has clicked Me Yet" ;
	}else if (paragraph.textContent = "No one has clicked Me Yet"){
		paragraph.textContent = "Someone clicked the button" ;
	}
});
// button2.addEventListener("click" , function(){
// 	if(flag){
// 		document.body.style.background = "purple";	
// 	}else{
// 		document.body.style.background = "white";
// 	}
// 	flag = !flag;
// });

button2.addEventListener("click" , function(){
		document.body.classList.toggle("purple");
});