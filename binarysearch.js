var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    var i = 0;

    while(max >= min){
        guess = Math.floor((min + max) / 2);
        if(array[guess] === targetValue){
            return guess;
        }else if(array[guess] > targetValue){
            max = guess - 1;
        }else{
            min = guess + 1;
        }
    }
	return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
console.log("Result should equal 20: " + result);
