"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Continent, Country, Currency } from "@/lib/types";
import CountryCard from "./country-card";
import { useDebouncedCallback } from "use-debounce";

const CountriesGrid = ({
  countries,
  currencies,
  continents,
}: {
  countries: Country[];
  currencies: Currency[];
  continents: Continent[];
}) => {
  const [search, setSearch] = React.useState("");
  const [continent, setContinent] = React.useState("");
  const [currency, setCurrency] = React.useState("");
  const [filteredCountries, setFilteredCountries] =
    useState<Country[]>(countries);

  const handleFilter = useDebouncedCallback(
    (searchText: string, continent: string, currency: string) => {
      const newFilteredCountries = countries.filter((country) => {
        const isInContinent =
          continent === "" || country.continent.name === continent;
        const isInCurrency = currency === "" || country.currency === currency;
        const isInSearch =
          searchText === "" ||
          country.name.toLowerCase().includes(searchText.toLowerCase());

        return isInContinent && isInCurrency && isInSearch;
      });
      setFilteredCountries(newFilteredCountries);
    },
    300
  );

  return (
    <>
      <div className="w-full flex max-sm:flex-wrap items-center gap-3 sticky top-0 z-50 bg-background py-5">
        <Input
          type="text"
          placeholder="Buscar país..."
          className="w-full h-10 bg-card shadow-none"
          onChange={(e) => {
            setSearch(e.target.value);
            handleFilter(e.target.value, continent, currency);
          }}
        />
        <Select
          onValueChange={(value) => {
            setContinent(value);
            handleFilter(search, value, currency);
          }}
        >
          <SelectTrigger className="w-[calc(48%)] sm:min-w-[100px] bg-card shadow-none">
            <SelectValue placeholder="Continente" />
          </SelectTrigger>
          <SelectContent>
            {continents.map((continent) => (
              <SelectItem key={continent.name} value={continent.name}>
                {continent.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          onValueChange={(value) => {
            setCurrency(value);
            handleFilter(search, continent, value);
          }}
        >
          <SelectTrigger className="w-[calc(48%)] sm:min-w-[100px] bg-card shadow-none">
            <SelectValue placeholder="Moneda" />
          </SelectTrigger>
          <SelectContent className="max-h-[500px]">
            {currencies.map((currency) => (
              <SelectItem key={currency.name} value={currency.name}>
                {currency.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {!filteredCountries || filteredCountries.length === 0 ? (
        <div className="w-full aspect-video flex items-center justify-center">
          <h1 className="text-xl text-muted-foreground">
            No se encontraron países 😔
          </h1>
        </div>
      ) : (
        <div className="w-full grid sm:grid-cols-2 gap-3">
          {filteredCountries.map((country) => (
            <CountryCard key={country.name} country={country} />
          ))}
        </div>
      )}
    </>
  );
};

export default CountriesGrid;
