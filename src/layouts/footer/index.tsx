import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import NavLink from "@/layouts/header/NavLink";

function Footer() {
    return (
            <footer className="mt-auto bg-teal-600 w-full">
                <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
                    {/* Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        <div className="col-span-full lg:col-span-2">
                            <Link className="flex-none text-white focus:outline-hidden focus:opacity-80" href="/" aria-label="Brand">Travaillez plus intelligemment, collaborez plus efficacement. Essayez WorkSphere maintenant !</Link>
                            <div className="mt-4 flex justify-start">
                                <Button title={"Démarrer"} link={"/tarifs"} hasArrow={false} />
                            </div>
                        </div>
                        {/* End Col */}

                        <div className="hidden lg:block"></div>

                        <div className="col-span-1">
                            <h4 className="font-semibold text-gray-300/50">PAGES</h4>

                            <div className="mt-3 grid space-y-3">
                                <NavLink title={`Home`} link={`/`}/>
                                <NavLink title={`About`} link={`/`}/>
                                <NavLink title={`Services`} link={`/`}/>
                                <NavLink title={`Community`} link={`/`}/>
                            </div>
                        </div>
                        {/* End Col */}

                        <div className="col-span-1">
                            <h4 className="font-semibold text-gray-300/50">CONTACT</h4>

                            <div className="mt-3 grid space-y-3">
                                <p className="text-white">
                                    hello@logoipsum.com <br/>
                                    190 Lorem Ipsum,
                                    Lyon 69000
                                </p>
                            </div>
                        </div>
                        {/* End Col */}

                    </div>
                    {/* End Grid */}

                    <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
                        <div className="flex flex-wrap justify-between items-center gap-2">
                            <p className="text-sm text-gray-400">
                                © 2023 – Copyright
                            </p>
                        </div>
                        {/* End Col */}

                        {/* Social Brands */}
                        <div>
                            <Link className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-hidden focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none" href="/">
                                <svg className="w-8 h-8 text-white hover:text-gray-300 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                </svg>
                            </Link>

                            <Link className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-hidden focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none" href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white hover:text-gray-300 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M7.5 2h9A5.507 5.507 0 0122 7.5v9A5.507 5.507 0 0116.5 22h-9A5.507 5.507 0 012 16.5v-9A5.507 5.507 0 017.5 2zm0 2A3.504 3.504 0 004 7.5v9A3.504 3.504 0 007.5 20h9a3.504 3.504 0 003.5-3.5v-9A3.504 3.504 0 0016.5 4h-9zm4.5 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.85-.5a1.15 1.15 0 112.3 0 1.15 1.15 0 01-2.3 0z" clipRule="evenodd"/>
                                </svg>
                            </Link>

                            <Link className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-hidden focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none" href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white hover:text-gray-300 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9.417 15.182l-.396 5.595c.566 0 .813-.244 1.109-.537l2.664-2.473 5.52 4.042c1.013.564 1.726.27 1.993-.934l3.612-16.931c.322-1.495-.526-2.088-1.487-1.72L2.25 9.943c-1.453.56-1.432 1.363-.247 1.731l5.443 1.693 12.634-7.823c.596-.396 1.142-.177.694.22L9.417 15.182z"/>
                                </svg>
                            </Link>
                        </div>
                        {/* End Social Brands */}
                    </div>
                </div>
            </footer>
    );
}

export default Footer;