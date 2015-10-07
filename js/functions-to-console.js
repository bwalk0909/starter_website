

//Exercise 1
//*******
function d20() {
   var output = Math.floor(Math.random()*20); 
   console.log(output);
}

d20();
//*******
// Exercise 2 Write a second modified d20 function where the user can //supply the amount of dice to roll

//******
function manyD20(start, end, step) {
  for (var i = start; i <= end; i = i + step) {
    var die_number = i;
    var output = Math.floor(Math.random()*20); 
    var result = 'Dice ' + die_number + ' is ' + output;
    console.log(result);
  }
} 

manyD20(1, 5, 1);

//******

// Exercise 3 Write a second modified d20 function where the user can 
// specify the number of sides the dice has

//******
// function manyD20(start, end, step) {
//   for (var i = start; i <= end; i = i + step) {
//     var die_number = i;
//    }
// function rollDice(sidedDice, numberOfDice) {
//     var output = Math.floor(Math.random()*sidedDice);
//     var result = 'Dice ' + die_number + ' is ' + output;
//     console.log(result);
//   }
// }

// manyD20(1, 4, 1);
// rollDice(6, 4);