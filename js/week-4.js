/* ==========================================================================
   Author's custom scripts
   ========================================================================== */


// Week 4

// Objects are one of the two advanced things in Javascript

// Making an object

// var first_object = { };

// console.log(first_object);
// console.log(typeof first_object);
// console.log(typeof true);
// console.log(typeof[]);
// if (typeof {} === 'object') {
// 	console.log('we got an object!')
// }

// var second_object = new Object();

// 	console.log(second_object);
// 	console.log(typeof second_object);

// Adding to an Object

// var contact_info = {};
	
// contact_info.city = 'Chicago';
// contact_info['state'] = 'IL';

// console.log(contact_info);

//of course, object's can hold any data type includeing functions and other Objects

// contact_info.phone_numbers = [
// '555-555-5555', '312-588-3200', '312-222-2222'
// ];

// console.log(contact_info.phone_numbers);

// contact_info.phone_numbers = {
// 'home' : '555-555-5555', 
// 'cell' : '312-588-3200'
// };

// console.log(contact_info.phone_numbers);


// Deleting an Object


// var bestsellers = {
// 	'hardcover' : 'Stephen King',
// 	'paperback' : 'sandra cisneros'
// };

// console.log(bestsellers);

// delete bestsellers.paperback;

// console.log(bestsellers);

// A less destructive pattern is using null


// A function as a value

// var john = {
// 	first : 'john',
// 	last : 'smith',
// 	age : 21
// };

// john.incrementAge = function() {
// 	this.age++;
// };

// console.log(john);
// john.incrementAge();
// console.log(john);

// john.logSelf = function(){
// 	console.log(john);
// }

// function logSelf(){
// 	console.log(this);
// }

// var roneesh = {'name': 'roneesh' }
// roneesh.logSelf = logSelf;

// john.logSelf();


//  *****************

// Iterating over objects

var what_pets_say = {
	'dog': 'woof',
	'cat' : 'meow',
	'mouse' : 'sqeak',
	'bat' : 'I vant to suck your blood',
	'paul': 'oh no!'
};

for (var p in what_pets_say) {
	console.log ('this is what a ' + p + ' says: ' + what_pets_say[p]);
}

var dog_says = what_pets_say['dog']; //woof
var cat_says = what_pets_say['cat'];
var mule_says = what_pets_say['mule'];


console.log(dog_says);
console.log(cat_says);
console.log(mule_says);

// here is a more real world example

var social_media_profile = {
	'username' : 'roneesh',
	'icon' : '',
	'dob' : '1/1/75',
	'fav_quote' : 'it was the best of times'
};

for (var x in social_media_profile){
	console.log(x + ' : ' + social_media_profile[x]);
}




























