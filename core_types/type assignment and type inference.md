Type Assignment and Type Inference

So we're using the core types of `number`, `boolean`, and `string`.

In the list of parameters for this function, we explicitly assign types with a colon after the parameter name, followed by the name of the type. In this case, the types are `number`, `boolean`, and `string`.

These are special identifiers introduced by TypeScript. This syntax is unique to TypeScript and is not part of the compiled JavaScript code. When we compile the code, these type assignments are removed because JavaScript does not support them. JavaScript does not understand the colon syntax after a parameter or variable, or the special keywords like `number` and `boolean`. This TypeScript-specific syntax is only understood by the TypeScript compiler and supported by the IDE.

The TypeScript compiler uses this syntax to convert TypeScript code into JavaScript. As a side note, you might also notice that `const` is switched to `var` in the compiled code, but we’ll address that later.

In TypeScript, explicit type assignments are only needed when necessary. TypeScript has a feature called type inference, which means it can automatically deduce the type of a variable or constant. For instance, if `number1` is initialized with a number, TypeScript understands that `number1` will always be of type `number`. 

Since `number1` is a constant, TypeScript infers the type to be specifically the number five, not just any number. If `number1` were changed to a variable using `let`, it would still work, but it’s generally not best practice since the value never changes. 

Hovering over the variable shows that TypeScript detects its type as a `number`, not necessarily the number five. We could explicitly define the type by adding a colon after the variable name and specifying the type, similar to how we do it for function parameters. However, this is redundant because TypeScript already infers the type accurately.

Explicitly assigning a type is only necessary if the variable is declared without an initial value. In such cases, it’s good practice to specify the type to help TypeScript understand what type will eventually be assigned. 

For example, if you declare a variable without initializing it and specify the type:

```typescript
let value: number;
```

If you then try to assign a value of a different type, like a string, TypeScript will give you an error:

```typescript
value = "string"; // Error: Type 'string' is not assignable to type 'number'.
```

If you don’t specify the type and later assign a different type, TypeScript will allow it because it doesn’t have prior information about the intended type. Explicitly specifying the type helps prevent such issues by ensuring TypeScript knows what type to expect.

Even when TypeScript infers a type, it will raise an error if you try to assign a value of a different type. For example, if `resultPhrase` is initialized with a string:

```typescript
let resultPhrase = "Hello";
```

TypeScript infers that `resultPhrase` is of type `string`. If you later assign a number to it:

```typescript
resultPhrase = 0; // Error: Type 'number' is not assignable to type 'string'.
```

This ensures that the types are used correctly and helps catch errors early, which is the core purpose of TypeScript—checking types and alerting us when they are used incorrectly.

---

