import Course from "./components/Course";
import Header from "./components/Header";
import { courses } from "./data";
// import Header from "./components/Header";
// import Content from "./components/Content";

console.log("COURSES", courses);

const App = () => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <Header name={course.name} />
        </div>
      ))}
    </div>
  );
};

export default App;
