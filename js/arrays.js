// var grades = [100, 50]; //array is a list of values, strings, etc

// grades.push(79); // adds item to the end of the array
//grades.unshift(79); //adds item to the start of the array, instead of the end
// var grade = grades.pop (); // removes the last item from an array
//var grade = grades.shift (); // removes the  first item from an array
// console.log(grade);
// console.log(grades);


//Example 2
// var grades = [100, 50, 75, ]; //array is a list of values, strings, etc

// console.log(grades[0]); //print an item from the array 0, 1, 2, etc.

// grades.push(97);

// grades.forEach(function (grade) {
// 	console.log(grade);
// });

// Example 2b
// var grades = [100, 50, 75, ]; //array is a list of values, strings, etc
// console.log(grades[0]); //print an item from the array 0, 1, 2, etc.

// grades.push(97);

// grades.forEach(function (grade) {
// 	//console.log(grade);
// });

// console.log(grades.length);

var grades = [100, 50, 75, 97 ];
	//create totalGrade = 0
var totalGrade = 0;
grades.push(89);
	// forEach -> add grade to totalGrade
grades.forEach(function (grade) {
	totalGrade = totalGrade + grade;
	console.log('Current total is ' + totalGrade);
});
	// totalGrade / total number of grades
var average = totalGrade / grades.length;
console.log('Average is ' + average);

