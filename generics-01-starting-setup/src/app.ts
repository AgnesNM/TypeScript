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

// console.log(mergedObj.age);

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

// console.log(countAndDescribe("Hi there!"));

// console.log(countAndDescribe(["Sports", "Cooking"]));

// console.log(countAndDescribe([]));

function extractAndConvert<T extends object, U extends keyof T> (obj: T, key: U){
    return "Value: " + obj[key];
}

// console.log(extractAndConvert({name: "Abby"}, "name"));


// ------Generic Classes -----

class DataStorage<T> {
    private data: T[]  = [];

    addItem (item: T){
        this.data.push(item);
    }

    removeItem(item: T){
        //---Object Workaround
        if(this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems (){
        return [...this.data];
    }
}

//---Alternative---working with primitives

// class DataStorage<T extends string | number | boolean> {
//     private data: T[]  = [];

//     addItem (item: T){
//         this.data.push(item);
//     }

//     removeItem(item: T){
//         //---Object Workaround
//         if(this.data.indexOf(item) === -1){
//             return;
//         }
//         this.data.splice(this.data.indexOf(item), 1);
//     }

//     getItems (){
//         return [...this.data];
//     }
// }

const textStorage = new DataStorage<string>();
textStorage.addItem("A string");

textStorage.addItem("Second string");
textStorage.removeItem("A string");

// console.log(textStorage.getItems());

const objStorage = new DataStorage<object>();
const johnObject = {name: "John"};

objStorage.addItem(johnObject);
objStorage.addItem({name:"Bosco"});
// //...
// objStorage.removeItem({name: "Bosco"});

objStorage.removeItem(johnObject);
// console.log(objStorage.getItems());


//---Generic Utility Types

interface CourseGoal {
    title: string;
    description: string;
    completeUntil:Date;
}

// function createCourseGoal (title: string, description: string, date:Date): CourseGoal{
//     return {title: title, description: description, completeUntil:date};
// }

function createCourseGoal (
    title: string,
    description: string,
    date:Date
): CourseGoal{
    let courseGoal:Partial<CourseGoal>= {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const users: Readonly<string []> = ["Abby", "Mwaniki"];
// users.push("Nduta");
// users.pop();


















