import Course from "./components/Course";
import Form from "./components/Form";

import { courses } from "./data";

const App = () => {
  return (
    <div className="container">
      {courses.map((course) => (
        <div key={course.id}>
          <Course course={course} />
        </div>
      ))}

      <hr />
      <Form />
    </div>
  );
};

export default App;
