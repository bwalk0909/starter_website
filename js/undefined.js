// var name = undefined;

// if (typeof x === 'undefined') {
// 	console.log('x is undefined');
// }

//Exercise Check to see if name is defined using a function

function greetUser (name) {
	if (typeof name === 'undefined') {
		console.log('Hello World!');
	} else {
		console.log ('Hello ' + name + '!');
	}
}

greetUser('Brian');
greetUser();
