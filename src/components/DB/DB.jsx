import React from "react";

import axios from "axios";

axios.get("http://localhost:3001/notes").then((response) => {
  const notes = response.data;
  console.log(notes);
});

const DB = () => {
  return <div>DBkhlklkjl</div>;
};

export default DB;
