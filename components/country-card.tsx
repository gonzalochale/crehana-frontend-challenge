import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Country } from "@/lib/types";

const CountryCard = ({ country }: { country: Country }) => {
  return (
    <Card className="shadow-none aspect-video flex flex-col justify-between hover:ring-2 hover:ring-offset-2 hover:ring-ring/50 transition-all duration-200 ease-in-out hover:cursor-pointer">
      <CardHeader>
        <span className="text-5xl">{country.emoji}</span>
        <div className="space-y-2">
          <CardTitle className="uppercase">{country.name}</CardTitle>
          <CardDescription className="uppercase">
            {country.code}
          </CardDescription>
        </div>
      </CardHeader>
      <CardFooter className="justify-end">
        <Button variant="default" size="sm" asChild>
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CountryCard;
