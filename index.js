//arrow function
const addNums = (a = 0, b = 0) => a + b;
// console.log(addNums(3, 9))
//==========================================================================================================================================

//object oriented programming
// we can create objects using constructor functions withn prototypr.
//when creating a constructor functionmust start withna capital.
//in constructor function to set a value of parameter, we use this keyword

//constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    //with constructor functions,we can add methods  i.e
    this.getBirthYear = function() {
            return this.dob.getFullYear();
        }
        //full name
    this.fullName = () => `${this.firstName} ${this.lastName}`
}

//console.log(person1)- when we console the person,we see  the above methods appearing to the constructor and we dont want that,therefore we introduce prototype to hide 
Person.prototype.fullName = function() {
    return `${this.firstName} ${this.lastName}`
}
Person.prototype.getBirthYear = () => this.dob.getFullYear();

//instantiate the object with constructor function
const person1 = new Person('lincolin', 'angaya', '1998');
const person2 = new Person('lenox', 'Owade', '12-09-2000');
// console.log(person1.getBirthYear())
// console.log(person1.fullName())
//------------------------------------------------------------------------------------------------------------------------------------------
//