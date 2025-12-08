import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="py-8 px-6 flex flex-col items-center justify-center bg-primary gap-4 lg:flex-row lg:justify-between">

            <p className="text-center text-xl font-bold font-regular text-background lg:min-w-lg">© 2025 Gregory LEFRANCOIS. Tous droits réservés.</p>

            <p className="text-center text-xl font-bold font-regular text-background">Developpeur Full-Stack Junior</p>

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
}