import { useState } from "react";
import Course from "./components/Course";
import Note from "./components/Note";
import { courses } from "./data";

const App = ({ note }) => {
  return (
    <div className="container">
      {courses.map((course) => (
        <div key={course.id}>
          <Course course={course} />
        </div>
      ))}

      <hr />

      <div>
        <h2>Phonebook</h2>
        <form>
          <div>
            name: <input />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        ...
      </div>
    </div>
  );
};

export default App;
