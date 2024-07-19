let userInput : unknown;
let userName : string;

userInput = 5;
userInput = "Max";

if(typeof userInput == "string"){
    userName = userInput;
}

function generateError(message:string, code: number):never {
    throw {message: message, erroCode: code};
}

const result = generateError("An error occured!", 100);
console.log(result);