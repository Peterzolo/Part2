import React, { useState } from "react";

const Form = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");

  console.log("PERSONS", persons);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = newName;
    const person = persons.find((person) => person.name === name);
    if (person) {
      alert(`${person.name} has already been added to the Phonebook`);
    } else {
      const newPerson = { name: newName, phone };
      setPersons([...persons, newPerson]);
      setNewName("");
      setPhone("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:{" "}
          <input
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
        </div>
        <div>
          phone:{" "}
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {" "}
        {persons.map((person, index) => (
          <div key={index}>
            {person.name} {person.phone}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
