# Forms & Inverse Data Flow

## SWBATs

- [ ] Draw a component hierarchy and describe the Flow of Information
- [ ] Pass data up and down the component hierarchy with our callbacks
- [ ] Explain why we use controlled forms
- [ ] Implement a controlled form
- [ ] Use form data to update state

## Outline

### Part 1

- [ ] Demonstrate inverse data flow
  - Implement Dark Mode feature
  - **Breakout Exercise**: Refactor a filter component out of `ProjectList` and
    implement inverse data flow

### Part 2

- [ ] Create a form and make it controlled
  - Input change handlers
  - Form submit handler
- [ ] Handle submitting the form and update state in parent using inverse data flow
- [ ] (if there's time) Making an abstract change handler

## Lecture Notes

## Forms

### HTML Forms

In vanilla JS, our typical process for working with forms and getting access to
the form data in our application looked something like this:

- Get the form element and listen for a submit event
- Find the form inputs using their name attribute and grab the values
- Do something with the form data (send a `fetch` request; update the DOM)

```js
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // access form data from the DOM
  const nameInput = event.target.name;
  const passwordInput = event.target.password;

  const formData = {
    name: nameInput.value,
    password: passwordInput.value,
  };
  // do something with the form data
});
```

### React Controlled Forms

In React, rather than looking into the DOM to get the form's input field values
when the form is submitted, we use **state** to monitor the user's input **as
they type**, so that our component state is always _in sync_ with the DOM.

To keep track of each input's value, you need:

1. Some state to manage the input
2. An `onChange` listener on the input to monitor user input and update state
3. A `value` attribute on the input that corresponds to a key in state

And for the form itself, you need an `onSubmit` listener on the form to finally
submit data.

For example, if we have a form component that looks like this:

```js
function CommentForm() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  return (
    <form>
      <input type="text" name="username" />
      <textarea name="comment" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

We could make it a _controlled form_ by attaching onChange listeners to each input:

```js
function CommentForm() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  return (
    <form>
      <input type="text" name="username" onChange={handleUsernameChange} />
      <textarea name="comment" onChange={handleCommentChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

Doing this creates a 1-way connection wherein user input changes `state`. This
is called an _uncontrolled form_.

To make it a 2-way street wherein `state` can change the user's input, we add a
`value` attribute to our inputs.

```jsx
<form>
  <input
    type="text"
    name="username"
    onChange={handleUsernameChange}
    value={username}
  />
  <textarea name="comment" onChange={handleCommentChange} value={comment} />
</form>
```

To keep our code dry, we can also refactor the `handleUsernameChange` and
`handlePasswordChange` to a generic `handleChange`. To make this work, make sure
the `name` attribute on each input matches its corresponding key in state:

```js
class CommentForm extends React.Component {
  state = {
    username: "",
    comment: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="username"
          onChange={this.handleChange}
          value={this.state.username}
        />
        <textarea
          name="comment"
          onChange={this.handleChange}
          value={this.state.comment}
        />
      </form>
    );
  }
}
```

### Inverse Data Flow

When the form actually submits, it's often helpful to pass the state from the form up to a parent component. Imagine we have an app like this:

```txt
    CommentContainer
       /       \
CommentForm CommentCard
```

When the user submits out the comment form, a new `CommentCard` should be rendered. The `CommentContainer` holds an array of comments in state, so it needs to be updated when a new comment is added. To achieve this, we need to pass down a _callback function_ from the `CommentContainer` to the `CommentForm` as a prop:

```js
class CommentContainer extends React.Component {
  state = {
    comments: [],
  };

  renderCommentCards() {
    return this.state.comments.map((comment) => (
      <CommentCard comment={comment} />
    ));
  }

  // callback for adding a comment to state
  handleCommentSubmit = (comment) => {
    this.setState({
      comments: [...this.state.comments, comment],
    });
  };

  render() {
    return (
      <section>
        {this.renderCommentCards()}
        <hr />
        <CommentForm handleCommentSubmit={this.handleCommentSubmit} />
      </section>
    );
  }
}
```

When the user submits the comment, we can use the `handleCommentSubmit` callback in the `onSubmit` event in the `CommentForm`:

```js
class CommentForm extends React.Component {
  state = {
    username: "",
    comment: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // still need this!

    // use the callback to pass state UP to the parent component
    this.props.handleCommentSubmit(this.state);

    // clear the form (reset state)
    this.setState({
      username: "",
      comment: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={this.handleChange}
          value={this.state.username}
        />
        <textarea
          name="comment"
          onChange={this.handleChange}
          value={this.state.comment}
        />
      </form>
    );
  }
}
```

### Advanced State Updates: Arrays

```js
// updating one object in an array
handleUpdateCustomer = (id, name) => {
  // use map to return a new array so we aren't mutating state
  const updatedCustomers = this.state.customers.map((customer) => {
    // in the array, look for the object we want to update
    if (customer.id === id) {
      // if we find the object
      const updatedCustomer = { ...customer }; // make a copy of it
      updateCustomer.name = name; // update whatever attribute have changed
      return updatedCustomer; // return the updated copy
    } else {
      // for all other objects in the array
      return customer; // return the original object
    }
  });

  // set state with our updated array
  this.setState({ customers: updatedCustomers });
};
```

### Lifting State

[Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)

- Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.
- If two sibling components need access to the same `state`, you will want to place the shared `state` in a parent container. Then you can pass down that `state` as well as any functions that need to modify the state as props to the two sibling components that need to display and/or change that data.
