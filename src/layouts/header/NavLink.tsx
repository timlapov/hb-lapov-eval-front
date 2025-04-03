import Link from "next/link";
import React from "react";

function NavLink({title, link}:any) {
    return (
        <li>
            <Link href={link}
                  className="text-white hover:underline active:underline active:text-teal-800 transition-colors px-2"
            >
                {title}
            </Link>
        </li>
    );
}

export default NavLink;