//----Decorator---

function Logger (constructor: Function) {
    console.log("Logging...");
    console.log(constructor);
}

@Logger
class Person {
    name = "Max";

    constructor (){
        console.log("Creating person object");
    }
}

const person1 = new Person;
console.log(person1);

