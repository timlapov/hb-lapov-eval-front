import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PrelineScriptWrapper from "@/components/PrelineScriptWrapper";
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WorkSphere | Espace de travail numérique pour une collaboration efficace",
  description: "WorkSphere - plateforme intelligente pour le travail d'équipe avec des outils de planification, de communication et de partage sécurisé de données. Augmentez la productivité de votre équipe avec nos solutions d'espace de travail numérique.",
  keywords: "WorkSphere, espace de travail numérique, travail d'équipe, productivité, communication, partage de fichiers, espace cloud, planification des tâches",
  openGraph: {
    title: "WorkSphere | Espace de travail numérique",
    description: "Améliorez la productivité de votre équipe avec notre plateforme de collaboration",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Header />
        {children}
      <Footer />
      </body>
      <PrelineScriptWrapper />
    </html>
  );
}
