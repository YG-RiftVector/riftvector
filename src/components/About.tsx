import React, { JSX } from "react";

export default function About(): JSX.Element {
  return (
    <section id="about" className="section flex-col min-h-[45vh] md:min-h-screen bg-white/40 dark:bg-black/30">
      <h2 className="text-2xl font-bold mb-2 text-center pt-4 md:pt-8">About RiftVector</h2>
      <div className="flex-1 flex items-center justify-center w-full px-6">
        <div className="max-w-3xl mx-auto bg-glass p-8">
          <p className="text-zinc-700 dark:text-zinc-300">
            We provide technology solutions to consumer businesses and other emerging industry sectors to help our partners innovate and facilitate growth.
          </p>
        </div>
      </div>
    </section>
  );
}
