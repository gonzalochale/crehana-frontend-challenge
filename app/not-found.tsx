import Image from "next/image";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10">
      <Image
        src="/assets/empy-state.png"
        alt="No data"
        width={1024}
        height={1024}
        className="w-full max-w-md h-auto object-contain aspect-square"
      />
      <h1 className="mx-auto text-center max-w-sm text-lg text-muted-foreground text-balance">
        Lo sentimos, la página que estás buscando no existe.
      </h1>
    </div>
  );
}
