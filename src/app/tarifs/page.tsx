import TarifsView from "@/views/TarifsView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WorkSphere | Nos tarifs et formules d'abonnement",
  description: "Découvrez nos différentes formules d'abonnement pour WorkSphere - Basic, Pro et Elite. Des solutions adaptées pour les indépendants, les équipes en croissance et les entreprises exigeantes.",
  keywords: "WorkSphere tarifs, abonnement WorkSphere, formules WorkSphere, prix espace de travail numérique, tarification collaborative",
  openGraph: {
    title: "WorkSphere | Tarifs et formules",
    description: "Choisissez la formule adaptée à vos besoins - Basic, Pro ou Elite",
    type: "website"
  }
};

export default function Home() {
    return (
        <TarifsView/>
    );
}
