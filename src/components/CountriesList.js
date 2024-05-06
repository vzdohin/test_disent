import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryInfo from "./CountryInfo";
import { Pagination } from "antd";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных о странах:", error);
      });
  }, []);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Список стран</h1>
      <ul>
        {currentCountries.map((country) => (
          <CountryInfo key={country.name.common} country={country} />
        ))}
      </ul>
      <Pagination
        style={{ marginBottom: "50px" }}
        defaultCurrent={1}
        total={countries.length}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default CountriesList;
