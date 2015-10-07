// Example 1

// var isValid = true;
// //var isValid = false; //false is the only other boolean statement
// isValid = !isValid; //! flips value from true to false

// //if (isValid === true) {
// if (isValid) { //shorthand
// 	console.log('Data is valid!');
// } else {
// 	console.log('Data is not valid!');
// }


//Example 2
// var isValid = false;

// if (!isValid) {
// 	console.log('Data is valid!');
// } else {
// 	console.log('Data is not valid!');
// }

var isValid = false;

function toogleBoolean (booleanVar) {
	if (typeof booleanVar === 'boolean'){
		return !booleanVar;
	} else {
		console.log('Warning! Not a boolean.');
	}
}

var newBoolean = toogleBoolean(isValid);
console.log(newBoolean);

var newBoolean = toogleBoolean('Brian');
console.log(newBoolean);