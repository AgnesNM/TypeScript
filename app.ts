function add (n1:number, n2:number) : number{
    return n1+n2;
};

// function add (n1:number, n2:number): string {
//     return n1.toString() +n2.toString();
// };

function printResult(num:number): void {
    console.log('Result: ' + num);
}

// function printResult(num:number): undefined {
//     console.log('Result: ' + num);
//     return;
// }

// printResult(add(5,12));

let someValue: undefined;
someValue = undefined;

let combineValues: (a: number, b:number) => number;
combineValues = add;


console.log(combineValues(8,8));
