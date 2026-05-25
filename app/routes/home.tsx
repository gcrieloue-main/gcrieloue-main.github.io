import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gilles CRIELOUE" },
    {
      name: "description",
      content: "Gilles CRIELOUE - Développeur full-stack senior",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
