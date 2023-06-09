import { useEffect, useState } from "react";
import Course from "./components/Notes/Course";
import PersonList from "./components/PhoneBook/PersonList";
import Form from "./components/PhoneBook/Form";
import axios from "axios";
import { courses } from "../src/data/data";
import Search from "./components/PhoneBook/Search";
import Notification from "./components/notification/Notification";
import Countries from "./components/countries/Countries";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");
  const [searchName, setsearchName] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  return (
    <div className="container">
      <Notification
        message={successMessage}
        setSuccessMessage={setSuccessMessage}
      />
      {courses.map((course) => (
        <div key={course.id}>
          <Course course={course} />
        </div>
      ))}
      <hr />
      <h3>Phone Book</h3>
      <div>
        <Search
          persons={persons}
          setPersons
          searchName={searchName}
          setsearchName={setsearchName}
        />
      </div>
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
      <br />
      <PersonList persons={persons} />
      <br />
      <hr />
      <Countries />
    </div>
  );
};

export default App;
