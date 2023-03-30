import React from "react";
import Search from "./Search";

const Form = ({
  persons,
  setPersons,
  newName,
  setNewName,
  phone,
  setPhone,
  searchName,
  setsearchName,
}) => {
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
      <div>
        <Search
          persons={persons}
          setPersons
          searchName={searchName}
          setsearchName={setsearchName}
        />
      </div>
      <h2>Phonebook</h2>
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
    </div>
  );
};

export default Form;
