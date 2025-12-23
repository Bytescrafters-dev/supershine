"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiX } from "react-icons/fi";
import Image from "next/image";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about us",
    path: "/about-us",
  },
  // {
  //   name: "our services",
  //   path: "/our-services",
  // },
  {
    name: "contact us",
    path: "/contact-us",
  },
];

type Props = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const Nav = ({ isOpen, toggleMenu }: Props) => {
  const pathname = usePathname();

  return (
    <>
      <nav className="hidden md:flex gap-8">
        {links.map(({ name, path }) => {
          return (
            <Link
              href={path}
              key={name}
              className={`transition-colors duration-300 cursor-pointer font-semibold capitalize hover:text-accent ${
                pathname === path
                  ? "text-red-700 text-accent border-b-2 border-accent"
                  : "text-gray-300 hover:text-red-700"
              }`}
            >
              {name}
            </Link>
          );
        })}
      </nav>

      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed bg-[#000000c3]  w-2/3 h-screen top-0 left-0 z-60 shadow-2xl md:hidden transform transition-transform duration-300`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-600">
          <Link
            href="/"
            onClick={() => toggleMenu()}
            className="flex items-center space-x-2"
          >
            <Image
              src={"/navLogo.png"}
              alt="Company Logo"
              width={100}
              height={100}
            />
          </Link>
          <button
            onClick={() => toggleMenu()}
            className="text-2xl text-gray-300 hover:text-accent transition-colors"
          >
            <FiX />
          </button>
        </div>

        <div className="flex flex-col px-6 pt-6 space-y-6 text-lg font-medium">
          {links.map(({ name, path }) => (
            <Link
              href={path}
              key={name}
              onClick={() => toggleMenu()}
              className={`capitalize transition-colors duration-200 ${
                pathname === path
                  ? "text-red-700"
                  : "text-gray-300 hover:text-red-700"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => toggleMenu()}
          className="fixed w-screen h-screen bg-black opacity-40 z-50 top-0 left-0 "
        />
      )}
    </>
  );
};

export default Nav;
