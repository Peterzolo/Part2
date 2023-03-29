import React, { useState } from "react";

const Form = () => {
  const [newNote, setNewNote] = useState("");
  console.log("NEW NOTE", newNote);
  const addNote = (event) => {
    event.preventDefault();
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };
  return (
    <div>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default Form;
