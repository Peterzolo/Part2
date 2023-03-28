import React from "react";

const Part = ({ part }) => {
  console.log("PARTS", part);
  return (
    <div>
      <ul>
        <li>Name: {part.name}</li>
        <li>Exercises: {part.exercises}</li>
      </ul>
    </div>
  );
};

export default Part;
