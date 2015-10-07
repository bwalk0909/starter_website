// var person = {};

// person.firstName = 'Brian';
// person.lastName = 'Walk';
// person.age = 47;

// delete person.age;

// console.log(person);

// function greetUser (person) {
// 	console.log('Hello ' + person.firstName + ' ' + person.lastName);
// }

// greetUser(person);


// Next, same using bracket notation
// var person = {};

// person['firstName'] = 'Brian';
// person['lastName'] = 'Walk';
// person.age = 47;

// delete person.age;

// console.log(person);

// function greetUser (person) {
// 	console.log('Hello ' + person.firstName + ' ' + person.lastName);
// }

// greetUser(person);

// Next, add some more values to the var person within the {}
// var person = {
// 	gender: 'male',
// 	'eyeColor': 'brown'
// };
// var firstNameProperty = 'firstName';

// person[firstNameProperty] = 'Brian';
// person['lastName'] = 'Walk';
// person.age = 47;

// delete person.age;

// console.log(person);

// function greetUser (person) {
// 	console.log('Hello ' + person.firstName + ' ' + person.lastName);
// }

// greetUser(person);
//Exercise Create an object that defines a Pet Name and Pet Type

var pet = {
	name: 'Rudy',
	type: 'Dog'
};

function printPet (pet){
	console.log('Your ' + pet.type + ' is named ' + pet.name);
}

printPet(pet);



