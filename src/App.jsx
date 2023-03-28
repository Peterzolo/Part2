import Course from "./components/Course";
import { course } from "./data";
import Header from "./components/Header";
import Content from "./components/Content";

const App = () => {
  return (
    <div>
      <Course course={course} />
      <Header header={course.name} />
      <Content content={course.parts} />
    </div>
  );
};

export default App;
