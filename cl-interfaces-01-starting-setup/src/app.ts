// Code goes here!

class Department {
    // name: string = 'DEFAULT';
    // private readonly id: string;
    // private  name: string;
    protected employees:string [] = [];

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

class ITDepartment extends Department {
    admins: string[];
    constructor (id:string, admins: string []) {
        super(id, "IT");
        this.admins = admins;
    }
}

// const IT =  new Department("id1", "IT");
const IT = new ITDepartment ("id2", ["Raych"]);

IT.addEmployee("Abby");
IT.addEmployee("Nduta");

// IT.employees[2] = "Mwaniki";

// IT.describe();
// IT.printEmployeeInfo();

console.log(IT);

class AccountingDepartment extends Department {
    constructor (id:string, private reports:string[]){
        super(id, "Accounting");
    }

    addReport(text: string){
        this.reports.push(text);
    }

    printReports(){
        console.log(this.reports);
    }

    addEmployee(name: string){
        if (name === "Abby"){
            return;
        }
        this.employees.push(name);
    }
}

const accounting = new AccountingDepartment("id3", []);

console.log(accounting);

accounting.addReport("Report1");

accounting.printReports();

accounting.addEmployee("Nyaguthii");
accounting.addEmployee("Abby");

accounting.printEmployeeInfo();

// console.log(IT.describe());

// const ITCopy = { name: 'DUMMY', describe: IT.describe };

// console.log(ITCopy.describe());