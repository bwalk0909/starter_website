// helloWorld();

// function helloWorld(){
// console.log ('Hello!');
// }

// helloWorld2();

// var helloWorld2 = function (){
// 	console.log('hello world 2!');
// }

// helloWorld2();

// function addEmUp(a, b) {
// 	console.log(a);
// 	console.log(b);
// 	var result = a + b;
// 	console.log(result);
// }

// addEmUp(1, 100);

// addEmUp(1,2,15);

// addEmUp('hello ', 'world');

// addEmUp(3, 'a cool string');

// addEmUp(1);

// addEmUp('lonelyString');

// Calculate your year of birth

// function yourAge(year_of_birth){
// 	var currentYear = 2015;
// 	var your_age = currentYear - year_of_birth;
// 	console.log(your_age);
// }

// function actualAge(year) {
// 	var current_year = new Date();
// 	var year_of_birth = new Date(year);
// 	console.log(current_year - year_of_birth);
// }

// yourAge(1957);
// yourAge(1968);
// yourAge(2001);

// function yourAge2(year_of_birth, future_year) {}

// yourAge(1985);
// yourAge("1985");

// function fahrenheitToCelcius(start, end, step){
// 	for (var i = start; i <= end; i = i + step){
// 		var celcius = (i - 30) / 2;
// 		var output = i + 'F in Celcius is ' + celcius + 'C';
// 		console.log(output);
// 	}
// }

// fahrenheitToCelcius(32, 100, 10);

// function celciusToFahrenheit(start, end, step){
// 	for (var i = start; i <= end; i = i + step){
// 		var fahrenheit = (i + 30) / 2;
// 		var output = i - 'C in Fahrenheit is ' + fahrenheit + 'F';
// 		console.log(output);
// 	}
// }

// celciusToFahrenheit (100, 32, 10);


//calculate Age
// function yourAge(year_of_birth) {
// 	console.log(2015 - year_of_birth);
// }

// function calculateAge(year_of_birth) {
// 	return 2015 - year_of_birth;
// }

// calculateAge(1985);

// var myAge = calculateAge(1985);
// var myBrothersAge = calculateAge(1980);



//Scope in Functions

// function my_own_scope() {
// 	var in_function_scope_1 = 'log me here I will work!'
// 	var name = 'Brian';
// }


function first_scope() {

	var first_quote = 'It was the best of times...';

	function second_scope() {

	var second_quote = 'It was the worst of times...';

	console.log(first_quote + second_quote);
	}

second_scope(); // this is the only one that will work.

// console.log(second_quote);
}

first_scope();

// console.log(first_quote + second_quote);

// recurtion

function recur() {
	console.log('Hi I am Recur');
	var d20Roll = Math.floor(Math.random()*20);
	if (d20Roll === 15) {
		return;
	} else {
		recur();
	}
}

recur();

function diceRoll() {
	var name = 
}








// console.log(myAge);
// console.log(myBrothersAge);
// // functions should always be sure to include a return value

// function futureAge(future_year, year_of_birth) {
// 	return future_year - year_of_birth;
// }

// var myAgeIn2050 = futureAge (2050, 1985);
// var myAgeIn2065 = futureAge (2065, 1985);
// var myAgeIn1987 = futureAge (1987, 1985);



