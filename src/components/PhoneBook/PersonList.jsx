import React, { useEffect, useState } from "react";
import { deleteFromPhoneBook, getAll } from "../PhoneBook/service";

const PersonList = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      deleteFromPhoneBook(id)
        .then((result) => {
          if (result) {
            const updatedData = persons.filter((item) => item.id !== id);
            setPersons(updatedData);
          }
        })
        .catch((error) => {
          return error;
        });
    }
  };

  return (
    <div>
      <div>
        <h4>Numbers</h4>
        {persons?.map((person, index) => (
          <div key={index}>
            {person.name} {person.number}
          </div>
        ))}
      </div>
      <div>
        <h4>Delete From Phone Book</h4>
        <ul>
          {persons.map((item) => (
            <li key={item.id}>
              {item.name} - {item.phone}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PersonList;
