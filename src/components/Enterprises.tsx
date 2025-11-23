import React, { JSX } from "react";

export default function Enterprises(): JSX.Element {
  return (
    <section id="enterprises" className="section">
      <div className="max-w-5xl w-full mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Enterprises</h2>
        <div className="bg-glass p-12 text-center">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Names of logos of companies we work with goes here
          </p>
        </div>
      </div>
    </section>
  );
}
