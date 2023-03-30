import React, { useState } from "react";

const Form = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");

  const [searchName, setsearchName] = useState("");

  const handleSearchChange = (event) => {
    setsearchName(event.target.value);
    console.log("EVENT TARGET", event.target.value);
  };

  const filteredPersonNames = persons.filter((person) =>
    person.name.includes(searchName)
  );

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
      <div>
        <form action="">
          <input
            type="text"
            placeholder="Search"
            value={searchName}
            onChange={handleSearchChange}
          />
        </form>
        <div>
          {filteredPersonNames.map((name) => (
            <div key={name.id}>
              <p>{name.name}</p>
            </div>
          ))}
        </div>
      </div>
      <hr />
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
