## Type ALiases / Custom Types

---

Now, when working with union types, like this and this, it can be cumbersome to always repeat the union type. You might want to create a new type which reinstalls this union type. You can do that with another cool TypeScript feature: type aliases.

You create such an alias typically before you use it, so here at the top of the file in this case, with the `type` keyword. Now, the `type` keyword is not built into JavaScript; it's supported in TypeScript though. After `type`, you add the name of your custom type or your type alias.

For example, `Combinable`. But the name is really up to you. You can invent any name here which is not built into JavaScript or TypeScript as a key name. So, something like `Date` would not be allowed because that's built into JavaScript, but `Combinable` is not built into JavaScript or TypeScript, so we can use it.

And now, with the equal sign, you assign the type you want to encode in your alias, so to say. So, we could store a number here, and now whenever we want to make sure that something should be a number, we could use `Combinable` instead.

Now, that doesn't make too much sense; it arguably would even make our code harder to read. If I use `Combinable` down there, for example, this would work technically, but if we just glance over our code, it's not obvious that here we want a number or a string. Well, typically, therefore, you use that in conjunction with union types.

So, we can store a union type in our custom type, so to say, in our type alias, and now just refer to `Combinable` down there instead of our union type. So, we have exactly the same setup as before; we just have our reusable type alias here which we can use instead. And that allows us to save some extra code and make sure we always refer to the same types or the same type setup when we use `Combinable`.

And of course, we cannot just use that for number and string; we can use that for any type setup we might want to store in an alias, including these two literal types, for example. So, for these two types here, for this union type, we could also create the type alias `ConversionDescriptor`, or however you want to name it, and store exactly this type in this type alias. And now we can use this type alias down there.

So, type aliases are really, really useful. You can encode more complex type definitions into your own types, into your own type names, so to say, and reuse that everywhere in your code where you need exactly this type setup. This helps you avoid typos down there, save code, write code quicker, and always be clearer about your intentions, for example, by choosing descriptive type alias names up there.

---

Here are the code snippets to illustrate the concepts:

```typescript
// Defining a type alias for a union type
type Combinable = number | string;

// Using the type alias
let input1: Combinable;
input1 = 5;         // valid
input1 = "hello";   // valid

// Defining another type alias for a more complex union type
type ConversionDescriptor = "as-number" | "as-text";

// Using the new type alias
let input2: ConversionDescriptor;
input2 = "as-number";   // valid
input2 = "as-text";     // valid
```