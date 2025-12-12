import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export const About = () => {
  return (
    <section
      id="about"
      className="bg-primary flex flex-col items-center justify-center gap-8 px-12 py-12 lg:flex-row lg:gap-16"
    >
      <div className="flex flex-col gap-7 lg:w-[1040px]">
        <h2 className="font-heading text-secondary text-center text-4xl font-bold">A propos</h2>

        <div className="lg:flex lg:w-fit lg:justify-between lg:gap-10">
          <div className="gap flex items-center justify-center pb-5">
            <Image
              src="/test2.png"
              alt={'Photo du dev'}
              width={142}
              height={150}
              className="rounded-4xl lg:h-[264px] lg:w-[250px]"
            />
          </div>

          <div className="bg-background flex flex-col items-center justify-center gap-10 rounded-md px-6 py-12 lg:max-w-[700px] lg:px-10">
            <p className="font-regular text-sm lg:text-lg">
              <span className="font-bold">
                Je m’appelle Gregory, développeur web full-stack junior
              </span>{' '}
              fraîchement diplômé de la formation DWWM.Passionné par la création d’applications web
              complètes, j’ai réalisé plusieurs projets personnels et en groupe, en apprenant à
              collaborer efficacement tout en gérant mes propres tâches de manière méthodique.
              <br />
              <span className="font-bold">J’aime relever des défis techniques</span>, lire de la
              documentation, déboguer jusqu’au bout et livrer du code propre et maintenable.
              <span className="font-bold"> Rigoureux et curieux</span>, je suis habitué à utiliser
              Git pour versionner mes projets et à tester sur différents appareils pour garantir une
              expérience fluide. Travailler en équipe ou solo, je m’adapte vite et je pose les
              bonnes questions pour avancer efficacement.
              <br />
              <span className="font-bold">Aujourd’hui, je cherche un premier poste</span> pour
              mettre en pratique mes compétences au service d’une équipe.
              <span className="font-bold">Ouvert à tous les frameworks et langages</span>, mon but
              est de m’intégrer rapidement à votre stack technique et de contribuer à des projets
              qui ont un impact concret.
            </p>

            <div className="flex w-full flex-col items-center justify-center gap-5 md:flex-row">
              <Button variant="primary" href={'https://github.com/GregoryLef'} external={true}>
                <Image src="/githubLogo.svg" alt="Github Logo" width={30} height={30} />
                Github
              </Button>
              <Button variant="primary" href={''} external={true}>
                <Image src="/linkedinLogo.png" alt="Linkedin Logo" width={30} height={30} />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
