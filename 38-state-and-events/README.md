# State and Events

## DQ Questions?

- setting state: callback vs value (this works 95%); what's happening under the hood?

## SWBATs

- [ ] Add event handlers to elements in React
- [ ] Explain why we have Synthetic Events
- [ ] Use the `useState` hook to create state variables
- [ ] Create event handler callbacks that manipulate `state`
- [ ] Trigger re-renders by setting state
- [ ] Correctly choose when to use `props` vs `state`, and explain why one would use one or the other

## Outline

- [ ] Review app code
  - Show props destructuring
- [ ] Review [React Docs on Events](https://reactjs.org/docs/events.html)
- [ ] Handle events and introduce state by creating a click counter
- [ ] Use the `useState` hook to create a **state variable**
  - Show that `setState` is asynchronous
  - Using `setState` with value vs function

## Deliverables

- [ ] **Breakout Exercise** Add a 'like' button to each project card
- [ ] Filter the list of projects when a filter button is clicked
- [ ] **Breakout Exercise** Add a search feature to the project list
- [ ] (if there's time) fetch data on click

## Lecture Notes

### Using Events

In vanilla JS, our steps for handling events looked likes this:

1. Find piece of DOM: `const beef = document.getElementById("beef")`
2. Add event listener to that piece: `beef.addEventListener`
3. Give callback to event listener (remove, add, etc.):
   `beef.addEventListener("click", () => {console.log("BEEF!")})`

In React, we don't have to do step 1, we can skip directly to step 2 by adding
event handlers directly to our JSX. We still must supply the event handler with
a callback.

For example, if we're trying to implement a click handler on a button, we could
do so in a Class Component by passing a callback function to the onClick
attribute of an element:

```js
function Counter() {
  return <button onClick={() => console.log("clicked!")}>Click Me</button>;
}
```

Events can only be attached to DOM elements, we can't attach event listeners to
our components:

```js
function Counter() {
  return (
    <div>
      <button onClick={() => console.log("clicked!")}>Click Me</button>
      <MyCustomButton onClick={() => console.log("will never fire")}>
        Click Me
      </MyCustomButton>
    </div>
  );
}
```

We can also create a helper function for the callback:

```js
function Counter() {
  function handleClick(event) {
    console.log(event);
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

### Synthetic Events

Rather than working with the native `event` object in the browser, React passes
a [Synthetic Event](https://reactjs.org/docs/events.html) object to our event
handlers. Synthetic events ensure that you can use the `event` object in the
same way regardless of browser or machine. This comes back to the
`learn once, write anywhere` principle.

Otherwise, events are more or less the same as they are in vanilla JS.

## State

State is used for data that needs to be dynamic. Where props are passed down
from parents to children and are static, values stored in state are meant to
change, especially as the user interacts with the DOM.

This is a key component of declarative programming in React: we tie our
components to our state by integrating values in state into logic (e.g.
conditional rendering). This way, changes in state eventually cause changes to
the DOM.

To work with state in a function component, we use the `useState` hook:

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return <button>Count: {count}</button>;
}
```

When we call `useState(0)` inside the function component, that creates a new
"state variable" which our function gets access to. That new state variable has
an **initial value** of 0 (or whatever we pass into `useState` when we call it).

`useState` will return an **array** that has two things inside of it:

- `count`: the current value for the state variable
- `setCount`: a _setter_ function so we can update the state variable

We could access those elements from the array individually, like this:

```js
const countState = useState(0);
// => [0, setStateFunction]
const count = countState[0];
const setCount = countState[1];
```

But to clean up the code, React recommends using
[array destructuring][destructuring] to achieve the same result in one line of
code instead of three:

```js
const [count, setCount] = useState(0);
```

We can then use the `count` variable to access that piece of state and display
its current value in the `<button>` element.

### Setting State

To update a state variable, we use its setter function:

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Count: {count}</button>;
}
```

Calling the setter function does two things:

- It updates the state variable to some new value
- It causes our component to **re-render** and update the DOM

Updates to state are asynchronous - this means that code written immediately
after updating state will not see changes in your state.

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log(count); // => 0
    setCount(count + 1);
    console.log(count); // => 0
    setCount(count + 1);
    console.log(count); // => 0
  }

  return <button onClick={handleClick}>Count: {count}</button>;
}
```

`setState` can take an value OR a function as its first argument. Since
[updates to state and props may be asynchronous](https://reactjs.org/docs/hooks-reference.html#functional-updates),
you should use the function version of `setState` when you intend to use the
previous state or props values when writing the new state values.

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    // callback version of setState
    setCount((count) => count + 1);
  }

  return <button onClick={handleClick}>Count: {count}</button>;
}
```

### Deciding... should it be state? Where should state be?

From Step 3 of
[Thinking in React](https://reactjs.org/docs/thinking-in-react.html): to decide
what we need as `state`, ask three questions about each piece of data:

- Is it passed in from a parent via props? If so, it probably isn’t state.
- Does it remain unchanged over time? If so, it probably isn’t state.
- Can you compute it based on any other state or props in your component? If so,
  it isn’t state.

From Step 4 of Thinking in React: To decide where state should live, for each
piece of state in your application:

- Identify every component that renders something based on that state.
- Find a common owner component (a single component above all the components
  that need the state in the hierarchy).
- Either the common owner or another component higher up in the hierarchy should
  own the state.
- If you can’t find a component where it makes sense to own the state, create a
  new component solely for holding the state and add it somewhere in the
  hierarchy above the common owner component.

### Lifting State

If more than one component needs the same piece of state...

- Find the closest common ancestor
- Move state (and any functions that set state) to that ancestor
- Pass down state as props to any components that need it, and pass down
  callback function for setting state to any components that need to trigger
  updates to state

## Extras

- [React Events in Depth](https://www.youtube.com/watch?v=dRo_egw7tBc)
- [Function Binding](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
- [Class Field Declarations](https://github.com/tc39/proposal-class-fields)
- [event.target vs event.currentTarget](https://github.com/facebook/react/issues/5733)
- [JavaScript Event Delegation, and event.target vs. event.currentTarget](https://medium.com/@florenceliang/javascript-event-delegation-and-event-target-vs-event-currenttarget-c9680c3a46d1)
- [super() vs super(props)](https://overreacted.io/why-do-we-write-super-props/)
