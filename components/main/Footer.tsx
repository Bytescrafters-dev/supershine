import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center xl:items-start xl:grid grid-cols-4 gap-8">
          <div>
            <Image
              src="/NavLogo.png"
              alt="Bytescrafters Logo"
              width={150}
              height={50}
            />
          </div>

          <div className="text-center xl:text-left">
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-sm mb-2">Info.bytecrafters@gmail.com</p>
            <p className="text-sm mb-2">+61 450 150 214</p>
            <p className="text-sm">26 Muyan Cct Burwood Victoria 3125</p>
          </div>

          <div className="text-center xl:text-left">
            <h3 className="font-semibold mb-4">Navigation</h3>
            <div className="flex flex-col space-y-2">
              <a href="/about-us" className="text-sm hover:text-orange-400">
                About us
              </a>
              {/* <a href="#services" className="text-sm hover:text-orange-400">
                Services
              </a>
              <a href="#work" className="text-sm hover:text-orange-400">
                Work
              </a> */}
              <a href="/contact-us" className="text-sm hover:text-orange-400">
                Contact us
              </a>
            </div>
          </div>

          <div className="text-center xl:text-left">
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-start space-x-4">
              <Link href="#">
                <Image
                  src={"/facebookIcon.png"}
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/InstagramIcon.png"}
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#">
                <Image
                  src={"/linkedinIcon.png"}
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
