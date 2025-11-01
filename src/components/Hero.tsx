import Image from "next/image";
import React, { JSX } from "react";

export default function Hero(): JSX.Element {
  return (
    <section id="home" className="section bg-gradient-to-b from-transparent to-white/30">
      <div className="max-w-4xl w-full mx-auto text-center">
        <div className="bg-glass p-8 md:p-12">
          <div className="flex items-center justify-center mb-6">
            <Image src="/sheild.PNG" alt="RiftVector" width={180} height={48} priority />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3">RiftVector</h1>
          <p className="text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            A minimal, modern single-page template built with Next.js and Tailwind CSS. Scroll to see full-page sections with smooth snap behavior.
          </p>
        </div>
      </div>
    </section>
  );
}
