import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "@/layouts/header/NavLink";



function Header() {
    return (
        // <header  className="flex justify-between px-10 pb-10">
        //     <Image src={`/images/logo.svg`} alt={`logo`} width={`50`} height={`50`}></Image>
        //
        // </header>
        <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-black">
            <nav className="relative max-w-5xl w-full md:flex md:items-center md:justify-between md:gap-3 mx-auto px-4 sm:px-6 lg:px-8 py-2">
                {/* Logo w/ Collapse Button */}
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <Image src={`/images/logo.svg`} alt={`logo`} width={`50`} height={`50`}></Image>
                    </Link>

                    {/* Collapse Button */}
                    <div className="md:hidden">
                        <button type="button" className="hs-collapse-toggle relative size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-white/50 text-white hover:bg-white/10 focus:outline-hidden focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none" id="hs-base-header-collapse" aria-expanded="false" aria-controls="hs-base-header" aria-label="Toggle navigation" data-hs-collapse="#hs-base-header">
                            <svg className="hs-collapse-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                            <svg className="hs-collapse-open:block shrink-0 hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                    {/* End Collapse Button */}
                </div>
                {/* End Logo w/ Collapse Button */}

                {/* Collapse */}
                <div id="hs-base-header" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-base-header-collapse">
                    <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                        <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center md:justify-end gap-0.5 md:gap-1">

                            <NavLink title={`HOME`} link={`/`}/>

                            <NavLink title={`ABOUT US`} link={`/`}/>

                            <NavLink title={`OUR SERVICES`} link={`/tarifs`}/>

                            <NavLink title={`COMMUNITY`} link={`/`}/>

                        </div>
                    </div>
                </div>
                {/* End Collapse */}
            </nav>
        </header>
    );
}

export default Header;