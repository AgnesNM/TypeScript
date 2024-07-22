// //----Decorator---

// function Logger (constructor: Function) {
//     console.log("Logging...");
//     console.log(constructor);
// }

// --- Decorator Factory----

function Logger (logString: string) {
    return function (constructor: Function){
        console.log(logString);
        console.log(constructor);
    }
}

@Logger("LOGGING - PERSON")
class Person {
    name = "Max";

    constructor (){
        console.log("Creating person object");
    }
}

const person1 = new Person;
console.log(person1);

