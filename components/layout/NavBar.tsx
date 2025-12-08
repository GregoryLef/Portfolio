"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/Button";
import Link from "next/link";

export const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full flex items-center justify-between py-4 lg:py-8 px-6 relative bg-primary">
            {/* Logo */}
            <div className="min-w-64">
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={50} height={50} />
                </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex space-x-6 text-background gap-16">
                <Link href="#about" className="p-2.5 text-xl hover:text-textPrimary font-bold hover:rounded-md hover:bg-accent">A propos</Link>
                <Link href="#stack" className="p-2.5 text-xl hover:text-textPrimary font-bold hover:rounded-md hover:bg-accent">Stack</Link>
                <Link href="#projects" className="p-2.5 text-xl hover:text-textPrimary font-bold hover:rounded-md hover:bg-accent">Projets</Link>
                <Link href="#contact" className="p-2.5 text-xl hover:text-textPrimary font-bold hover:rounded-md hover:bg-accent">Contact</Link>
            </div>

            {/* Desktop button */}
            <div className="hidden lg:block">
                <Button type="button" variant="primary" href="#">
                    Télécharger mon CV
                </Button>
            </div>

            {/* Burger */}
            <button
                className="lg:hidden flex flex-col justify-center gap-1"
                onClick={() => setOpen(!open)}
                aria-label="Menu"
            >
                <span className={`w-6 h-0.5 bg-secondary transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`w-6 h-0.5 bg-secondary transition-all ${open ? "opacity-0" : ""}`} />
                <span className={`w-6 h-0.5 bg-secondary transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </button>

            {/* Mobile menu */}
            <div
                className={`
                absolute right-0 top-full mt-3 w-full rounded-lg shadow-lg
                bg-background border border-foreground/20 p-4 flex flex-col gap-4
                md:hidden transition-all duration-300 origin-top
                ${open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
                `}
            >
                <a
                    href="#projects"
                    className="text-lg text-foreground hover:text-accent font-normal"
                    onClick={() => setOpen(false)}
                >
                    A propos
                </a>

                <a
                    href="#stack"
                    className="text-lg text-foreground hover:text-accent font-normal"
                    onClick={() => setOpen(false)}
                >
                    Stack
                </a>

                <a
                    href="#about"
                    className="text-lg text-foreground hover:text-accent font-normal"
                    onClick={() => setOpen(false)}
                >
                    Projets
                </a>

                <a
                    href="#contact"
                    className="text-lg text-foreground hover:text-accent font-normal"
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
