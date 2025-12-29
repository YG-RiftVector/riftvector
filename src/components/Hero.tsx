import React, { JSX } from "react";
import ImageCarousel from "./ImageCarousel";

export default function Hero(): JSX.Element {
  return (
    <section id="home" className="section !p-0 !min-h-0 !items-start pt-16 md:pt-0 bg-gradient-to-b from-transparent to-white/30">
      <ImageCarousel />
    </section>
  );
}
