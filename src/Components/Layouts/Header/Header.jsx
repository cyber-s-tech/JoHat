
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className=" max-w-[1440px]  mx-auto   top-0 z-50 px-5 md:px-10 xl:px-[60px] py-[37px]">
        <div className="bg-[#F8FFFB] rounded-full px-[16px] xl:pl-[21px] xl:pr-[11px] py-[11px] flex items-center justify-between relative shadow-sm relative">

          {/* LEFT MENU */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-[50px] xl:mr-[71px] xl:py-[11px] text-base">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-2.5 py-[5px] xl:px-[20px] xl:py-[10px] bg-[#C7FFEE] rounded-full"
                  : "px-[5px] xl:px-[10px]"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "px-2.5 py-[5px] xl:px-[20px] xl:py-[10px] bg-[#C7FFEE] rounded-full"
                  : "px-[5px] xl:px-[10px]"
              }
            >About Us</NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive
                  ? "px-2.5 py-[5px] xl:px-[20px] xl:py-[10px] bg-[#C7FFEE] rounded-full"
                  : "px-[5px] xl:px-[10px]"
              }
            >Services</NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "px-2.5 py-[5px] xl:px-[20px] xl:py-[10px] bg-[#C7FFEE] rounded-full"
                  : "px-[5px] xl:px-[10px]"
              }
            >Contact Us</NavLink>
          </nav>

          {/* LOGO (CENTER) */}
          <div className="left-7 absolute lg:left-1/2 lg:-translate-x-1/2">
            <a href="/" className="text-decoration-none"><img
              src={logo}
              alt="logo"
              className="w-[85px] h-[85px] lg:w-[119px] lg:h-[119px] xl:w-[139px] xl:h-[139px]  object-contain shadow-sm rounded-full"
            /></a>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-[11px] xl:ml-[188px]">
            <a href="" className="gradient-btn cursor-pointer py-2.5 px-4 xl:px-[30px] xl:py-[20px] rounded-full">
              <span>Browse Properties</span>
            </a>
            <a href="" className="bg-gradient cursor-pointer text-white py-2.5 px-4 xl:px-[30px] xl:py-[20px] rounded-full">
              Get Pre-Approved
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden ml-auto flex items-center justify-center h-9 w-9 text-[#066478]"
            onClick={() => setOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor"
              stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* OFF-CANVAS MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
          }`}
      ><button onClick={() => setOpen(false)} className=" p-6 left-0">✕</button>
        <div className=" flex flex-col gap-6">         

          <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-[20px] py-[10px] bg-[#C7FFEE]"
                  : "px-[20px] py-[10px] bg-transparent"
              }
            >Home</NavLink>
          <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "px-[20px] py-[10px] bg-[#C7FFEE]"
                  : "px-[20px] py-[10px] bg-transparent"
              }
            >About</NavLink>
         <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive
                  ? "px-[20px] py-[10px] bg-[#C7FFEE]"
                  : "px-[20px] py-[10px] bg-transparent"
              }
            >Services</NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "px-[20px] py-[10px] bg-[#C7FFEE]"
                  : "px-[20px] py-[10px] bg-transparent"
              }
            >Contact Us</NavLink>

          <button className="mx-6 gradient-btn px-[20px] py-[12px] rounded-full">
            <span>Browse Properties</span>
          </button>
          <button className="mx-6 bg-gradient text-white px-[20px] py-[12px] rounded-full">
            Get Pre-Approved
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default Header