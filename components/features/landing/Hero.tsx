import { Button } from '@/components/ui/Button';
import { ArrowBigDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center bg-[url('/bgHero.jpg')] bg-cover bg-center px-6 text-center lg:px-0">
      <div className="bg-background/80 absolute top-1/2 left-1/2 flex max-h-[85vh] -translate-x-1/2 -translate-y-1/2 flex-col gap-8 rounded-md p-6 lg:left-[66%] lg:px-14 lg:py-20">
        <h1 className="font-heading text-primary text-3xl font-bold lg:text-5xl">
          Besoin d’un développeur web full‑stack junior polyvalent ?
        </h1>
        <p className="font-regular text-textPrimary text-sm font-semibold lg:text-lg">
          Je développe des interfaces modernes et des backends robustes avec Next.js, Laravel,
          Express, MySQL et PostgreSQL. Habitué à apprendre de nouveaux outils pendant ma formation,
          je m’adapte facilement aux stacks techniques des équipes que je rejoins.
        </p>

        <div className="flex flex-col gap-6 lg:flex-row lg:justify-center">
          <Button variant="primary">Découvrir mes projets</Button>
          <Button variant="primary">Me contacter</Button>
        </div>
      </div>

      <div className="md:bg-background/80 hidden md:absolute md:top-1/2 md:left-0 md:flex md:-translate-y-1/2 md:flex-col md:items-center md:gap-4 md:rounded-r-md md:p-4">
        <Link href="#">
          <Image src="/githubLogo.svg" alt="Github Logo" width={50} height={50} />
        </Link>

        <Link href="#">
          <Image src="/linkedinLogo.png" alt="Linkedin Logo" width={50} height={50} />
        </Link>
      </div>

      <ArrowBigDown
        className="text-secondary absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
        size={50}
      />
    </section>
  );
};
