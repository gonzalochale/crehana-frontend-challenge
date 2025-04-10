import { getAllContinents, getAllCountries } from "@/lib/queries";
import CountriesGrid from "@/components/countries-grid";
import { getAllCurrenciesFromCountries } from "@/lib/utils";

const Countries = async () => {
  const [countries, continents] = await Promise.all([
    getAllCountries(),
    getAllContinents(),
  ]);

  // we need to get all currencies from countries because of the limitations of the current API provided
  const currencies = await getAllCurrenciesFromCountries(countries);

  return (
    <section className="w-full">
      <CountriesGrid
        countries={countries}
        currencies={currencies}
        continents={continents}
      />
    </section>
  );
};

export default Countries;
