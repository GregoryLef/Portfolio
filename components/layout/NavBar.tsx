'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../ui/Button';
import Link from 'next/link';

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-primary absolute top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-4">
      {/* Logo */}
      <div className="min-w-64">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </Link>
      </div>

      {/* Desktop menu */}
      <div className="text-background hidden gap-16 space-x-6 lg:flex">
        <Link
          href="#about"
          className="hover:text-textPrimary hover:bg-accent p-2.5 text-xl font-bold hover:rounded-md"
        >
          A propos
        </Link>
        <Link
          href="#stack"
          className="hover:text-textPrimary hover:bg-accent p-2.5 text-xl font-bold hover:rounded-md"
        >
          Stack
        </Link>
        <Link
          href="#projects"
          className="hover:text-textPrimary hover:bg-accent p-2.5 text-xl font-bold hover:rounded-md"
        >
          Projets
        </Link>
        <Link
          href="#contact"
          className="hover:text-textPrimary hover:bg-accent p-2.5 text-xl font-bold hover:rounded-md"
        >
          Contact
        </Link>
      </div>

      {/* Desktop button */}
      <div className="hidden lg:block">
        <Button type="button" variant="primary" href="#">
          Télécharger mon CV
        </Button>
      </div>

      {/* Burger */}
      <button
        className="flex flex-col justify-center gap-1 lg:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span
          className={`bg-secondary h-0.5 w-6 transition-all ${open ? 'translate-y-1.5 rotate-45' : ''}`}
        />
        <span className={`bg-secondary h-0.5 w-6 transition-all ${open ? 'opacity-0' : ''}`} />
        <span
          className={`bg-secondary h-0.5 w-6 transition-all ${open ? '-translate-y-1.5 -rotate-45' : ''}`}
        />
      </button>

      {/* Mobile menu */}
      <div
        className={`bg-background border-foreground/20 absolute top-full right-0 mt-3 flex w-full origin-top flex-col gap-4 rounded-lg border p-4 shadow-lg transition-all duration-300 lg:hidden ${open ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'} `}
      >
        <a
          href="#projects"
          className="text-foreground hover:text-accent text-lg font-normal"
          onClick={() => setOpen(false)}
        >
          A propos
        </a>

        <a
          href="#stack"
          className="text-foreground hover:text-accent text-lg font-normal"
          onClick={() => setOpen(false)}
        >
          Stack
        </a>

        <a
          href="#about"
          className="text-foreground hover:text-accent text-lg font-normal"
          onClick={() => setOpen(false)}
        >
          Projets
        </a>

        <a
          href="#contact"
          className="text-foreground hover:text-accent text-lg font-normal"
          onClick={() => setOpen(false)}
        >
          Contact
        </a>

        <Button type="button" variant="primary" href="#" className="text-center">
          Télécharger mon CV
        </Button>
      </div>
    </nav>
  );
};
