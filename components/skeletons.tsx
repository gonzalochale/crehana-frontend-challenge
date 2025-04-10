import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";

const CountryCardSkeleton = () => {
  return (
    <Card className="shadow-none aspect-video flex flex-col justify-between">
      <CardHeader className="flex flex-row gap-3">
        <Skeleton className="h-14 w-14 rounded-md"></Skeleton>
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

export const CountriesSkeleton = () => {
  return (
    <section className="w-full">
      <div className="w-full flex max-sm:flex-wrap items-center gap-3 sticky top-0 z-50 bg-background py-5">
        <Input
          type="text"
          placeholder="Buscar país..."
          className="w-full h-10 bg-card shadow-none"
          disabled
        />
        <Select disabled>
          <SelectTrigger className="w-[calc(48%)] sm:min-w-[100px] bg-card shadow-none">
            <SelectValue placeholder="Continente" />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
        <Select disabled>
          <SelectTrigger className="w-[calc(48%)] sm:min-w-[100px] bg-card shadow-none">
            <SelectValue placeholder="Moneda" />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
      </div>
      <div className="w-full grid sm:grid-cols-2 gap-3">
        {Array.from({ length: 10 }, (_, index) => (
          <CountryCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
};
