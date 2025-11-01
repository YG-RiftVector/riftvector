import React, { JSX } from "react";

export default function About(): JSX.Element {
  return (
    <section id="about" className="section bg-white/40 dark:bg-black/30">
      <div className="max-w-3xl mx-auto bg-glass p-8">
        <h2 className="text-2xl font-bold mb-3">About RiftVector</h2>
        <p className="text-zinc-700 dark:text-zinc-300">
          This template provides a clean starting point for building a small marketing or portfolio site. It includes font setup, a sticky header, scroll snapping, and a few pre-styled components.
        </p>
      </div>
    </section>
  );
}
