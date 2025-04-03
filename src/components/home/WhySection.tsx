import React from 'react'
import Image from "next/image";
import CardWithImage from "@/components/ui/CardWithImage";
import NavLink from "@/layouts/header/NavLink";

function WhySection() {
    return (
        <section className={`my-20`}>
            <h2 className="font-bold text-4xl mt-20 ms-8 text-gray-900">Pourquoi choisir WorkSphere ?</h2>
            {/* Card Blog */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto">
                {/* Grid */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                    {/* Cards */}

                    <CardWithImage title="Productivité maximale" description="Un espace de travail optimisé sans distractions." imageUrl="/images/cheffe-dequipe1.png" />
                    <CardWithImage title="Collaboration facile" description="Des outils intuitifs pour travailler en équipe." imageUrl="/images/cheffe-dequipe2.png" />
                    <CardWithImage title="Sécurité garantie" description="Données protégées avec un chiffrement avancé." imageUrl="/images/devsecops.png" />
                    <CardWithImage title="Accessible partout" description="Compatible avec tous vos appareils, sans limites." imageUrl="/images/ordi-en-parc.png" />
                    {/* End Cards */}

                </div>
                {/* End Grid */}
            </div>
            {/* End Card Blog */}
        </section>
    )
}

export default WhySection