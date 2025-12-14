import { Button } from "@/components/ui/Button"
import { StackCard } from "../card/StackCard"

export const Stack = () => {
    return (
        <section className="flex flex-col justify-center items-center px-12 py-12 gap-8 bg-background">
            <h2 className="font-heading text-secondary text-center text-4xl font-bold">Stack et Compétences</h2>
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        <StackCard name={"Next.js"} src={"/NextJSLogo.svg"} alt={"Logo Next.js"} height={100} width={100}/>
        <StackCard name={"TypeScript"} src={"/TypeScriptLogo.svg"} alt={"Logo TypeScript"} height={80} width={80}/>
        <StackCard name={"Express"} src={"/ExpressJsLogo.svg"} alt={"Logo Express"} height={100} width={100}/>
            </div>
            <Button variant="primary" href={'#'}>Voir tout</Button>
        </section>
    )
}