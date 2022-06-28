// //arrow function
// const addNums = (a = 0, b = 0) => a + b;
// // console.log(addNums(3, 9))

// //==========================================================================================================================================

// //object oriented programming
// // we can create objects using constructor functions withn prototype.
// //when creating a constructor function must start withn a capital.
// //in constructor function to set a value of parameter, we use this keyword

// //constructor function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     //with constructor functions,we can add methods  i.e
//     this.getBirthYear = function() {
//             return this.dob.getFullYear();
//         }
//         //full name
//     this.fullName = () => `${this.firstName} ${this.lastName}`
// }

// //console.log(person1)- when we console the person,we see  the above methods appearing to the constructor and we dont want that,therefore we introduce prototype to hide 
// Person.prototype.fullName = function() {
//     return `${this.firstName} ${this.lastName}`
// }
// Person.prototype.getBirthYear = () => this.dob.getFullYear();
// //==========================================================================================================================================
// //class
// // we introduce classes in this constructor function,it  works the same way as constructor function no diffrene at all the only thing it makes codes look prettier i.e
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
//     getBirthYear() {
//         return this.dob.getFullYear();
//     }
// }
// //instantiate the object with constructor function
// const person1 = new Person('lincolin', 'angaya', '1998');
// const person2 = new Person('lenox', 'Owade', '12-09-2000');
// // console.log(person1.getBirthYear())
// // console.log(person1)
// //------------------------------------------------------------------------------------------------------------------------------------------//FUNCTIONS
// //function definition
// function catGreeter(name) {
//     // console.log('hey cat you are beautiful' + name)
// }
// //run,call,execute,invoke
// catGreeter('lincolin')
//     //a named function
// function sum(a, b) {
//     // console.log(a + b);
// }
// sum(2, 4)
//     //anonymous function-are mostly usedin eventlistners
//     // is a function with no name
// document.addEventListener('click', function() {
//         // console.log('click')
//     }())
//     //arrow function---> document.addEventListener('click', () =>{}())
// class Peer {
//     constructor(name) {
//         this.name = name;
//     }
//     printNameArray() {
//         setTimeout(() => {
//             console.log(`Arrow: ${this.name}`)
//         }, 1000)
//     }
//     printNameFunction() {
//         setTimeout(function() {
//             console.log(`Function: ${this.name}`)
//         }, 1000)
//     }
// }
// let peer1 = new Peer('lincolin')
// peer1.printNameArray()
// peer1.printNameFunction()
//     //results 
// index.js: 75 Arrow: lincolin
// index.js: 80 Function:
//this------> the object that is executing the current function
// const video = {
//     title: 'link',
//     play() {
//         console.log(this)
//     }
// };
// video.play();
//==========================================================================================================================================
//function declaration
// function greet() {
//     // console.log('hello there')
// }
// greet()
//FUNCTION EXPRESSION
//place semi-colon at the end of function
//hoisting is effectively on function declation but it doesn't work with function expression and most prefferebly use function expression
// const speak = function(name, age) {
//     console.log(`good day ${name} ${age}`);
// };
// speak('lincolin', 33)
//=================================================================================================================================
//callback --->we can pass in a function as an arguemnt
// const myFunc = (myName) => {
//     //do something
//     let value = 50;
//     myName(value);
// }
// myFunc(function(value) {
//     //do somethin
//     console.log(value);
// });
// const calcArea = (Area) => {
//     let length = 50;
//     let width = 60;
//     let areaCovered = length * width;
//     Area(areaCovered)
// }
// calcArea((areaCovered)=> {
//     console.log(areaCovered)
// })

//buit in array method called foreach---->iterate over an array elements

// let people = ['mario', 'luigi', 'ryan', 'shaun', 'chun-li'];
// let logperson = ((index, person) => {
//     console.log(`${index}- hello - ${person}`)
// })
// people.forEach(logperson)
// let people = ['mario', 'luigi', 'ryan', 'shaun', 'chun-li'];
// people.forEach(function(index, person) {
//     console.log(`${index}- hello - ${person}`)
// })
// let ul = document.querySelector('.people')
// let people = ['mario', 'luigi', 'ryan', 'shaun', 'chun-li'];
// let html = ``
// people.forEach((person) => {

//         //create html template
//         html += `<li style = "color:purple"> ${person} </li>`

//     })
//     // console.log(html)
// ul.innerHTML = html
//==========================================================================================================
//what's in it for you
// what are javascript functions
//-->is a group of reusable codes which can be called anywhere in your program
//eliminates the need to writing the same code agai and again
//helps programmer write a modular codes
//function function_name(parameter_list){
// function_body
// }
// function my_function(val) {
//     document.getElementById('demo').innerHTML = val * val
// }
// my_function(15)
//     // function nexpression
// var x = function(a, b) {
//     return a * b
// }
// console.log(x(10, 20))
//function()constructor
//functions can also be defined using the built-in javascript function constructor called Function
// var myfunction = new Function('a', 'b', 'c', 'return a+b+c')
// var x = myfunction(2, 3, 4)
// document.getElementById('demo').innerHTML = 'the sum is ' + x


//self-invoking functions
//is invoked (started) automatically if the expression is followed by ()
// you have to add parentheses around the function to indicate that it is a function expression
// (function() {

//     function_body //i will invoke my self
// })();
// (function() {
//     alert('welcome! lincoln')
// })()
//functions as values
// -- - > in javascript function is a value,so we can deal with it as a value.
//we first define the function and then assign it to a variable unlike in expression
//with function as value, we can add opearatio to the value of the function e.g let x=product(2,4)*4
// function function_name(parameter_list) {
//     function_body //i will invoke myself
// }
// let x = function_name
// function product(x, y) {
//     return x * y
// }
// let y = product(10, 20)
// console.log(y)
//functions as objects
// var body = function_body;
// var function_name = new Function('parameter_list', body);
// alert(function_name(arguement_value));
// var body = "return Math.PI*rad*rad"
// var circle = new Function("rad", body);
// alert(circle(5.222))
//arrow functions
//-->cannot be used as constructors
//generator functions
//----->generator functions can return ('yield) multiple values,one after another,on demand
//to create a generator ,we use the syntax : function*

// function* generatorSequence() {

//         yield 1;
//         yield 2;
//         yield 3;
//         yield 4;
//     }
//predefined functions
//eval-- - > evaluates a string and  return a value.
//ParseInt---->parses a stringar gument and returns an integer of the specified radix or base
//parseFloat---->parsesa stringarguementand returns a floating-point number
//escpae--->returnsthe hexadecimalencodingof an argument
//==========================================================================================================================================//function statement/declaration
// function a() {
//     console.log('a called')
// }
// a()
//     //function expression
// var b = function() {
//     console.log('b called ')
// }
// b()
//the difference between function statement and function declaration is you can hoist a function statament/declaration but you cannot hoist function expression
//anonymous function-have no name
//are used when function is being assigned a  value 
// function() {

// }
//name function expression---->is a function likefunction expression but it has a name
// let x = function area() {

// }
//first class function----->ability to use functions as a value
//a programming language is saidto havea first-class function,if functions in thatprogramming languageare treted like any other value
//1.you can assign a functionto a variable like any other value
//assigning a function to a variable
// let greet = function(name) {
//     return 'hello  ' + name + ' ! how are you doing?'
// }
// let msg = greet('john');
// console.log(msg);
// //2. you can pass a function as an arguement to another function
// let birthYears = [1989, 2007, 1992];

// function getResultArray(arr, callback) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let val = callback(arr[i]);
//         result.push(val)
//     }
// }

// function calcAge(birthYear) {
//     return new Date().getFullYear() - birthYear;
// }
// getResultArray(birthYears, calcAge)
//     //3.you can return a function from another function
// function interviewQuestion(job) {
//     if (job === 'teacher') {
//         let question = 'how many years of teaching experience do you have?';
//         return function(name) {

//             console.log('hi ' + name + '.' + question);
//         }
//     }
// }
//HIGHER ORDER FUNCTIONS
//are the functions which operats on otherfunctions,either by taking themas arguementor by returning them.
//in simplewords,higher functions is a function that
//receives a function as an argument
//returns the function as output
//it does both i.ereceives a function as argument as well as returs a function
//-higher order functions is only possiblebecauseof the presence offirst class functions in programming languages.
//function such as filter(),reduce(),map(),forEach() are the examplesof higher order functions.because all these function take this another functionas its arguement
//==========================================================================================================================================
//CLOSURE--->functions with a preserved data
//a function binded together with its lexical scope 
// let addTo = function(passed) {
//     let add = function(inner) {
//         return passed + inner;
//     };
//     return add;
// }
// let addThree = new addTo(3)
// let addFour = new addTo(4)
//     // console.dir(addThree)
// console.dir(addFour)
// function x() {
//     var a = 7;

//     function y() {
//         console.log(a)
//     }
//     y()
// }
// x()
//higher array methods
const companies = [{
        name: 'company one',
        category: 'Finance',
        start: 1981,
        end: 2003
    },
    {
        name: 'company two',
        category: 'retail',
        start: 1982,
        end: 2007
    },

    {
        name: 'company three',
        category: 'technology',
        start: 1983,
        end: 2009
    },
    {
        name: 'company four',
        category: 'auto',
        start: 1981,
        end: 2010
    },
    {
        name: 'company five',
        category: 'Finance',
        start: 1989,
        end: 2012
    },
    {
        name: 'company six',
        category: 'Finance',
        start: 1999,
        end: 2004
    },
    {
        name: 'company seven',
        category: 'retail',
        start: 1986,
        end: 2003
    },
    {
        name: 'company eight',
        category: 'technology',
        start: 1984,
        end: 2005
    }
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]
    //forEach

// companies.forEach(function(company) {
//     console.log(company)
// })

//filter
// const canDrink = ages.filter(function(age) {
//     if (age >= 21) {
//         return true;
//     }
// });
//const canDRink=ages.filter(age=>age>=21);
// console.log(canDrink)
//filter company category
// const retailCompanies = companies.filter(function(company) {
//     if (company.category === 'retail') {
//         return true
//     }
// })

// const retailCompany = companies.filter(company => company.category === 'retail')
// console.log(retailCompany)
//get 80's companies
// const startYear = companies.filter(company => (company.start >= 1980 && company.start < 1989))
// console.log(startYear)
//company lastd more than ten years
// const companyDuration = companies.filter(company => ((company.end - company.start) < 10))
// console.log(companyDuration)
//map----create new array from current array
//create array of company names
// const companyNames = companies.map(company => company.name)
// console.log(companyNames)
// const companyCategory = companies.map(company => company.category)
// console.log(companyCategory)
//sort
//sort companie by start year
// const sortCompany = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));
// console.log(sortCompany)
//sort ages
// const sortAges = ages.sort((a, b) => a - b)
// console.log(sortAges)
//reduce--->
// const totalAges = ages.reduce((total, age) => total + age, 0);
// console.log(totalAges)
//totals yearsfotr our companies
// const totalyears = companies.reduce((total, company) => total + (company.end - company.start), 0)
// console.log(totalyears)