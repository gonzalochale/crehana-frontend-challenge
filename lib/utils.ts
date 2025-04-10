import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Country } from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getAllCurrenciesFromCountries(countries: Country[]) {
  const currencies = countries.reduce<string[]>((acc, country) => {
    if (!country.currency) return acc;

    const countryCurrencies = country.currency
      .split(",")
      .map((c) => c.trim())
      .filter((c) => c.length > 0);
    return [...acc, ...countryCurrencies];
  }, []);

  const uniqueCurrencies = [...new Set(currencies)]
    .sort()
    .map((currency) => ({ name: currency }));

  return uniqueCurrencies;
}
