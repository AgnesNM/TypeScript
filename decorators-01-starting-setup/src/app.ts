// //----Decorator---

// function Logger (constructor: Function) {
//     console.log("Logging...");
//     console.log(constructor);
// }

// --- Decorator Factory----

function Logger (logString: string) {
    console.log("LOGGER FACTORY");
    return function (constructor: Function){
        console.log(logString);
        console.log(constructor);
    }
}

// function WithTemplate(template:string, hookId: string){
//     return function(constructor: Function) {
//         const hookEl = document.getElementById(hookId);
//         if(hookEl){
//             hookEl.innerHTML = template;
//         }
//     }
// }

function WithTemplate(template:string, hookId: string){
    console.log("TEMPLATE FACTORY");
    return function(constructor: any) {
        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);
        const person2 = new constructor() ;
        if(hookEl){
            hookEl.innerHTML = template;
            hookEl.querySelector("h1")!.textContent = person2.name;
        }
    }
}

// @Logger("LOGGING - PERSON")
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = "Max";

    constructor (){
        console.log("Creating person object");
    }
}

const person1 = new Person;
console.log(person1);

