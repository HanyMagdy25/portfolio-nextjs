import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "./../public/navLogo.png";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl z-[1000] bg-slate-200">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={logo} alt="logo" width="125" height="50" />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="text-sm ml-10 uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="text-sm ml-10 uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="text-sm ml-10 uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="text-sm ml-10 uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="text-sm ml-10 uppercase hover:border-b">
                Contacts
              </li>
            </Link>
          </ul>
          <div className="md:hidden cursor-pointer" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={nav ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/70 " : ""}
      >
        <div
          className={
            nav
              ? "md:hidden fixed top-0 left-0 h-screen w-[75%] md:w-[60%] sm:w-[45%] bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-between w-full items-center">
              <Image src={logo} alt="alt" width="100" height="40" />
              <div
                onClick={handleNav}
                className="shadow-lg shadow-gray-400 cursor-pointer rounded-full p-3"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build something legendary together
              </p>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li className="py-2 text-sm font-bold hover:scale-x-105 ease-in duration-200">Home</li>
                </Link>
                <Link href="/">
                  <li className="py-2 text-sm font-bold hover:scale-x-105 ease-in duration-200">about</li>
                </Link>
                <Link href="/">
                  <li className="py-2 text-sm font-bold hover:scale-x-105 ease-in duration-200">skills</li>
                </Link>
                <Link href="/">
                  <li className="py-2 text-sm font-bold hover:scale-x-105 ease-in duration-200">projects</li>
                </Link>
                <Link href="/">
                  <li className="py-2 text-sm font-bold hover:scale-x-105 ease-in duration-200">contacts</li>
                </Link>
              </ul>
            </div>
            <div className="pt-32">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <div className="flex justify-between w-full sm:w-[80%] items-center my-4">
                <a
                  href="https://www.linkedin.com/in/hany-magdy-7a0ab4175/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/fireclint"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full p-3 shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300 "
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
