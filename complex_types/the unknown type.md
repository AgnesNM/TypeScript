Here's the transcript formatted in Markdown, including the relevant code snippets:

---

## TypeScript and Core Types

We're almost done with the basics about TypeScript and the core types. There are two more types which are good to be aware of because they will matter from time to time.

### The `unknown` Type

For that, I'll name this file `your functions.ts` and add a new `app.ts` file. In there, let's say we have a new variable, `userInput`, and this is of type `unknown`. It's not of type `any`, which would be the default, but `unknown`, which is a different type introduced by TypeScript. It might be unknown because we don't know yet what the user will eventually enter. If it's a number, if it's a string, we don't know.

Now the interesting thing about the `unknown` type is we can store any value in there without getting errors, so this is all allowed. If I now compile my file here, you see I get no compilation error. So, thus far, it's the same as if we wouldn't have assigned a type here, and hence we have the `any` type or if we would have explicitly set `any` as the type.

But still, `unknown` is different from `any`. This here works, but we'll run into issues if I have another variable, let's say `userName`, which should be a string. And that's uninitialized here, but then here I want to set `userName` equal to `userInput`. Now you see we're getting an error: "The type `unknown` is not assignable to type `string`". So, `userName` wants a string, and of course `unknown` is not guaranteed to be a string. Here, I assigned one, but that's just the case in this line. `userInput` technically could hold any value because it's `unknown`.

Now, the interesting thing is if I switch `unknown` to `any`, this error goes away because `any` is the most flexible type in TypeScript and it basically disables all type checking and TypeScript just says, "I give up, do whatever you want." `Unknown` is a bit more restrictive than `any`. With `unknown`, we have to first of all check the type that's currently stored in `userInput` before we can assign it to, for example, a variable that wants a string.

So, since a string is wanted here, we could check if `typeof userInput` is equal to `string` and TypeScript will detect this check and understand that in here, what is stored in `userName` because it ends out of this `if` statement, where I check for `userInput` being of type `string`, `userInput` is guaranteed to be a string and therefore I can safely assign it to `userName`.

```typescript
let userInput: unknown;
let userName: string;

userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}
```

So, I need such an extra type check here with `unknown` to be able to assign an `unknown` value to a value with a fixed type and therefore `unknown` is the better choice over `any` if you know "I can't tell exactly what type is stored in there, it might be a number, it might be a string, but I know what I want to do with it eventually." Well, just add an extra check to make sure that what you want to do can be done, so that if you want to work with a string, you have a string, and you're good.

And then `unknown` is better than `any` because it makes sure that you're not allowed to do everything but you have at least some type checking. Of course, if you have a chance of knowing in advance that `userInput` is always a string, or always a string or a number, well then you should use `string` or such a union type instead of `unknown`.

So, `unknown` still is a type you shouldn't use all the time, but it is better than `any` for the reasons described.