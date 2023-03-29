import React, { useState } from "react";

const Form = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = newName;
    const person = persons.find((person) => person.name === name);
    if (person) {
      alert(`${person.name} has already been added to the Phonebook`);
    } else {
      const newPerson = { name: newName, phone: phone };
      setPersons([...persons, newPerson]);
      setNewName("");
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setNewName(event.target.value);
  };

  function handleInputChange(event) {
    [event.target.name]: event.target.value;
    
  
    setInputValue(value);
    // code for onChange function using the name and value variables
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input name="newName" value={newName} onChange={handleChange} />
        </div>
        <div>
          phone: <input name="phone" value={phone} onChange={handleChange} />
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
