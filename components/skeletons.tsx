import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";

const CountryCardSkeleton = () => {
  return (
    <Card className="shadow-none aspect-video flex flex-col justify-between">
      <CardHeader>
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
    </Card>
  );
};

export const CountriesSkeleton = () => {
  return (
    <section className="w-full">
      <div className="w-full flex max-sm:flex-wrap items-end sticky top-0 z-50 bg-background py-2 gap-3">
        <div className="flex flex-col gap-1 w-full">
          <span className="text-muted-foreground text-sm font-medium">
            Buscar por nombre
          </span>
          <Input
            type="text"
            placeholder="País..."
            className="w-full h-10 bg-card shadow-none"
            disabled
          />
        </div>
        <div className="flex flex-col gap-1 max-sm:w-full">
          <span className="text-muted-foreground text-sm font-medium">
            Continente
          </span>
          <Select disabled>
            <SelectTrigger className="w-full sm:w-[150px] bg-card shadow-none">
              <SelectValue placeholder="Continente" />
            </SelectTrigger>
            <SelectContent></SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1 max-sm:w-full">
          <span className="text-muted-foreground text-sm font-medium">
            Moneda
          </span>
          <Select disabled>
            <SelectTrigger className="w-full sm:w-[150px] bg-card shadow-none">
              <SelectValue placeholder="Moneda" />
            </SelectTrigger>
            <SelectContent></SelectContent>
          </Select>
        </div>
      </div>
      <div className="w-full grid sm:grid-cols-2 gap-3 pt-3">
        {Array.from({ length: 10 }, (_, index) => (
          <CountryCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
};
