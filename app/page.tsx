import Countrys from "@/components/countrys";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="w-full min-h-dvh flex flex-col items-center justify-start max-w-2xl px-4 py-14">
      <Header />
      <Countrys />
    </main>
  );
}
