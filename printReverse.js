//---------------------------------------------
function printReverse(arr){
	console.log(arr.lenght);
	for (var i = arr.length -1; i>=0 ; i--){
		console.log(arr[i]);
	}
}
//---------------------------------------------
function isUniform(arr){
	var uniform = arr[0];
	var flag = true;
	arr.forEach(function (uni){
		if(uni !== uniform){
			flag = false;
		}
	});
	if(flag === false){
		return false
	}else{
		return true;	
	}
}
//--------------------------------------------
function sumArray(arr){
	var sum = 0;
	arr.forEach(function (num){
		sum+=num;
	});
	return sum ;
}
//--------------------------------------------
function max(arr){
	var max = arr[0];
	arr.forEach(function (num){
		if(max < num){
			max = num ;
		}
	});
	return max ;
}
//---------------------------------------------