import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-primary flex flex-col items-center justify-center gap-4 px-6 py-8 lg:flex-row lg:justify-between">
      <p className="font-regular text-background text-center text-xl font-bold lg:min-w-lg">
        © 2025 Gregory LEFRANCOIS. Tous droits réservés.
      </p>

      <p className="font-regular text-background text-center text-xl font-bold">
        Developpeur Full-Stack Junior
      </p>

      <div className="flex justify-center gap-5 lg:min-w-lg lg:justify-end">
        <Link href="#">
          <Image src="/githubLogo.svg" alt="Github Logo" width={50} height={50} />
        </Link>

        <Link href="#">
          <Image src="/linkedinLogo.png" alt="Linkedin Logo" width={50} height={50} />
        </Link>
      </div>
    </footer>
  );
};
