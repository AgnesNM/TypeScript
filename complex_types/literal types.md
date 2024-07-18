## Literal Types

---

So, now, we got union types here.

Let's build up on that idea of union types and also introduce Literal types.

Literal types are types where you don't just say that a certain variable or a parameter should hold, let's say a number or a string, but where you are very clear about the exact value it should hold.

We saw that early already here in basics.

```typescript
const numberTwo = 2.8;
```

There, if I hover over that you see the type which was inferred is not `number` it's `2.8`. TypeScript did infer this concrete number as a type here because it's a constant. It will never change and therefore TypeScript knows the value I assigned here is the exact type I have. So, of course, this is a number, you could say 2.8 is derived from the `number` type, but it's a specific number. And this does not just exist for numbers, but also for strings and so on. And especially for strings, it can be very useful.

Let's say here in our `combine` function, we expect numbers or strings and we combine them differently based on what we get but we also want to allow the caller of the function to define how the result should be returned so that we can basically force a conversion from number to string or the other way around. We could do this with the third parameter and we could name that, let's say `resultType` or `resultConversion` or however you want to name it, and I want to describe this with a string.

So I'll set this to type string. Now my idea is that I can call `combine` here with two numbers and for example pass in a string of `"as-number"` and it's totally up to you which identifier you use here. Down there we might have `"as-text"` but then we might have another combination here:

```typescript
combine(30, 26, "as-number");
```

where I pass in two strings but I still want to output this `"as-number"` and this would be a case where the third parameter can be helpful to force a conversion because if I pass in two strings here normally we would make it into this else branch and concatenate it and I might want to return this as a number instead so that I can also console log combined string agents here.

So now we just have to take these identifiers into account in our function by including `resultConversion` in our if checks. Now the question is what exactly do we want to do; do we want to make sure that we can force these two strings to be added as numbers or do we want to force the result no matter if it was a mathematical calculation or a string concatenation to be converted to a text or a number?

If we want to force a conversion we could add the if check here and check if `resultConversion` is equal to `"as-number"` and if that's the case I want to return `result` with a plus in front of it which converts it to a number, the alternative would be `parseFloat` for example, but here I'll just go for the plus since this is a bit shorter and else I want to return `result.toString` to force an output as a string.

So now we do the calculation based on the real type we get but then we convert the result. That's one way of doing that and if we save that and we then compile this file, we see this is the result I get and we get that output for example for our string combination here because as I said, the combination itself the calculation so to say is performed based on the type we feed in which here is string so we concatenate it and then we just convert the result.

The alternative logic would be to check the type here and do a different operation based on the return type we're specifying here. So we could comment this out and instead here say if the type of `inputOne` is number and the type of `inputTwo` is number, or if `resultConversion` is equal to `"as-number"` then I want to combine values like this:

```typescript
function combine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultConversion === 'as-number') {
    return +result;
  } else {
    return result.toString();
  }
}
```

and now to avoid this error, here I force the conversion to numbers by adding a plus in front of each input so that each input is converted to a number and is guaranteed to be a number before I combine them.

Side note: if you would pass in strings that can't be converted to a number, so something like "Max" for example, then you'll get an NaN, Not a Number as a result. Well then in the else case, so that we don't have "as-number", or that we simply don't have number inputs, then we make it into this block here and now with that if I return `result` again here, and then we then save this and recompile, we'll see a different output on our page.

Now we get 56 in these two lines here because now we're not converting the result, so we're not converting the concatenated string for this line but instead we're doing the conversion before we combine the two values. So that's up to you which logic you want to implement.

I actually want to have a closer look at the literal types concept which I described at the beginning of this lecture. I'm passing an `"as-number"` and `"as-text"` and the downside of this is that right now we as a developer have to memorize these values. We have to make sure that we don't mistype here.

Now we could use an enum to improve that but if we only have two values here, `"as-text"` or `"as-number"`, then maybe a literal type could be an option. We could say "this shouldn't be any string, it should be `"as-number"` or `"as-text"`"

So we use a union type combined with literal types. Literal types are the types which are based on your core types string, number, and so on but then you then have a specific version of the type. So here, we allow specifically these two strings not any string just these two strings. So we want a string for `resultConversion`, but it has to be one of these two values. Any other string value will not be allowed, so that's the idea behind a literal type and often you will use this in the context of the union type because you don't just want to allow one exact value, you could hard code it into your code if that would be the case, but you want to have two or more possible values. In this case we got two possible values.

So now we're guaranteed to get `resultConversion` which is either `"as-number"` or `"as-text"` and for example here, if I now try to compare this to `as-numbe` because I have a typo here, TypeScript is able to tell me here in the IDE and of course all that we save it and compile it here in the terminal because it knows that `as-numbe` without an "r" at the end will never be a valid value for `resultConversion` because I set this union type with these literal types.

So now we again gained some extra type safety and ensure we can't use this incorrectly. The same of course for passing in a value. If we have a typo here, we get an error only if we use either `"as-number"` or `"as-text"` we're allowed to compile this as you see it and now compile this, this works and we get the same output as before here. So these are literal types especially useful when used in conjunction with union types.

```typescript
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text'
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultConversion === 'as-number') {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedAges = combine(30, 26, 'as-number');
const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedAges); // 56
console.log(combinedStringAges); // 56
```

