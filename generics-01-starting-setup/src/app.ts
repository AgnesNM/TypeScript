// Code goes here!

// const names = ["Abby", "Nduta"]; // type is string []

// const names = []; // type is any []

// const names: any [] = []; //  type is any []

// const names: Array <string | number> = []; // Generic type which is equal to string [] or number []

// const names: Array <any> = []; // Generic type Array which is equal to any[]

const names: Array <string> = []; // Generic type Array which is equal to string []

// names[0].split(' '); // call string methods

//----Promises----

// const promise: Promise <string> = new Promise((resolve, reject) => { // Generic type Promise
//     setTimeout(() => {
//         resolve("This is done!");
//     }, 2000);
// });

// const promise: Promise <any> = new Promise((resolve, reject) => { // Generic type Promise
//     setTimeout(() => {
//         resolve("This is done!");
//     }, 2000);
// });

// promise.then(data => {
//     data.split(' ');
// });

//---Custom Generics ---

function merge<T extends object, U extends object>(objA:T, objB:U) {
    return Object.assign(objA, objB);
}

// console.log(merge({ name: "Abby"}, {age: 30}));

const mergedObj = merge({ name: "Abby", hobbies: ["Sports"]}, {age:30});

console.log(mergedObj.age);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string]{
    let descriptionText = "Got no value.";
    if (element.length === 1){
        descriptionText = "Got 1 value.";
    } else if (element.length > 1){
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText ]; // Tuple
}

console.log(countAndDescribe("Hi there!"));

console.log(countAndDescribe(["Sports", "Cooking"]));

console.log(countAndDescribe([]));

function extractAndConvert<T extends object, U extends keyof T> (obj: T, key: U){
    return "Value: " + obj[key];
}

console.log(extractAndConvert({name: "Abby"}, "name"));
