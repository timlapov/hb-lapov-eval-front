import React from 'react'
import Image from "next/image";

function HeroSection() {
    return (
        <section
            className="relative w-[94%] mx-auto h-[80vh] bg-[url('/images/madame-ordi.webp')] bg-teal-900/40 bg-blend-multiply bg-cover bg-center flex items-center justify-center px-6 py-8 rounded-xl mt-7"
        >
            <h1 className="text-white text-5xl text-center font-bold">
                TRAVAILLEZ <br/>
                INTELLIGEMMENT,<br/>
                COLLABOREZ PARTOUT
            </h1>
        </section>
    )
}

export default HeroSection
