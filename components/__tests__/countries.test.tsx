import { describe, it, expect, vi, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import Countries from "../countries";
import { getAllCountries, getAllContinents } from "@/lib/queries";
import { getAllCurrenciesFromCountries } from "@/lib/utils";
import { Continent, Country, Currency } from "@/lib/types";

vi.mock("@/lib/queries", () => ({
  getAllCountries: vi.fn(),
  getAllContinents: vi.fn(),
}));

vi.mock("@/lib/utils", () => ({
  getAllCurrenciesFromCountries: vi.fn(),
}));

vi.mock("@/components/countries-grid", () => ({
  default: ({
    countries,
    currencies,
    continents,
  }: {
    countries: Country[];
    currencies: Currency[];
    continents: Continent[];
  }) => (
    <div data-testid="countries-grid">
      <div data-testid="countries-count">{countries.length}</div>
      <div data-testid="currencies-count">{currencies.length}</div>
      <div data-testid="continents-count">{continents.length}</div>
    </div>
  ),
}));

describe("Countries", () => {
  const mockCountries = [
    {
      code: "US",
      name: "United States",
      continent: { name: "North America" },
      currency: "USD",
      languages: [{ name: "English" }, { name: "Spanish" }],
      emoji: "🇺🇸",
      capital: "Washington, D.C.",
    },
    {
      code: "ES",
      name: "Spain",
      continent: { name: "Europe" },
      currency: "EUR",
      languages: [{ name: "English" }, { name: "Spanish" }],
      emoji: "🇪🇸",
      capital: "Madrid",
    },
  ];

  const mockContinents = [{ name: "North America" }, { name: "Europe" }];

  const mockCurrencies = [{ name: "USD" }, { name: "EUR" }];

  beforeEach(() => {
    vi.clearAllMocks();
    (
      getAllCountries as unknown as {
        mockResolvedValue: (value: Country[]) => void;
      }
    ).mockResolvedValue(mockCountries);
    (
      getAllContinents as unknown as {
        mockResolvedValue: (value: Continent[]) => void;
      }
    ).mockResolvedValue(mockContinents);
    (
      getAllCurrenciesFromCountries as unknown as {
        mockResolvedValue: (value: Currency[]) => void;
      }
    ).mockResolvedValue(mockCurrencies);
  });

  it("renders Countries component with correct data", async () => {
    const { findByTestId } = render(await Countries());

    const countriesCount = await findByTestId("countries-count");
    const currenciesCount = await findByTestId("currencies-count");
    const continentsCount = await findByTestId("continents-count");

    expect(countriesCount.textContent).toBe("2");
    expect(currenciesCount.textContent).toBe("2");
    expect(continentsCount.textContent).toBe("2");

    expect(getAllCountries).toHaveBeenCalledTimes(1);
    expect(getAllContinents).toHaveBeenCalledTimes(1);
    expect(getAllCurrenciesFromCountries).toHaveBeenCalledWith(mockCountries);
  });
});
