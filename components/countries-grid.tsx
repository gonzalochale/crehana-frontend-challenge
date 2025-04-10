"use client";

import React, { useState, useRef, useEffect } from "react";
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
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronUp } from "lucide-react";

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
  const headerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        setIsSticky(e.intersectionRatio < 1);
      },
      { threshold: [1], rootMargin: "-1px 0px 0px 0px" }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilter = useDebouncedCallback(
    (searchText: string, continent: string, currency: string) => {
      const newFilteredCountries = countries.filter((country) => {
        const isInContinent =
          continent === "" ||
          continent === "all" ||
          country.continent.name === continent;
        const isInCurrency =
          currency === "" ||
          currency === "all" ||
          country.currency === currency;
        const isInSearch =
          searchText === "" ||
          country.name.toLowerCase().includes(searchText.toLowerCase());

        return isInContinent && isInCurrency && isInSearch;
      });
      setFilteredCountries(newFilteredCountries);
    },
    200
  );

  return (
    <>
      <div
        ref={headerRef}
        className="w-full flex max-sm:flex-wrap items-end sticky top-0 z-50 bg-background py-2 gap-3"
      >
        <div className="flex flex-col gap-1 w-full">
          <span className="text-muted-foreground text-sm font-medium">
            Buscar por nombre
          </span>
          <Input
            type="text"
            placeholder="País..."
            className="w-full h-10 bg-card shadow-none"
            onChange={(e) => {
              setSearch(e.target.value);
              handleFilter(e.target.value, continent, currency);
            }}
          />
        </div>
        <div className="flex flex-col gap-1 max-sm:w-full">
          <span className="text-muted-foreground text-sm font-medium">
            Continente
          </span>
          <Select
            defaultValue={continent}
            onValueChange={(value) => {
              setContinent(value);
              handleFilter(search, value, currency);
            }}
          >
            <SelectTrigger className="w-full sm:w-[150px] bg-card shadow-none">
              <SelectValue placeholder="Continente" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              {continents.map((continent) => (
                <SelectItem key={continent.name} value={continent.name}>
                  {continent.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1 max-sm:w-full">
          <span className="text-muted-foreground text-sm font-medium">
            Moneda
          </span>
          <Select
            defaultValue={currency}
            onValueChange={(value) => {
              setCurrency(value);
              handleFilter(search, continent, value);
            }}
          >
            <SelectTrigger className="w-full sm:w-[150px] bg-card shadow-none">
              <SelectValue placeholder="Moneda" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              <SelectItem value="all">Todas</SelectItem>
              {currencies.map((currency) => (
                <SelectItem key={currency.name} value={currency.name}>
                  {currency.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button
        size="icon"
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 px-5 py-5 rounded-full hover:opacity-90 transition-all scale-0 ${
          isSticky ? "scale-100" : ""
        }`}
        aria-label="Volver arriba"
      >
        <ChevronUp className="text-background" />
      </Button>
      {!filteredCountries || filteredCountries.length === 0 ? (
        <div className="w-full aspect-video flex flex-col items-center justify-center">
          <Image
            src="/assets/empy-state.png"
            alt="No data"
            width={1024}
            height={1024}
            className="w-1/2 h-auto object-contain aspect-square"
          />
          <h1 className="mx-auto text-center max-w-sm text-lg text-muted-foreground text-balance">
            No se encontraron países, intenta con otro filtro
          </h1>
        </div>
      ) : (
        <div className="w-full grid sm:grid-cols-2 gap-3 pt-3">
          {filteredCountries.map((country) => (
            <CountryCard key={country.name} country={country} />
          ))}
        </div>
      )}
    </>
  );
};

export default CountriesGrid;
