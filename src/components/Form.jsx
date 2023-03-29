import React, { useState } from "react";

const Form = () => {
  const [newNote, setNewNote] = useState("hghghghghgg");
  console.log("NEW NOTE", newNote);
  const addNote = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={addNote}>
        <input value={newNote} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default Form;
