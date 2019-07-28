// alert("connected");
var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var h1 = document.querySelector("h1");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.querySelector("#reset");
var limitScoreDisplay = document.querySelector("#limitScoreDisplay");
var numInput = document.querySelector("input");
var limitScore = 5;
var p1Score = 0;
var p2Score = 0;
var flagScoreLimit = false;


p1Button.addEventListener("click", function (){
	if(!flagScoreLimit){
		p1Score ++;
		p1Display.textContent = p1Score;
		// console.log(p1Score);
		if(p1Score === limitScore){
			flagScoreLimit = true;
			p1Display  .style.color = "green";
		}	
	}
});
p2Button.addEventListener("click", function (){
	if(!flagScoreLimit){
		p2Score ++;
		p2Display.textContent = p2Score;
		// console.log(p2Score);
		if(p2Score === limitScore){
			flagScoreLimit = true;
			p2Display.style.color = "green";
		}
	}
});
resetButton.addEventListener("click" , function () {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.style.color = "black";
	p2Display.style.color = "black";
	flagScoreLimit = false;
})

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.style.color = "black";
	p2Display.style.color = "black";
	flagScoreLimit = false;
}
numInput.addEventListener("change" , function(){
	limitScore = Number(numInput.value);
	limitScoreDisplay.textContent = limitScore;
	reset();
});