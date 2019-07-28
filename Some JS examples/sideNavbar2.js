function drop(){
	document.getElementById("mydrop").classList.toggle("active");
	var dropdownContent = document.getElementsByClassName("dropdown-container")[0]; 
	if(dropdownContent.style.display === "block" ){
		dropdownContent.style.display = "none";
	}else{
		dropdownContent.style.display = "block";
	}
}