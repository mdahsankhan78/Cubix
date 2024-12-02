import { useState, useEffect } from "react";

import Nav from "./Header/Nav";
import MobileNav from "./Header/MobileNav";
import SecondNav from "./Header/SecondNav";

const Header = () => {
    const [header, setHeader] = useState(false);
    useEffect(() => {
        const scrollYPos = window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        });
        return () => window.removeEventListener("scroll", scrollYPos);
    }, []);

    return (
        <header
            className={`${header
                    ? "py-4 bg-white shadow-lg dark:bg-accent"
                    : "py-4 bg-white lg:bg-transparent dark:bg-accent"
                } sticky top-0 z-30 transition-all duration-300 
            `}
        >
            <div className={`${header
                    ? "mx-8 text-black"
                    : "mx-8 text-white"}`}>
                <div className="flex items-center">
                    <a href="#">
                        <img
                            src="/images/logo.svg"
                            className={`h-16 lg:hidden`}
                            alt="Logo"
                        />
                         <img
                            src={header ? ('/images/logo-black.svg'):('/images/logo.svg')}
                            className={`h-8 hidden lg:block`} // Visible only on large screens (lg and above)
                            alt="Logo"
                        />
                    </a>
                    <div className="flex items-center justify-center gap-x-6 w-full">
                        {/* nav */}
                        <Nav
                            containerStyles="hidden lg:flex gap-x-8 items-center transition-all"
                            linkStyles={`relative font-bold text-lg hover:text-primary transition-all ${header ? 'text-black':'text-white'}`}
                            underlineStyles="absolute left-0 top-[3.2rem] h-[3px] bg-primary w-full"
                        />
                        {/* <ThemeToggler /> */}
                        {/* mobile nav */}
                        <div className="lg:hidden">
                            <MobileNav />
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-x-6 w-[30rem]">
                        {/* nav */}
                        <SecondNav
                            containerStyles="hidden lg:flex gap-x-8 items-center transition-all"
                            linkStyles={`relative font-bold text-lg hover:text-primary transition-all ${header ? 'text-black':'text-white'}`}
                            underlineStyles="absolute left-0 top-[3.2rem] h-[3px] bg-primary w-full"
                        />
                        {/* <ThemeToggler /> */}
                        {/* mobile nav */}
                        <div className="lg:hidden">
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
