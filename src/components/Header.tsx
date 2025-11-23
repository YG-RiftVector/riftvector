import Image from "next/image";
import Link from "next/link";
import React, { JSX } from "react";

export default function Header(): JSX.Element {
  return (
    <header className="site-header">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="#home" className="flex items-center gap-2">
            <Image src="/shield.png" alt="logo" width={50} height={50} priority />
            <span className="font-semibold">RiftVector</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#enterprises" className="hover:underline">Enterprises</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}
