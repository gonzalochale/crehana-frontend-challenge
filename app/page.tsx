import Countries from "@/components/countries";
import Header from "@/components/header";
import { CountriesSkeleton } from "@/components/skeletons";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main className="w-full min-h-dvh flex flex-col items-center justify-start max-w-2xl px-4 py-14">
      <Header />
      <Suspense fallback={<CountriesSkeleton />}>
        <Countries />
      </Suspense>
    </main>
  );
}
