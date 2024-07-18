# Function Return Types and "Void"

---

# New File and Function Deep Dive

## Renaming and Creating New Files

I'll rename `app.ts` to `union-aliases.ts`, and add a new `app.ts` file where we can start from scratch again. Close the other file.

## Deep Dive into Functions

Now, of course, we've already worked with functions. For example, here in the `union-aliases.ts` file with the `combine` function. 

You saw that for functions, you can assign types to the parameters. Well, turns out there's a bit more you can do with functions and types.

## Creating the Add Function

I'll recreate my `add` function, which simply accepts numbers (not strings) and returns `n1 + n2`. Not too tricky.

```typescript
function add(n1: number, n2: number) {
  return n1 + n2;
}
```

## Assigning Types to Parameters and Return Types

As I mentioned, we can assign types to parameters. The function overall, however, has one important other type: it has a return type. 

Here, the return type is inferred by TypeScript. We can see it if we hover over `add`. Here at the end, the colon after the parameter list describes the return type of the function—the type of the returned value.

Since we return the addition of `n1` and `n2` (both numbers), TypeScript infers the result will be a number, and thus, the return type of this function will be a number.

If we concatenate them as strings with `toString`, TypeScript would correctly infer that we return a string.

```typescript
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// With toString
function add(n1: number, n2: number): string {
  return n1.toString() + n2.toString();
}
```

## Explicit Return Types

You can always explicitly assign a return type by adding a colon after the parameter list, followed by the type you want to return, like `number`.

If you set this to `string`, you would get an error because the calculation does not match the described return type.

```typescript
function add(n1: number, n2: number): number {
  return n1 + n2; // Correct
}

function add(n1: number, n2: number): string {
  return n1 + n2; // Error
}
```

Just as with variables, it's a good idea to let TypeScript infer the type unless you have a specific reason for explicitly setting it.

## The Void Type

Regarding return types, there is one interesting type: `void`. 

Let's say we have the `printResult` method. It takes a `number` argument and logs it as part of a string.

```typescript
function printResult(num: number): void {
  console.log('Result: ' + num);
}

printResult(add(5, 12)); // Calls add(5, 12) and prints the result
```

When compiled and viewed on a page, it shows `Result: 17`.

The interesting part here is the return type of `printResult`. You might think it's `string` because we create a string in it, but we're not returning anything.

Thus, `printResult` has a `void` return type.

```typescript
function printResult(num: number): void {
  console.log('Result: ' + num);
}
```

## Void vs. Undefined

JavaScript doesn't have a name for this situation, but TypeScript does. This function has a return type of `void`.

```typescript
function printResult(num: number): void {
  console.log('Result: ' + num);
}

console.log(printResult(add(5, 12))); // undefined
```

In JavaScript, if a function doesn't return anything, it returns `undefined`. `undefined` is a real value in JavaScript and a valid type in TypeScript.

```typescript
let someValue: undefined;
someValue = undefined;
```

A function is not allowed to return `undefined`. Use `void` if a function returns nothing and not `undefined`.

```typescript
function printResult(num: number): void {
  console.log('Result: ' + num);
  return; // No error
}

function printResult(num: number): undefined {
  console.log('Result: ' + num);
  return; // Error
}
```

Use `void` in scenarios where a function does not return a value. `undefined` is rare and used when you return without an actual value.

## Summary

- Use `void` if a function has no return statement.
- `undefined` is a valid TypeScript type but rarely needed for functions.
- TypeScript infers types, but you can explicitly set them for clarity.

```typescript
function printResult(num: number): void {
  console.log('Result: ' + num);
}
```

---
