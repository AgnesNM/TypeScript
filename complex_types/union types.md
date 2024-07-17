## Union Types

---

So we covered a couple of the core types TypeScript knows. Now let's move on.

For that, I'll rename `app.ts` here to `objs-arrays-enums`, or whatever you want to name it, basically so that we still have that file, but I'll create a brand new `app.ts` file so that we have an empty file again in which we can work.

Now in this file, I want to dive into another interesting type that you'll find in TypeScript, and that's the union type.

**Now what's that?** Let's come back to our `add` function, which we wrote earlier. I'll copy that and move it to `app.ts`. Get rid of that comment here, and here on `add`, let's close `basics.ts` so that we get rid of that error.

Here in `add`, I now want to be more flexible regarding what we accept here. I will also get rid of `showResult` and `phrase`, I don't need that. And the only thing I want to do is I want to calculate a result and return it. But I want to be more flexible regarding the inputs.

Previously, we made sure that we only work with numbers. Now let's say we actually name this `combine` and it should work with both numbers and strings. Because it turns out we can combine both numbers and strings with this plus operator. The only difference is that in one scenario, we get back a number as a result, and in the other scenario we get a concatenated string, as we actually already saw early on in this module.

But now I want to allow this behavior, because you could have an application where you want to have a flexible combination function that does work with numbers and strings.

Therefore, I will also name this `input1` here, and this `input2`, and combine these two now. But we will have one problem of course, right now we set both parameters to be numbers. This means that we can call this function, as long as we do want to work with numbers.

Let's say down there, we're creating a new constant, `combinedAges`. And there I call `combine` and pass in 30 and 26 here as ages in whatever application we're building. Another after `console.log(combinedAges)`, well it shouldn't be too surprising that if we now compile this file here, and we then reload this page, we get 56. So this works, we get this number.

But of course, we have a problem if we try to create a string here. `CombinedNames`, for example. If I try to combine Max and Anna here, then well, we immediately get an error here that Max is not assignable to type `number` because this, of course, is a string.

Now of course, we could change this to accept strings instead of numbers, but now the first function call would fail. And that is where union types can help us. If we have some place in our application, be that a parameter of a function or a constant or a variable we're using somewhere, where we accept two different kinds of values. Well then, a union type can help us.

To tell TypeScript that we are fine with either a number or a string, we use `number` and then the pipe symbol `|` here, and then the other type we also accept. And you can have more than two types, you can accept as many types here as you need. So here, I only need two though, and that's the afforded type assignment I will go with, `number | string`.

Now I get an error here, that the plus operator cannot be applied to types `string | number` and `string | number`. That's actually not entirely correct, this should work, because we can use the plus operator with both numbers and with strings. But TypeScript only sees that we have a union type here, and it doesn't analyze what's in the union type. It just sees, "Okay, you're expecting multiple types. Maybe that includes types where I can't use the plus operator, hence I will complain here."

Now thankfully, we can work around that issue though. We can add our runtime type check here and see if `typeof input1` is equal to `number` and if `typeof input2` is equal to `number`, and then move this calculation in there. Now just one improvement, let's create `result` as a variable outset of that if check, because of block scoping, so that this is a variable available in the entire function, and then just assign a new value in there.

So now here we check if we do have two numbers. And therefore TypeScript knows that in here, `input1` and `input2` both will be numbers. Now let's add an `else` check here. And there we can set `result` equal to `input1.toString()`, explicitly converting this to a string, and `input2.toString()`. And this will then also be fine for TypeScript and JavaScript, because we can concatenate two strings.

So now we have almost the same calculation, but we made clear that here, we'll always work with numbers, here we'll always work with strings, and then we return the result.

And now with that, if we `console.log` the combined names down there, and we compile this file, we'll see that once we revisit our page, we got the combined numbers there, which were simply added together and hence we get a number as a result, and two combined names here.

So this is how we can use union types to be more flexible regarding what we do in a function, for example, or anywhere else in our code. This extra runtime type check will not always be required when you work with union types, but often will be because with union types, you can be more flexible in, for example, the parameters you accept, but then you might have different logic in your function based on which exact type you are getting.

So that your function is able to work with multiple types of values but that it then does slightly different things depending on the type you're getting. So often, you might need such a runtime check when working with union types, but you'll not always need it. You will certainly also encounter situations in TypeScript programs where you can use a union type without a runtime type check. It really depends on the logic you're writing.

```typescript
function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges); // 56

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames); // MaxAnna
```

---

