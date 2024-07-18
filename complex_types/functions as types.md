Here's the formatted transcript with relevant code snippets:

---

So you can use types for function parameters and for the return value of the function.

Now, to take it to the next level, what if there were also a function type itself?

Let me make it clear what I mean. Let's say we have a variable `combineValues`, and this variable by default has a type of `any`. 

Now as you learned, `any` is not that useful. What I wanna do eventually is, I want to set `combineValues` equal to `add`. So I wanna store that `add` function, a pointer at this `add` function, in `combineValues` so that in the end, we can console log `combineValues` and execute `combineValues` as a function to which it has 8 and 8.

```typescript
let combineValues: any;
combineValues = add;
console.log(combineValues(8, 8)); // 16
```

Now if I save that and execute this after compiling it, we get 16 here. So, that works, and we would expect it to work because that is normal JavaScript code. We can store a pointer at a function in a number variable, and then the offer executes this variable as a function, because, well, it points at the function, right? So we can execute that function through that variable.

The problem we have with this snippet here from a TypeScript perspective is just that `combineValues` is `any`. So if I set `combineValues` to a number here thereafter, of course, we can't compile this, unfortunately, because TypeScript has no chance of detecting that this is unwanted or that this could cause a problem. But at runtime, it would get an error because obviously, we tried to execute `combineValues` as a function when it actually is a number.

```typescript
combineValues = 5;
console.log(combineValues(8, 8)); // Error at runtime
```

Now we want to avoid this, and for that, we need to be clear that `combineValues` will hold a function. The first step in that direction is that we set the type here to `Function`. `Function` is a type provided by TypeScript in the end, and this makes it clear that whatever we store in here has to be a function.

```typescript
let combineValues: Function;
combineValues = add;
console.log(combineValues(8, 8)); // 16
```

Therefore, here I'm getting an error because `5` is a number and not a function. And if I comment this out, we can compile this, otherwise, we would get an error during compilation, and now it again runs as expected.

```typescript
combineValues = 5; // Error during compilation
```

So this is good, but it's not perfect because now we say this should be a function, but it could also set `combineValues` equal to `printResult` for example here. And of course, TypeScript would not complain because `printResult` is a function, but of course, it's not a function that takes two arguments. So again if I compile this, TypeScript will not complain. But if we reload, we see `undefined` here and `Result: 8`. So I don't get the result I want because I stored the wrong function in there. Again, it would be nice if TypeScript would tell us about that.

```typescript
combineValues = printResult;
console.log(combineValues(8, 8)); // Undefined
```

TypeScript can't inform us about this because all we said to TypeScript is that we want to store a function there, and this is clearly the case. So it would be good if we could be more precise regarding how the function should look like that we want to store in `combineValues`.

And that's where function types come into play. Function types are types that describe a function regarding the parameters and the return value of that function. A function type is created with this arrow function notation you know from JavaScript or at least close to that notation. You don't add curly braces here because we aren't creating an arrow function here, we are creating a function type instead.

```typescript
let combineValues: (a: number, b: number) => number;
```

Now on the right side of this arrow, you specify the return type of the function you eventually want to be able to store in here. That should be `number`.

Now with that, we're saying `combineValues` accepts any function that takes no parameters and then returns a number. Now, that's of course not entirely what we want. We want to make sure that `combineValues` takes a function or is able to store functions that take two numbers and return a number.

And for that, we can add parameters here to this function type. We don't have to match the parameter names from up there, just types. So we could have `a` which should be of type `number` and `b` which should be of type `number`.

```typescript
let combineValues: (a: number, b: number) => number;
combineValues = add; // Works
combineValues = printResult; // Error
```

And now what we are saying to TypeScript is that `combineValues` should accept any function that takes two parameters where each parameter is a number, and where the function overall then returns a number. And that's why TypeScript does not complain about us storing `add` in `combineValues` because `add` is a function that perfectly satisfies this type definition. But it does complain about `printResult` because `printResult`, as it tells us here, is a function of type one argument which is a number, nothing is returned, whereas we actually expect to get a function with two arguments where each argument is a number, and we also return a number.

So we have a mismatch here, and if I would try to compile this, we therefore would get an error here, of course, in the compiler, and we only can fix this by removing this line of code.

Now we are able to recompile this without errors. And now this runs as expected. So function types allow us to describe which type of function specifically we want to use somewhere. Be that an expected value in a parameter, for creating a function with some callback, or, like here, a variable.

---

### Full Example

```typescript
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult; // Error: Argument of type '(num: number) => void' is not assignable to parameter of type '(a: number, b: number) => number'.

console.log(combineValues(8, 8)); // 16
```
