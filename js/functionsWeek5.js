// Exercise 1
// helloWorld(); 
// helloWorld();
// helloWorld();

// function helloWorld() {   
//   console.log('hello!');
// }

// var helloWorld2 = function() {
//   console.log('hello world2!');
// };

// helloWorld2();


// whatUpDog1();
// whatUpDog1();
// whatUpDog1();

// function whatUpDog1() {
// 	console.log('Dawg!');
// }

// function whatUpDog() {
// 	console.log('hey Dog!');
// };

// whatUpDog();


// Exercise 2
// function addEmUp(a, b) {
//   console.log(a);
//   console.log(b);
//   var result = a + b;
//   console.log(result);
// }

//addEmUp(1,2,3);
//addEmUp('hello ', 'world!');
//addEmUp(3, "a cool string");

// addEmUp(1);

// addEmUp('lonely string');


// Exercise 2b

// function addEmUpWithLogging(a, b) {
//   console.log('a is: ', a);
//   console.log('b is: ', b);
//   var result = a + b;
//   console.log(result);
// }

// addEmUpWithLogging(1, 2);
// addEmUpWithLogging(1);
// addEmUpWithLogging('a crummy string');
// addEmUpWithLogging(undefined, 'value of b');

// and 'undefined' plus other things is unpredictable!


// Example 3

// function yourAge(year_of_birth) {
//   var current_year = 2015;
//   var your_age = current_year - year_of_birth;
//   console.log(your_age);
// }

// function yourAge2(year_of_birth, future_year) {}

// yourAge(1985);
// ('1985'); // why does this work?
// yourAge('Nineteen Eighty Five');
// yourAge([4]); // an empty array! why is it essentially made 0?

// function fahrenheitToCelsius(start, end, step) {
//   for (var i = start; i <= end; i = i + step) {
//     var celsius = (i - 30) / 2;
//     var output = i + 'F in celsius is ' + celsius + 'C';
//     console.log(output);
//   }
// }

// fahrenheitToCelsius(32, 100, 10);


// function celsiusToFahrenheit(start, end, step) {
//   for (var i = start; i >= end; i = i - step) {
//     var fahrenheit = (i + 30) / 2;
//     var output = i + 'C in fahrenheit is ' + fahrenheit + 'F';
//     console.log(output);
//   }
// }

// celsiusToFahrenheit(100, 32, 10);


//Exercise 1
//*******
// function d20() {
//    var output = Math.floor(Math.random()*20); 
//    console.log(output);
// }

// d20();
//*******
// Exercise 2 Write a second modified d20 function where the user can //supply the amount of dice to roll

//******
// function manyD20(start, end, step) {
//   for (var i = start; i <= end; i = i + step) {
//     var die_number = i;
//     var output = Math.floor(Math.random()*20); 
//     var result = 'Dice ' + die_number + ' is ' + output;
//     console.log(result);
//   }
// } 

// manyD20(1, 5, 1);

//******

// Exercise 3 Write a second modified d20 function where the user can 
// specify the number of sides the dice has

//******
function manyD20(start, end, step) {
  for (var i = start; i <= end; i = i + step) {
    var die_number = i;
   }
function rollDice(sidedDice, numberOfDice) {
    var output = Math.floor(Math.random()*sidedDice);
    var result = 'Dice ' + die_number + ' is ' + output;
    console.log(result);
  }
}

manyD20(1, 4, 1);
rollDice(6, 4);