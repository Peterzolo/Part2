import React from "react";
import Content from "../Notes/Content";
import Header from "../Notes/Header";

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

export default Course;
