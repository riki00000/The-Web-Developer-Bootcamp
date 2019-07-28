var movieDB = [{
	name: "FROZEN",
	hasWatched: false,
	rating: 4
},{
	name: "MAD MAX",
	hasWatched: true,
	rating: 5

},{
	name: "Area 51",
	hasWatched: true,
	rating: 2
}]
function buildString(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched \"";
	}else{
		result += "not seen \"";
	}
	result += movie.name + "\" - " ;
	result += movie.rating + " stars";
	return result;
}
movieDB.forEach(function(movie){
	console.log(buildString(movie));
});