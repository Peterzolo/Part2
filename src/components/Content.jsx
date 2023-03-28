import React from "react";
import Part from "./Part";

const Content = ({ content }) => {
  return (
    <div>
      {content.map((part) => (
        <div key={part.id}>
          <Part part={part} />
        </div>
      ))}
    </div>
  );
};

export default Content;
