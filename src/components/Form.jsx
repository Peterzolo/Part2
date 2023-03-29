import React, { useState } from "react";

const Form = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChange = (event) => {
    console.log("EVENT", event.target.value);
    setNewName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>debug: {newName}</div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  );
};

export default Form;
