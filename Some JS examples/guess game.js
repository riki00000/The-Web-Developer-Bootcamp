var secretNumber = 4;
var guessNumber ;
var flag = false
while(flag === false){
	guessNumber = Number(prompt("guess a number"));
	if(guessNumber ===  secretNumber){
		alert("You got it right !");
		flag = true;
	}else if(guessNumber > secretNumber){
		alert("it is too higher");
	}else{
		alert("it is too lower");
	} 
}