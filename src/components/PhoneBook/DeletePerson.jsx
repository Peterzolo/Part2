import React, { useState } from "react";
import axios from "axios";

function DeletePerson() {
  const [persons, setPersons] = useState([]);
  const handleDeletePerson = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this person?"
    );
    if (confirmed) {
      axios
        .delete(`http://localhost:3001/persons/${id}`)
        .then((response) => {
          const updatedPersons = persons.filter((person) => person.id !== id);
          setPersons(updatedPersons);
          window.alert(`Person with id ${id} deleted successfully`);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      {persons.map((person) => (
        <div key={person.id}>
          <p>
            {person.name} - {person.number}
          </p>
          <button onClick={() => handleDeletePerson(person.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default DeletePerson;
