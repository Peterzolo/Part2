import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  const total = parts.reduce((acc, part) => acc + part.exercises, 0);

  return (
    <div>
      {parts.map((part) => (
        <div key={part.id}>
          <Part part={part} total={total} />
        </div>
      ))}
      <h4>Total of {total}exercises</h4>
    </div>
  );
};

export default Content;
