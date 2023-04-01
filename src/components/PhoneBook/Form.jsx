import React, { useState } from "react";
import { create, updatePerson } from "../../components/PhoneBook/service";
import Notification from "../notification/Notification";

const Form = ({ persons, newName, setNewName, phone, setPhone }) => {
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = (event, id) => {
    event.preventDefault();
    const name = newName;
    const person = persons.find((person) => person.name === name);
    const personId = person?.id;
    if (person) {
      const confirmReplaceName = window.confirm(
        `${person.name} has already been added , replace the old number with the new?`
      );
      if (confirmReplaceName) {
        const updateObject = {
          name: person.name,
          phone,
        };
        updatePerson(personId, updateObject)
          .then((response) => {
            // eslint-disable-next-line no-unused-expressions, no-sequences
            response.data,
              setNewName(""),
              setPhone(""),
              setSuccessMessage(`Updated ${person.name}!`);
            setTimeout(() => {
              setSuccessMessage(null);
            }, 5000);
          })
          .catch((error) => console.log(error));
      }
    } else {
      const newPerson = { name: newName, phone };
      create(newPerson).then((returnePerson) => {
        setNewName(returnePerson);
        setNewName("");
        setPhone("");
        setSuccessMessage(`Added ${newPerson.name}!`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5>Add a new person's data</h5>
        <Notification message={successMessage} />
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
