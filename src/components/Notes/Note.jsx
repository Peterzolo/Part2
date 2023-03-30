import React from "react";

const Note = ({ note }) => {
  return (
    <div>
      <ul>
        <li>{note.content}</li>
      </ul>
    </div>
  );
};

export default Note;
