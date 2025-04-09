import React, { Suspense } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CountryCard from "@/components/country-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllCountries } from "@/lib/queries";
import { CountrySkeletons } from "@/components/skeletons";

const Countrys = async () => {
  const countries = await getAllCountries();

  return (
    <section className="w-full">
      <div className="flex max-sm:flex-wrap items-center gap-3 sticky top-0 z-50 bg-background py-5">
        <Input
          type="text"
          placeholder="Buscar país..."
          className="w-full h-10 bg-card shadow-none"
        />
        <Select>
          <SelectTrigger className="w-full sm:min-w-[100px] bg-card shadow-none">
            <SelectValue placeholder="Continente" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Asia</SelectItem>
            <SelectItem value="dark">America</SelectItem>
            <SelectItem value="system">Europa</SelectItem>
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          size="lg"
          className="max-sm:w-full bg-card shadow-none"
        >
          Mostrando 0 países
        </Button>
      </div>
      <Suspense fallback={<CountrySkeletons />}>
        <div className="grid sm:grid-cols-2 gap-3">
          {countries.map((country) => (
            <CountryCard key={country.name} country={country} />
          ))}
        </div>
      </Suspense>
    </section>
  );
};

export default Countrys;
