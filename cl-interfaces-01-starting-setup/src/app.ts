// Code goes here!

class Department {
    // name: string = 'DEFAULT';
    // private readonly id: string;
    // private  name: string;
    private employees:string [] = [];

    constructor (private readonly id: string, public name:string) {
        // this.id = id;
        // this.name = n;
    }

    describe (this: Department){
        console.log(`Department: ${this.id}: ${this.name}`);
    }

    addEmployee(employee:string){
        this.employees.push(employee);
    }

    printEmployeeInfo(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting =  new Department("id1", "Accounting");

accounting.addEmployee("Abby");
accounting.addEmployee("Nduta");

// accounting.employees[2] = "Mwaniki";

accounting.describe();
accounting.printEmployeeInfo();




// console.log(accounting.describe());

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// console.log(accountingCopy.describe());