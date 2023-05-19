import React, { useState, useEffect } from "react";
import { HiMenu, HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ items }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => {
    setToggleMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuWidth = toggleMenu ? (window.innerWidth >= 768 ? "30vw" : "45vw") : "0";

  const handleLinkClick = (link) => {
    closeMenu();
    navigate(link);
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`fixed w-full h-20 flex-row md:justify-between items-center p-4 py-10 ${
        isScrolled ? "white-glassmorphism-nav" : ""
      }`}
      style={{ zIndex: 10 }}
    >
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <div className="flex justify-start items-center">
          <a href="/" style={{ fontFamily: "Playfair Display", fontWeight: 900, fontSize: "30px" }}>
            Yes, and
            {/* <img
              src={logo}
              alt="logo"
              className="cursor-pointer flex"
              style={{ width: 100, height: 100 }}
            /> */}
          </a>
        </div>

        <div className="flex justify-end items-center">
          {toggleMenu ? (
            <AiOutlineClose
              fontSize={28}
              className="text-black cursor-pointer fixed"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <HiMenuAlt4
              fontSize={28}
              className="text-black cursor-pointer fixed"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <ul
              className="z-999 fixed top-0 -right-2 p-3 md:w-auto h-screen shadow-2xl list-none
                        flex flex-col justify-start items-between rounded-md blue-glassmorphism text-white animate-slide-in text-center gothic"
              style={{ width: menuWidth, zIndex: 999, textAlign: "center" }}
            >
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              {items.map((item, index) => (
                <li key={index} className="my-2 text-lg py-2 px-7 mx-4">
                  <Link
                    to={item.Link}
                    onClick={() => handleLinkClick(item.Link)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
