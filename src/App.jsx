import { useEffect, useState } from "react";
import Course from "./components/Notes/Course";
import PersonList from "./components/PhoneBook/PersonList";
import Form from "./components/PhoneBook/Form";
import axios from "axios";
import { courses } from "../src/data/data";
import Search from "./components/PhoneBook/Search";
import DB from "./components/DB/DB";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");
  const [searchName, setsearchName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled", response.data);
      setPersons(response.data);
    });
  }, []);

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
      <hr />
      <DB />
    </div>
  );
};

export default App;
