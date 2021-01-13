import React, { useState } from "react";

// handle the form submit (preventDefault)
// get all the data from the input fields (e.target.inputName.value)
// do something with that data (make POST, update DOM, etc)

// Controlled Component - react ALWAYS has values in state that reflect what's in the DOM

// step1: create a state variable for each input field
// step2: set the VALUE of each input to be the state variable
// step3: add an onChange and set the new value from the input in state

// UnControlled Component - react does't have the STATE that match the DOM

function ProjectForm() {
  const [name, setName] = useState("annie");

  console.log({ name });

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      name: name,
      about: event.target.about.value,
    };

    console.log(formData);
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="form">
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {name.length === 0 ? (
          <p style={{ color: "red" }}>You must provide a name</p>
        ) : null}

        <label htmlFor="about">About</label>
        <textarea id="about" name="about" />

        <label htmlFor="phase">Phase</label>
        <select name="phase" id="phase">
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input type="text" id="link" name="link" />

        <label htmlFor="image">Screenshot</label>
        <input type="text" id="image" name="image" />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
}

export default ProjectForm;
