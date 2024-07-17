// ----Explicit Declaration of Object Type in TypeScript----
// const person: {
//     name:string;
//     age:number;
// } = {
//     name:"Abby",
//     age:30
// };

const person= {
    name:"Abby",
    age:30,
    hobbies: ["Sports", "Cooking"]
};

let favoriteActivities: string [];
favoriteActivities = ["Sports"];

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}


console.log(person.name);