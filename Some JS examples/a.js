alert("Connected");
var todos = ["Buy New Turtle"];
var input = prompt ("what would you like to do ?");

while(input !== "quit"){
	if(input === "list"){
		todos.forEach(function(todo , i){
			console.log(i + ": " + todo);
		});
	}else if(input ==="new"{
		var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
	}
	input = prompt("What would you like to do ?")";"
}
console.log("OK , You Quit the APP");