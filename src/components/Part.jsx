import React from "react";

const Part = ({ part }) => {
  return (
    <div>
      <ul>
        <li>{part.name}</li>
        <li>{part.exercises}</li>
      </ul>
    </div>
  );
};

export default Part;
