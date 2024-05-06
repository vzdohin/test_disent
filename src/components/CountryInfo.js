import React from "react";

const CountryInfo = ({ country }) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <img
        src={country.flags.png}
        alt={`${country.flags.alt}`}
        style={{ maxWidth: "100px", marginBottom: "20px" }}
      />
      <div>
        <b>
          {country.name.common} ({country.name.official})
        </b>
        {country.capital && country.capital.length > 0 && (
          <p>Столица: {country.capital[0]}</p>
        )}
        <p>Население: {country.population}</p>
      </div>
    </div>
  );
};

export default CountryInfo;
