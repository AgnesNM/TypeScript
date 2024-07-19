type User = { name: string; age: number };
const user1: User = { name: 'Max', age: 30 };

// function greet (user: { name: string; age: number } ){
//     console.log(`Hi, I am ${user.name}`);
// };



// function isOlder ( user: { name: string; age: number }, checkAge: number ){
//     return checkAge > user.age
// };

// let ageDifference = isOlder(user1, 50);
// console.log(ageDifference);

function greet (user : User) {
    console.log(`Hi, I am ${user.name}`);
}

greet(user1);

function isOlder (user: User, checkAge: number) {
    return checkAge > user.age
}

let ageDifference = isOlder(user1, 50);
console.log(ageDifference);