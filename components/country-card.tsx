import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Country } from "@/lib/types";

const CountryCard = ({ country }: { country: Country }) => {
  return (
    <Card className="shadow-none aspect-video flex flex-col justify-between">
      <CardHeader className="flex flex-row items-center gap-3">
        <span className="text-5xl">{country.emoji}</span>
        <div className="space-y-2">
          <CardTitle className="uppercase">{country.name}</CardTitle>
          <CardDescription className="uppercase">
            {country.code}
          </CardDescription>
        </div>
      </CardHeader>
      <CardFooter className="justify-end">
        <Button variant="link" asChild>
          <Link href={`/${country.name}`}>Ver detalles</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CountryCard;
