import React, { RefObject, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = ({
  headerRef,
}: {
  headerRef: RefObject<HTMLDivElement | null>;
}) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        setIsSticky(e.intersectionRatio < 1);
      },
      { threshold: [1], rootMargin: "-1px 0px 0px 0px" }
    );

    if (headerRef && headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, [headerRef]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      size="icon"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 px-6 py-6 rounded-full hover:opacity-90 transition-all ease-in-out scale-0 ${
        isSticky ? "scale-100" : ""
      }`}
      aria-label="Volver arriba"
    >
      <ChevronUp className="text-background size-5" />
    </Button>
  );
};

export default ScrollToTopButton;
