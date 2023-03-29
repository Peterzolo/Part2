import Course from "./components/Course";
import { courses } from "./data";

const App = () => {
  return (
    <div className="container">
      {courses.map((course) => (
        <div key={course.id}>
          <Course course={course} />
        </div>
      ))}
    </div>
  );
};

export default App;
