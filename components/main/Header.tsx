"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Nav from "./Navbar";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isHome = pathname === "/";

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="w-full h-20 fixed top-0 shadow-lg shadow-[#D32F2F]/50 bg-[#59010100] backdrop-blur-md z-50 px-6 md:px-10">
      <div className="text-white w-full h-full flex items-center justify-between">
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            <FiMenu />
          </button>
        </div>

        <div className="flex items-center space-x-2 grow ml-4 justify-between md:grow-0 md:ml-0">
          <a href="/" className="flex items-center">
            <Image
              src="/navLogo.png"
              alt="logo"
              width={130}
              height={70}
              className="hidden md:block cursor-pointer hover:animate-slowspin"
            />
          </a>
          <Image
            src="/navLogo.png"
            alt="logo"
            width={100}
            height={50}
            className={`md:hidden cursor-pointer ${isOpen && "hidden"}`}
          />
        </div>

        <div className="space-x-6">
          <Nav isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    </div>
  );
};

export default Header;
