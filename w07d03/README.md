# W07D03 - Data Fetching & Other Side Effects

### To Do
- [x] Rules for Hooks
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Cleanup
- [x] Dependencies
- [x] _useEffect_ Flow

### Rules for Hooks
* Have to called top-level (can't be called conditionally)
* They have to be called inside a React function

### Pure Function
* doesn't change it's parameters
* only takes inputs and gives outputs
* no side effects
* given the same arguments, will always return the same result

```js
let anotherNum = 2;

const add = (num) => {
  const result = num + anotherNum;
  console.log(result);
  return result;
}
```

### Common Side Effects
* writing to standard out
* fetching data
* interacting with the DOM
* calculating a value from existing state
* setting up timers/intervals
* establish socket connections



