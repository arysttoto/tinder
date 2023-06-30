'use client'
import useScroll from "/lib/hooks/use-scroll";
import MenuDropdown from "./burgerMenu";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const scrolled = useScroll(50);  

    return (
        <>
        <div    
        className={`fixed top-0 w-full ${  
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`} 
      >  
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/favicon.ico" 
              alt="helpmesolve-logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm transform rotate-180"
            ></Image>
            <p>Kinder</p>
          </Link>      
          {/* items at right side */}
          <div className="right-corner flex items-center">
            {/* sign in button, or profile menu */} 
            <MenuDropdown /> 
          </div>
        </div>  
      </div>    
      </>
    );
}