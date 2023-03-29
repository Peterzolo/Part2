import { useState } from "react";
import Course from "./components/Course";
import Form from "./components/Form";
import Note from "./components/Note";
import { courses } from "./data";

const App = ({ note }) => {
  const [notes, setNotes] = useState(note);
  return (
    <div className="container">
      {courses.map((course) => (
        <div key={course.id}>
          <Course course={course} />
        </div>
      ))}

      <hr />

      <div>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
      <Form />
    </div>
  );
};

export default App;
