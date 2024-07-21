// Code goes here!

type Admin = {
    name: string;
    privileges: string [];
};

type Employee = {
    name:string;
    startDate:Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "Abby",
    privileges: ["create-server"],
    startDate: new Date()
};

// ----Intersection Types are closely related to Interface Inheritance-----

// interface Admin {
//     name: string;
//     privileges: string [];
// };

// interface Employee {
//     name:string;
//     startDate:Date;
// };

// type ElevatedEmployee = Admin & Employee;

// const e1: ElevatedEmployee = {
//     name: "Abby",
//     privileges: ["create-server"],
//     startDate: new Date()
// };

// interface Admin {
//     name: string;
//     privileges: string [];
// };

// interface Employee {
//     name:string;
//     startDate:Date;
// };

// interface ElevatedEmployee extends Admin, Employee {}

// const e1: ElevatedEmployee = {
//     name: "Abby",
//     privileges: ["create-server"],
//     startDate: new Date()
// };

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//-----type guards----


function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add (a: Combinable, b: Combinable){
    if (typeof a === "string" || typeof b === "string" ){
        return a.toString() + b.toString();
    }
    return a + b;
}

// const result = add ("Max", "Peters") as string;
const result = add ("Max", 1);
// console.log(result.split(''));

//---Optional chaining----

const fetchedUserData = {
    id: "u1",
    name: "Ndush",
    job : { title: "CEO", description: "My own company"}
}

// console.log(fetchedUserData.job && fetchedUserData.job.title);
console.log(fetchedUserData?.job?.title);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation (emp: UnknownEmployee){
//     console.log("Name: " + emp.name);
//     if ("privileges" in emp){
//         console.log("Privileges:"  + emp.privileges);
//     }
//     if ("startDate" in emp){
//         console.log("Start date:"  + emp.startDate);
//     }    
// }

// printEmployeeInformation(e1);

// printEmployeeInformation({
//     name: "Nduta",
//     privileges: ["delete-server"],
//     startDate: new Date()
// });

// class Car {
//     drive(){
//         console.log("Driving....");
//     }
// }

// class Truck {
//     drive(){
//         console.log("Driving a truck...")
//     }

//     loadCargo(amount: number){
//         console.log("Loading cargo..." + amount);
//     }
// }

// type Vehicle = Car| Truck;

// const v1 = new Car();

// const v2 = new Truck();

// // function useVehicle (vehicle: Vehicle){
// //     vehicle.drive();
// //     if ("loadCargo" in vehicle){
// //         vehicle.loadCargo(500);
// //     }
// // }

// function useVehicle (vehicle: Vehicle){
//     vehicle.drive();
//     if (vehicle instanceof Truck){
//         vehicle.loadCargo(500);
//     }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//     type: "bird";
//     flyingSpeed: number;
// }

// interface Horse {
//     type: "horse"
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// // function moveAnimal(animal: Animal){
// //     if ("flyingSpeed" in animal){
// //         console.log("Moving with speed: " + animal.flyingSpeed);
// //     }
// // }

// function moveAnimal(animal: Animal){
//     let speed;
//     switch(animal.type){
//         case "bird":
//             speed = animal.flyingSpeed;
//             break
//         case "horse":
//             speed = animal.runningSpeed;
//     }
//     console.log("Moving at speed: " + speed);
// }

// moveAnimal({type: "bird", flyingSpeed: 20});

// moveAnimal({type: "horse", runningSpeed: 100});

// // const userInputElement = <HTMLInputElement>document.getElementById('user_input')!;
// // const userInputElement = document.getElementById('user_input') as HTMLInputElement;

// const userInputElement = document.getElementById('user_input');

// if (userInputElement) {
//     (userInputElement as HTMLInputElement).value = "Hi there!";
// }


// //---Index Types---

// interface ErrorContainer {
//     [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//     email: "Not a valid email!",
//     userName: "Must start with a capital character!"
// };




