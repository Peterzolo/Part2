import React, { useEffect, useState } from "react";
import { getAllCountries } from "./service";

import ErrorNotification from "../notification/ErrorNotification";
import Notification from "../notification/Notification";

const Countries = () => {
  const [countries, setCountries] = [];
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    if (countries.length > 0) {
      getAllCountries()
        .then()
        .catch((error) => {});
    }
  }, []);

  return (
    <div>
      <h3>Countries</h3>
      <div>
        {" "}
        {successMessage ? (
          <Notification message={successMessage} />
        ) : (
          <ErrorNotification message={errorMessage} />
        )}
      </div>
    </div>
  );
};

export default Countries;
