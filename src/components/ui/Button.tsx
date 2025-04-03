import Link from "next/link";
import React from "react";

function Button({title, link, hasArrow}:any) {
    return (
        <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <Link className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-teal-600 bg-white text-teal-600 hover:bg-teal-600 hover:text-white hover:border-white active:bg-teal-800 active:text-white active:border-white focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none"  href={link}>
                {title}
                {hasArrow
                    ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                    :
                    ""
                }
            </Link>
        </div>
    );
}

export default Button;