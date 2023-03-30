import React from "react";

const Part = ({ part }) => {
  return (
    <div>
      <div>
        {" "}
        {part.name} {part.exercises}{" "}
      </div>
    </div>
  );
};

export default Part;
