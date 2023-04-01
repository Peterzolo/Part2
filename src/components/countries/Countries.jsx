import React, { useEffect, useState } from "react";
import { getAllCountries } from "./service";
import ErrorNotification from "../notification/ErrorNotification";
import Notification from "../notification/Notification";
import SearchCountries from "./SearchCountries";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getAllCountries()
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        setErrorMessage("Could not find countries");
        console.error(error);
      });
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
      <div>
        <SearchCountries countries={countries} />
      </div>
    </div>
  );
};

export default Countries;
