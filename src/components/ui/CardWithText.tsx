import React from "react";
import Image from "next/image";

function CardWithText({number, title, description}:any) {
    return (
        <div className="">
            {/* Card */}
            <div className={`group aspect-square bg-white rounded-xl shadow p-6 flex flex-col hover:bg-teal-600 transition`}>
                <span className="text-teal-600 text-5xl font-bold group-hover:text-white">{number}</span>
                <h3 className="my-3 text-gray-800 text-xl font-semibold group-hover:text-white">
                    {title}
                </h3>
                <p className="mt-1 text-gray-500 group-hover:text-white">
                    {description}
                </p>
            </div>
            {/* End Card */}
        </div>
    );
}

export default CardWithText;