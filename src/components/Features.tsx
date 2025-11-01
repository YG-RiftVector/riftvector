import React, { JSX } from "react";

export default function Features(): JSX.Element {
  return (
    <section id="features" className="section">
      <div className="max-w-5xl w-full mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-glass p-6">
            <h3 className="font-semibold mb-2">Fast</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Built with Next.js and Turbopack for rapid dev iterations.</p>
          </div>
          <div className="bg-glass p-6">
            <h3 className="font-semibold mb-2">Responsive</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Mobile-first layout and utility classes via Tailwind CSS.</p>
          </div>
          <div className="bg-glass p-6">
            <h3 className="font-semibold mb-2">Accessible</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Skip links and semantic HTML for better accessibility.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
