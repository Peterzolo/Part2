import React from "react";
import personService from "../../components/PhoneBook/service";
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
      personService.create(newPerson).then((returnePerson) => {
        setNewName(returnePerson);
        setNewName("");
        setPhone("");
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5>Add a new person's data</h5>
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
    </div>
  );
};

export default Form;
