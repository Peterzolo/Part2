import React from "react";
import Part from "./Part";

const Content = ({ content }) => {
  const total = content.reduce((acc, part) => acc + part.exercises, 0);

  return (
    <div>
      {content.map((part) => (
        <div key={part.id}>
          <Part part={part} />
        </div>
      ))}
      <div>Total : {total}</div>
    </div>
  );
};

export default Content;
