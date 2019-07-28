// var flag = false;
// var answer ;
// while(flag === false){
// 	answer = prompt("Are we there yet");
// 	if(answer === "yes" || answer === "yeah"){
// 		alert("Yay , we finally made it");
// 		flag = true;
// 	}
// }

//Version 2
var answer = prompt("Are we there yet");

while(answer.indexOf("yes") === -1){
	answer = prompt("Are we there yet");
}
alert("Yay , we finally made it");



// function kebabToSnake(str) {
// 	for( var i = 0 ; i <= str.lendth ; i++){
// 		if(str.indexOf("-") != -1){
// 			replaceAt(i , "_");
// 		}
// 	}
// }

function kebabToSnake(str) {
	var newStr = str.replace(/-/g , "_");
	return newStr;
}
