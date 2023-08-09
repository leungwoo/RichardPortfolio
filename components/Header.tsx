"use client";
import Image from "next/image";
import Link from "next/link";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useState } from "react";
import { AiOutlineCloudDownload, AiOutlineMenu } from "react-icons/ai";

import { rglogo } from "../assets/images/index";
import { Sidebar } from "./index";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [toggle, setToggle] = useState(false);
  return (
    <div className="fixed backdrop-blur-sm backdrop-filter dark:bg-primary-darkDefault flex flex-row justify-between py-4 md:pl-20 px-4  md:pr-40 w-full z-50  items-center ">
      <div>
        <Link href="/">
          <Image
            src={rglogo}
            alt="logo"
            width={100}
            height={100}
            className="w-10 h-10"
          />
        </Link>
      </div>
      {/* Desktop view */}
      <div className=" sm:flex hidden items-center justify-between gap-6 text-text-navbar dark:text-text-dark font-bold text-base">
        <Link
          href="/"
          className="hover:text-text-accentBlue hover:duration-500 transition"
        >
          Home
        </Link>
        <Link
          href="/CaseStudies"
          className="hover:text-text-accentBlue hover:duration-500 transition"
        >
          Case Studies
        </Link>
        <Link
          href="/Contact"
          className="hover:text-text-accentBlue hover:duration-500 transition"
        >
          Contact
        </Link>
        <Link
          href="https://drive.google.com/file/d/11PPDLjSTC9rrzJ-1AXtKibJbWdl5LAiJ/view?usp=sharing"
          target="_blank"
        >
          <div className="flex flex-row items-center gap-2 text-text-title dark:text-white dark:hover:text-text-accentBlue hover:text-text-accentBlue hover:duration-500 transition">
            <AiOutlineCloudDownload className="w-[20px] h-[20px] inline-block" />{" "}
            Resume
          </div>
        </Link>
        <button
          type="button"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme === "dark" ? (
            <FiSun
              size={20}
              className="md:w-[25px] md:h-[25px] w-[20px] h-[20px] hover:text-primary-highlight"
            />
          ) : (
            <FiMoon
              size={20}
              className=" md:w-[25px] md:h-[25px] w-[20px] h-[20px] hover:text-text-accentBlue"
            />
          )}
        </button>
      </div>
      {/* MobileView */}
      <div className="appBarMenu flex md:hidden w-[39px] h-[35px] justify-center items-center relative rounded-full bg-primary">
        <AiOutlineMenu
          className="text-primary-accentBlue dark:text-primary-darkmodeblue w-[70%] h-[70%] "
          onClick={() => setToggle(true)}
        />
        <Sidebar setToggle={setToggle} toggle={toggle} />
      </div>
    </div>
  );
};

export default Header;
