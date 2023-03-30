import { useState } from "react";
import Course from "./components/Notes/Course";
import PersonList from "./components/PhoneBook/PersonList";
import Form from "./components/PhoneBook/Form";

import { courses } from "./data";
import Search from "./components/PhoneBook/Search";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");
  const [searchName, setsearchName] = useState("");

  return (
    <div className="container">
      {courses.map((course) => (
        <div key={course.id}>
          <Course course={course} />
        </div>
      ))}

      <hr />

      <Form
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        phone={phone}
        setPhone={setPhone}
        searchName={searchName}
        setsearchName={setsearchName}
      />

      <PersonList persons={persons} />

      <div>
        <Search
          persons={persons}
          setPersons
          searchName={searchName}
          setsearchName={setsearchName}
        />
      </div>
    </div>
  );
};

export default App;
