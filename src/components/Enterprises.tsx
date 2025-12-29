import React, { JSX } from "react";

export default function Enterprises(): JSX.Element {
  return (
    <section id="enterprises" className="section flex-col min-h-[45vh] md:min-h-screen">
      <h2 className="text-2xl font-bold mb-2 text-center pt-4 md:pt-8">Enterprises</h2>
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="max-w-5xl w-full mx-auto px-6">
          <div className="bg-glass p-12 text-center">
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Coming soon...Enterprise solutions tailored for your business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
