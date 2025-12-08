import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black min-w-">
      <Button variant="primary" type="button">Test</Button>
      <Button variant="back" type="button">Back</Button>
      <Button variant="primary" type="button">Découvrir mes projets</Button>
      <Button href="https://www.example.com" variant="primary">Go to Example.com</Button>
      <Button href="https://www.example.com" variant="primary" external={true}>Go to Example.com</Button>
    </div>
  );
}
