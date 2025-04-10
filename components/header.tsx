import Image from "next/image";
import React from "react";
const Header = () => {
  return (
    <header className="flex flex-col gap-3 items-start pb-5">
      <Image
        src="/assets/test-logo.png"
        alt="Test Logo"
        width={1024}
        height={1024}
        className="w-12 h-12 rounded-lg bg-border"
      />
      <h1 className="text-5xl font-semibold tracking-tight text-pretty">
        Descubre cada rincón del planeta
      </h1>
      <p className="text-muted-foreground text-lg font-medium text-balance">
        Toda la información que necesitas sobre cada país, al alcance de un
        clic.
      </p>
    </header>
  );
};

export default Header;
