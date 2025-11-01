import React, { JSX } from "react";

export default function Contact(): JSX.Element {
  return (
    <section id="contact" className="section">
      <div className="max-w-2xl w-full mx-auto text-center">
        <div className="bg-glass p-8">
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Want to build something with RiftVector? Reach out via your preferred method and I’ll get back to you.</p>
          <div className="flex items-center justify-center gap-4">
            <a className="px-4 py-2 rounded-md bg-sky-600 text-white" href="mailto:hello@example.com">Email</a>
            <a className="px-4 py-2 rounded-md border" href="#">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
