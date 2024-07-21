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

function add (a: Combinable, b: Combinable){
    if (typeof a === "string" || typeof b === "string" ){
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation (emp: UnknownEmployee){
    console.log("Name: " + emp.name);
    if ("privileges" in emp){
        console.log("Privileges:"  + emp.privileges);
    }
    if ("startDate" in emp){
        console.log("Start date:"  + emp.startDate);
    }    
}

printEmployeeInformation(e1);

printEmployeeInformation({
    name: "Nduta",
    privileges: ["delete-server"],
    startDate: new Date()
});

class Car {
    drive(){
        console.log("Driving....");
    }
}

class Truck {
    drive(){
        console.log("Driving a truck...")
    }

    loadCargo(amount: number){
        console.log("Loading cargo..." + amount);
    }
}

type Vehicle = Car| Truck;

const v1 = new Car();

const v2 = new Truck();

// function useVehicle (vehicle: Vehicle){
//     vehicle.drive();
//     if ("loadCargo" in vehicle){
//         vehicle.loadCargo(500);
//     }
// }

function useVehicle (vehicle: Vehicle){
    vehicle.drive();
    if (vehicle instanceof Truck){
        vehicle.loadCargo(500);
    }
}

useVehicle(v1);
useVehicle(v2);

