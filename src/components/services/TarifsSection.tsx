import React from 'react'
import Button from "@/components/ui/Button";

function TarifsSection() {
    return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-start">Tarifs</h2>

        {/* Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:items-center">
            {/* Card */}
            <div className="flex flex-col border border-gray-200 text-start rounded-xl p-5">
                <p className="mb-1"><span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs uppercase font-semibold bg-teal-600 text-white">Basic</span></p>
                <span className="mt-7 font-bold text-5xl text-gray-800">$15/mo</span>
                <p className="mt-2 text-sm text-gray-500">Pour les indépendants.</p>

                <ul className="mt-7 space-y-2.5 text-sm">
                    <li className="flex gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5 text-teal-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <span className="text-gray-800">
            Accès aux outils essentiels
          </span>
                    </li>
                    <li className="flex gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5 text-teal-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <span className="text-gray-800">
            Messagerie instantanée
          </span>
                    </li>
                    <li className="flex gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5 text-teal-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <span className="text-gray-800">
            Stockage limité
          </span>
                    </li>
                    <li className="flex gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5 text-teal-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <span className="text-gray-800">
            Support standard
          </span>
                    </li>
                    <li className="flex gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5 text-teal-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <span className="text-gray-800">
            Accès mobile
          </span>
                    </li>
                </ul>

                <Button title={`Démarrer`} link={`/tarifs`} hasArrow={true}/>
            </div>
            {/* End Card */}

            {/* Card */}
            <div className="flex flex-col bg-teal-600 text-start rounded-xl p-5">
                <p className="mb-1"><span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs uppercase font-semibold bg-white text-teal-600">Pro</span></p>
                <span className="mt-7 font-bold text-5xl text-white">$25/mo</span>
                <p className="mt-2 text-sm text-white">Pour les équipes en croissance.</p>

                <ul className="mt-7 space-y-2.5 text-sm">
                    <li className="flex gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <span className="text-white">
            Réunions vidéo HD
          </span>
                    </li>
                    <li className="flex gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <span className="text-white">
            Partage de fichiers illimité
          </span>
                    </li>
                    <li className="flex gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <span className="text-white">
            Intégrations avancées
          </span>
                    </li>
                    <li className="flex gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <span className="text-white">
            Sécurité renforcée
          </span>
                    </li>
                    <li className="flex gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <span className="text-white">
            Assistance prioritaire
          </span>
                    </li>
                </ul>

                <Button title={`Démarrer`} link={`/tarifs`} hasArrow={true}/>
            </div>
            {/* End Card */}

            {/* Card */}
            <div className="flex flex-col border border-gray-200 text-start rounded-xl p-5">
                <p className="mb-1"><span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs uppercase font-semibold bg-teal-600 text-white">Elite</span></p>
                <span className="mt-7 font-bold text-5xl text-gray-800">$30/mo</span>
                <p className="mt-2 text-sm text-gray-500">Expérience ultime.</p>

                <ul className="mt-7 space-y-2.5 text-sm">
                    <li className="flex gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5 text-teal-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <span className="text-gray-800">
            Espaces personnalisables
          </span>
                    </li>
                    <li className="flex gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5 text-teal-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <span className="text-gray-800">
            Intelligence artificielle
          </span>
                    </li>
                    <li className="flex gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5 text-teal-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <span className="text-gray-800">
            Collaboration avancée
          </span>
                    </li>
                    <li className="flex gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5 text-teal-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <span className="text-gray-800">
            Accès VIP
          </span>
                    </li>
                    <li className="flex gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5 text-teal-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <span className="text-gray-800">
            Support 24/7
          </span>
                    </li>
                </ul>

                <Button title={`Démarrer`} link={`/tarifs`} hasArrow={true}/>
            </div>
            {/* End Card */}

        </div>
        {/* End Grid */}
    </div>
    )
}

export default TarifsSection
