import React from "react";

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
  const handleSearchChange = (event) => {
    setsearchName(event.target.value);
  };

  const filteredPersonNames = persons.filter((person) =>
    person.name.toLowerCase().includes(searchName.toLowerCase())
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
          {filteredPersonNames.map((personName) => (
            <div key={personName.id}>
              <p>{personName.name}</p>
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
        {persons.map((person) => (
          <div key={person.id}>
            {person.name} {person.phone}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
