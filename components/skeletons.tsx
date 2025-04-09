import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const CountryCardSkeleton = () => {
  return (
    <Card className="shadow-none aspect-video flex flex-col justify-between">
      <CardHeader className="flex flex-row gap-3">
        <Image
          src="/assets/test-logo.png"
          alt="Country Image"
          width={1024}
          height={1024}
          className="aspect-square w-12 h-12 rounded-md object-cover bg-muted"
        />
        <div className="space-y-2">
          <CardTitle className="uppercase">
            <Skeleton className="h-4 w-24" />
          </CardTitle>
          <CardDescription className="uppercase">
            <Skeleton className="h-4 w-16" />
          </CardDescription>
        </div>
      </CardHeader>
      <CardFooter className="justify-end">
        <Skeleton className="h-4 w-24" />
      </CardFooter>
    </Card>
  );
};

export const CountrySkeletons = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {Array.from({ length: 10 }, (_, index) => (
        <CountryCardSkeleton key={index} />
      ))}
    </div>
  );
};
