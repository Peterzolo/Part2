import React from "react";

const Part = ({ part }) => {
  return (
    <div>
      <div> {part.name}</div>
      <div> {part.exercises}</div>
    </div>
  );
};

export default Part;
