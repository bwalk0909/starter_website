// var pojo3 = {
//     'or a function' : function (){return 'whoa, cool beans!;'},
//     'anotherFunction' : function() {return 'func yea!';}

// };

// console.log(pojo3['or a function']() );

// console.log(pojo3.anotherFunction() );

// var coder = {
//     name : 'Brian',
//     employer : 'NIU',
//     age: 47,
//     sayHi : function() {return 'Hi, my name is ' + this.name +  ' and I work at ' + this.employer + ' and I am ' + this.age + ' years old.';}

// };

// var output = coder.sayHi();
// console.log(output);

var person = {
    'add_name_to_this_object' : function(some_name) {
        this.name = some_name; //refers to the person object
        return this;
    },
    'add_age_to_this_object' : function(age) {
        this.age = age;
        return this;
    }
};

person.add_name_to_this_object('Brian').add_age_to_this_object(47);

person.add_name_to_this_object('Carrie').add_age_to_this_object(45);
console.log(person);


//Object + Function + 'this' + 'return'