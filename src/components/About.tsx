import React, { JSX } from "react";

export default function About(): JSX.Element {
  return (
    <section id="about" className="section bg-white/40 dark:bg-black/30">
      <div className="max-w-3xl mx-auto bg-glass p-8">
        <h2 className="text-2xl font-bold mb-3">About RiftVector</h2>
        <p className="text-zinc-700 dark:text-zinc-300">
          We provide technology solutions to consumer businesses and other emerging industry sectors to help our partners innovate and facilitate growth.
        </p>
      </div>
    </section>
  );
}
