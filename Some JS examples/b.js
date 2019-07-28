// alert("connected");
var todos = ["buy a bread"];
var input = prompt ("what would you like to do ?");
while(input !== "quit"){
	if(input === "list"){
		listToDo();	
	}else if(input === "new"){
		AddToDo();
	}else if(input === "delete"){
		deleteToDo();
	}
	input = prompt ("what would you like to do ?");
}
console.log("OK , You Quit the APP");
//--------------------------------------------
function AddToDo(){
	todos.push(prompt("Enter new todo"));
}
function deleteToDo() {
	var index = prompt("Enter index of todo to delete");
	todos.splice(index , 1);
}
function listToDo(){
	todos.forEach(function(todo,i){
		console.log(i + ": " + todo);
	});
}