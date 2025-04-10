"use client";

import React, { useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Country } from "@/lib/types";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const CountryCard = ({ country }: { country: Country }) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
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
          </Card>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <span className="text-3xl">{country.emoji}</span>
              {country.name}
            </DialogTitle>
            <DialogDescription>Detalles de este país</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 items-center gap-4">
              <span className="font-semibold">#️⃣ Código:</span>
              <span>{country.code}</span>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <span className="font-semibold">🌐 Continente:</span>
              <span>{country.continent.name}</span>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <span className="font-semibold">🪙 Moneda:</span>
              <span>{country.currency || "No disponible"}</span>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <span className="font-semibold">🏔️ Capital:</span>
              <span>{country.capital || "No disponible"}</span>
            </div>
            <div className="grid grid-cols-2 items-start gap-4">
              <span className="font-semibold">🗣️ Lenguajes:</span>
              <div className="flex flex-col gap-1">
                {country &&
                country.languages &&
                country.languages.length > 0 ? (
                  country.languages.map((language) => (
                    <span key={language.name}>{language.name}</span>
                  ))
                ) : (
                  <span>No disponible</span>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
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
        </Card>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="flex items-center gap-2">
            <span className="text-3xl">{country.emoji}</span>
            {country.name}
          </DrawerTitle>
          <DrawerDescription>Detalles de este país</DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 items-center gap-4">
              <span className="font-semibold">#️⃣ Código:</span>
              <span>{country.code}</span>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <span className="font-semibold">🌐 Continente:</span>
              <span>{country.continent.name}</span>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <span className="font-semibold">🪙 Moneda:</span>
              <span>{country.currency || "No disponible"}</span>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <span className="font-semibold">🏔️ Capital:</span>
              <span>{country.capital || "No disponible"}</span>
            </div>
            <div className="grid grid-cols-2 items-start gap-4">
              <span className="font-semibold">🗣️ Lenguajes:</span>
              <div className="flex flex-col gap-1">
                {country &&
                country.languages &&
                country.languages.length > 0 ? (
                  country.languages.map((language) => (
                    <span key={language.name}>{language.name}</span>
                  ))
                ) : (
                  <span>No disponible</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CountryCard;
