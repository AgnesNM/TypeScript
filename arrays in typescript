Working with Arrays in TypeScript

---

Now, besides objects, we also have arrays in JavaScript, which are a very important type of data. Arrays in JavaScript are created like this:

```javascript
let array = [element1, element2, ...];
```

You can store various types of data in arrays, including numbers, strings, booleans, objects, and even other arrays. Arrays can be nested, and you can mix different data types. For instance, you can have an array with both strings and numbers.

TypeScript also supports arrays. Any JavaScript array is supported in TypeScript, and the types of the array can be either flexible or strict.

Let’s explore this in TypeScript. In `app.ts`, suppose our `person` object has a `hobbies` key. We could also have a variable or constant `hobbies` outside of the object. Arrays are used in exactly the same way inside and outside of objects.

For example:

```typescript
let hobbies: string[] = ["sports", "cooking"];
```

Here, `hobbies` contains two elements, which are strings. If you hover over `hobbies`, TypeScript correctly infers the type as `string[]`, which denotes an array of strings. This syntax indicates that the array contains elements of type string.

TypeScript infers the type because it detects that the array contains only strings. You can also explicitly set the type of a variable. For instance, if you add a new variable `favoriteActivities`, initially set to an empty array, you might want to explicitly define its type:

```typescript
let favoriteActivities: string[] = [];
```

If you try to store a single string in `favoriteActivities`, you’ll encounter an error:

```typescript
favoriteActivities = "sports"; // Error: Type 'string' is not assignable to type 'string[]'.
```

This error occurs because `favoriteActivities` is defined as an array of strings, not a single string. Wrapping the string in square brackets will resolve the issue:

```typescript
favoriteActivities = ["sports"];
```

However, if you try to include a number in this array:

```typescript
favoriteActivities = ["sports", 42]; // Error: Type 'number' is not assignable to type 'string'.
```

You'll get an error because the array was defined to hold only strings. To support a mixed array, you can use the `any` type:

```typescript
let mixedArray: any[] = ["sports", 42];
```

The `any` type in TypeScript is very flexible but should be used sparingly as it defeats the purpose of type safety in TypeScript. It essentially turns off type checking, allowing any type of value to be used.

Here’s an example of iterating over an array in TypeScript:

```typescript
for (const hobby of person.hobbies) {
    console.log(hobby);
}
```

This `for` loop goes through each hobby in `person.hobbies`, storing each hobby in the `hobby` constant and logging it to the console. TypeScript knows that `hobby` is a string because `person.hobbies` is an array of strings. This allows TypeScript to provide auto-completion for string methods like `toUpperCase()`.

If you try to call a method that doesn’t exist on a string, like `map`, TypeScript will give an error:

```typescript
hobby.map(); // Error: Property 'map' does not exist on type 'string'.
```

The `map` method is available on arrays but not on strings. TypeScript’s type inference helps catch such errors, making your code more reliable.

In summary, arrays are a powerful and flexible feature in JavaScript and TypeScript. TypeScript's type inference and type checking provide additional safety and flexibility when working with arrays, ensuring that your code behaves as expected.

