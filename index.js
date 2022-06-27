// //arrow function
// const addNums = (a = 0, b = 0) => a + b;
// // console.log(addNums(3, 9))

// //==========================================================================================================================================

// //object oriented programming
// // we can create objects using constructor functions withn prototypr.
// //when creating a constructor functionmust start withna capital.
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
const video = {
    title: 'link',
    play() {
        console.log(this)
    }
};
video.play();