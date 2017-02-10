var buildArray = function(range){
	var i, ival ;
	var list = new Array();
	for (i = 0; i < range; i++){
			ival = Math.floor(Math.random()*256);
			list[i] = ival;
	}
	return list;
}
var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
var guess;
var i = 1;
	
	while(min <= max) {
		guess = Math.floor((max + min) /2);
		if (array[guess] === targetValue) {
			console.log("Total guesses " + i);
			return guess;
		}
		else if (array[guess] < targetValue) {
			min = guess + 1;
		}
		else {
			max = guess - 1;
		}
		i++;
		console.log("Guess" + guess);
	}
		
		return -1;
}
var values = [100, 400, 200, 1000, 4, 2, 3, 4, 1, 300, 200, 100, 30, 70, 73];
console.log("Before Sort");
console.log(values);
values.sort(function(a, b){reutrn a-b});
//values.sort();
console.log("After Sort");
console.log(values);
var searchValue=9;
var result = doSearch(values, searchValue);
console.log("found value" +searchValue+" at index " + result);
