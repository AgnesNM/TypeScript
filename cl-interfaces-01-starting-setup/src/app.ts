// Code goes here!

class Department {
    // name: string = 'DEFAULT';
    name: string;

    constructor (n:string) {
        this.name = n;
    }

    describe (this: Department){
        console.log(`Department: ${this.name}`);
    }
}

const accounting =  new Department("Accounting");

// console.log(accounting.describe());

const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

console.log(accountingCopy.describe());