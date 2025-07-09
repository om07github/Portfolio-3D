import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { mypic, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingY
      } w-full flex justify-center items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center mx-2 px-4 md:mx-6 max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={mypic}
            alt="Logo"
            className="h-10 w-10 rounded-full object-contain"
          />
          <p className="text-white text-[10px] font-bold cursor-pointer flex-col">
            Om Mahalle &nbsp;
            <br />
            <span className="text-[16px]"> | Full Stack Developer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[14px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              {nav.external ? (
                <a
                  href={nav.external}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {nav.title}
                </a>
              ) : (
                <a href={`#${nav.id}`}>{nav.title}</a>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="C&O"
          className="w-4 h-4 object-contain mx-4"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-4 bg-gradient-to-b from-[#141e30] to-[#243b55]
 absolute top-16 right-0 mx-2 my-2 min-w-[120px] z-10 rounded-xl`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[12px] ${
                  active === nav.title ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(false);
                  setActive(nav.title);
                }}
              >
                {nav.external ? (
                  <a
                    href={nav.external}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {nav.title}
                  </a>
                ) : (
                  <a href={`#${nav.id}`}>{nav.title}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
