// function add (a:number, b:number){
//     let result;
//     result = a+b;
//     return result;
// }

// const add = (a: number, b:number) => {
//     return a + b;
// };

const add = (a: number, b:number = 1) => a + b;

// const printOutPut = (output:string | number) => console.log(output);

const printOutPut: (a: number | string) => void =  output => console.log(output);

printOutPut(add(5));

const button = document.querySelector('button');

if(button){
    button.addEventListener('click', event => console.log(event));
}