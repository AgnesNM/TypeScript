// function add (a:number, b:number){
//     let result;
//     result = a+b;
//     return result;
// }

// const add = (a: number, b:number) => {
//     return a + b;
// };

const add = (a: number, b:number = 1) => a + b;

// const printOutPut = (output:string | number) => console.log(output);

const printOutPut: (a: number | string) => void =  output => console.log(output);

printOutPut(add(5));

const button = document.querySelector('button');

if(button){
    button.addEventListener('click', event => console.log(event));
}

const hobbies = ["sports", "cooking"];

// console.log(hobbies[0]);

const activeHobbies = ["hiking"];

activeHobbies.push(hobbies[0], hobbies[1]);

// activeHobbies.push(...hobbies);

// activeHobbies.push(hobbies[0], hobbies[1]);

// console.log(activeHobbies);

const allHobbies = ["reading", ...hobbies];

console.log(allHobbies);

const person = {
    name:"Max",
    age:30
};

const copiedPerson = {...person};
console.log(copiedPerson);

const copiedPersonPointer = person;
console.log(copiedPersonPointer);
