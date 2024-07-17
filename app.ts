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
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"] as [number, string]
};

let favoriteActivities: string [];
favoriteActivities = ["Sports"];

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}

// TypeScript will enforce the length and type constraints during development, 

let role: [number, string]  = [2, "author"]; // specifiying tuples as the data type


person.role.push("admin");



console.log(person.name);