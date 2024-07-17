// ----Explicit Declaration of Object Type in TypeScript----
// const person: {
//     name:string;
//     age:number;
// } = {
//     name:"Abby",
//     age:30
// };

// enum Role { ADMIN, READ_ONLY, AUTHOR } // ADMIN is mapped to 0; READ_ONLY is mapped to 1; AUTHOR is mapped to 2
// enum Role { ADMIN = 5, READ_ONLY, AUTHOR } // ADMIN is assigned 5; READ_ONLY is assigned 6; AUTHOR is assigned 7
enum Role { ADMIN = "ADMIN", READ_ONLY = "READ_ONLY", AUTHOR = "AUTHOR" }

const person= {
    name:"Abby",
    age:30,
    hobbies: ["Sports", "Cooking"],
    // role: [2, "author"] as [number, string]
    role: Role.AUTHOR
};

if (person.role === Role.AUTHOR) {
    console.log("This person is an author.");
}

let favoriteActivities: string [];
favoriteActivities = ["Sports"];

// for (const hobby of person.hobbies){
//     console.log(hobby.toUpperCase());
// }

// TypeScript will enforce the length and type constraints during development, 

let role: [number, string]  = [2, "author"]; // specifiying tuples as the data type

// person.role.push("admin");
// console.log(person.name);