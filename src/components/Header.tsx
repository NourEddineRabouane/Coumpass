import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
const Header = () => {
    const [ isVisible , setIsVisible ] = useState<boolean>(false);
    const handleClick = ():void =>{
        setIsVisible(prev => !prev);
    }
    return (
        <header className="flex max-sm:block justify-between content-baseline w-full border px-4 py-6">
            <div className="relative">
                <div className="text-xl font-semibold uppercase drop-shadow-sm hover:drop-shadow-xl ">
                    Coumpass
                </div>
                <div className="sm:hidden absolute right-4 top-[50%] translate-y-[-50%]">
                    <FaBars className="text-3xl cursor-pointer" onClick={handleClick} />
                </div>
            </div>
            <div className={`max-sm:m-4 max-sm:mb-0 ${isVisible?'max-sm:block':'max-sm:hidden'}`}>
                <ul className="sm:flex sm:gap-4 text-blue-500">
                    <li>
                        <Link
                            className="hover:underline focus:underline"
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="hover:underline focus:underline"
                            to="/search"
                        >
                            Search
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
