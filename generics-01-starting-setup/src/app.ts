// Code goes here!

// const names = ["Abby", "Nduta"]; // type is string []

// const names = []; // type is any []

// const names: any [] = []; //  type is any []

// const names: Array <string | number> = []; // Generic type which is equal to string [] or number []

// const names: Array <any> = []; // Generic type Array which is equal to any[]

const names: Array <string> = []; // Generic type Array which is equal to string []

names[0].split(' '); // call string methods

//----Promises----

const promise: Promise <string> = new Promise((resolve, reject) => { // Generic type Promise
    setTimeout(() => {
        resolve("This is done!");
    }, 2000);
});

// const promise: Promise <any> = new Promise((resolve, reject) => { // Generic type Promise
//     setTimeout(() => {
//         resolve("This is done!");
//     }, 2000);
// });

promise.then(data => {
    data.split(' ');
});

