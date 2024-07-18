Here is the script formatted using Markdown, including relevant code snippets for clarity:

---

## Callbacks and Function Types in TypeScript

When working with callbacks and function types in TypeScript, the process is quite similar to other languages.

### Example: `addAndHandle` Function

Let's create a function `addAndHandle` which expects two numbers and a callback function that processes the result.

#### Function Definition

```typescript
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}
```

Here, `cb` is a callback function that takes a number as an argument and doesn't return anything.

#### Calling `addAndHandle`

```typescript
addAndHandle(10, 20, (result) => {
    console.log(result);
});
```

In this example, we're calling `addAndHandle` with two numbers (`10` and `20`) and an anonymous callback function that logs the result.

### Key Points

1. **Callback Type Definition**: The callback should be a function that accepts a number.
2. **Parameter Enforcement**: TypeScript enforces the number and types of parameters for the callback function.
3. **Return Type**: Although the callback is defined to return `void`, it can still return a value, but that value will be ignored.

#### Explanation

- **Function Type Definition**: By defining the callback type, TypeScript knows that `result` will be a number.
  
  ```typescript
  type Callback = (num: number) => void;
  ```

- **Parameter Enforcement**: If the callback expects more parameters than provided, TypeScript will throw an error.

  ```typescript
  function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
      const result = n1 + n2;
      cb(result);
  }
  ```

- **Ignoring Return Values**: Specifying `void` for the callback type means that any return value will be ignored.

  ```typescript
  addAndHandle(10, 20, (result) => {
      console.log(result);
      return result; // This return value will be ignored
  });
  ```

This approach ensures that the `addAndHandle` function only concerns itself with the number of parameters the callback expects, not its return type. This is useful for ensuring the consistency and reliability of the callback mechanism in TypeScript.

---

This formatted version provides a structured explanation along with the relevant code snippets to illustrate the concepts discussed.