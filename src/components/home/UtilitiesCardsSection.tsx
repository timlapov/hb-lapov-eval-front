import React from 'react'
import CardWithText from "@/components/ui/CardWithText";

function UtilitiesCardsSection() {
    return (
        <section className="flex flex-col bg-gray-200 px-20 py-15">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center">
                    <h2 className={`text-4xl font-bold pe-3 pb-3 text-gray-900`}>Outils essentiels</h2>
                    <p className={`text-gray-600`}>Des fonctionnalités conçues pour améliorer votre efficacité et simplifier votre quotidien. Profitez d'un espace de travail optimisé pour mieux organiser vos tâches et collaborer sans effort.</p>
                </div>
                <CardWithText
                    number="01"
                    title="Agenda intelligent"
                    description="Planifiez vos tâches, réunions et rappels en quelques secondes grâce à une interface claire et intuitive."
                />

                <CardWithText
                    number="02"
                    title="Outils de productivité"
                    description="Connectez facilement vos applications préférées pour un flux de travail optimisé et sans interruptions."
                />

                <CardWithText
                    number="03"
                    title="Communication fluide"
                    description="Discutez avec vos collègues en temps réel via chat, messagerie et appels vidéo haute qualité."
                />

                <CardWithText
                    number="04"
                    title="Tableaux de bord"
                    description="Visualisez l’évolution de vos projets avec des graphiques et statistiques détaillés."
                />

                <CardWithText
                    number="05"
                    title="Partage facile"
                    description="Partagez rapidement vos fichiers en toute sécurité et travaillez en équipe sur des documents partagés."
                />
            </div>
        </section>
    )
}

export default UtilitiesCardsSection
