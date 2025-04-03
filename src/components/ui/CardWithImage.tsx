import React from "react";
import Image from "next/image";

function CardWithImage({title, description, imageUrl}:any) {
    return (
        <div className="">
            {/* Card */}
            <div className="group relative block rounded-xl focus:outline-hidden">
                <div className="relative rounded-xl overflow-hidden w-full h-100
                before:absolute before:inset-0 before:z-10
                before:bg-gradient-to-b before:from-gray-900/50 before:to-transparent">
                    <Image
                        className="absolute top-0 left-0 object-cover w-full h-full"
                        src={imageUrl}
                        alt={description}
                        height={100}
                        width={100}
                    />
                </div>


                <div className="absolute top-0 inset-x-0 z-10">
                    <div className="flex flex-col h-full p-4 sm:p-6">
                        <h3 className="text-3xl font-semibold text-white group-hover:text-white/70 group-focus:text-white/80">
                            {title}
                        </h3>
                        <p className="mt-2 text-white/90">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
            {/* End Card */}
        </div>
    );
}

export default CardWithImage;