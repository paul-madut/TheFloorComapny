'use client'
import React from "react";
import Image from "next/image";
import Menu from '../../public/icons/Menu.svg'
import Down from '../../public/icons/Down.svg'
import { useState } from "react";





function Navbar() {

    const [open, setOpen] = useState(false);
    const navlinks = {
      "Residential": "/",
      "Commercial": "/commercial",
      "Services": "/services",
      "Gallery": "/gallery",
      "Contact": "/contact"
    }
    

  return (
    <>
    <div className="relative nav h-fit w-full bg-bgblack text-bgwhite z-20 md:hidden block">
      <div className="nav__container flex justify-between px-4">
        <Image className="cursor-pointer" src="/images/logos/logo.png" alt="logo" width={100} height={70}></Image>
        <div className="right__buttons flex space-x-4">
        <button className="button cursor-pointer bg-[#e2001a] text-white p-2 rounded-xl py-2 my-2 h-fit ">Get a Free Quote</button>
        <Image className=" cursor-pointer" onClick={() => setOpen(!open)} src={Menu} alt="logo" width={24} height={24}></Image>
        </div>
      </div>

      {open && (
        <div className="absolute top-auto right-0 w-full bg-white min-h-64 text-bgwhite p-4 z-10">
        <div className="dropdown">

            <ul className="flex flex-col space-y-2" >
            {Object.entries(navlinks).map(([key, value]) => (
                <div className="nav__item flex w-full h-fit p-4 border-b border-[#e2001a] justify-between">

                <li key={key}>
                <a href={value}>{key}</a>
                </li>
                <Image src={Down} alt="logo" width={24} height={24}></Image>

                </div>
            ))}
            </ul>

        </div>
        </div>
      )}

    </div>

<div className="relative nav h-fit w-full bg-bgblack text-bgwhite z-20 md:block hidden">
<div className="nav__container flex justify-between px-4">
  <Image className="cursor-pointer" src="/images/logos/logo.png" alt="logo" width={100} height={70}></Image>
  <div className="right__buttons flex space-x-4">
    <ul className="flex space-x-4 items-center align-middle">
      {Object.entries(navlinks).map(([key, value]) => (
        <li key={key}>
          <a className="cursor-pointer hover:text-[#e2001a] text-md " href={value}>{key}</a>
        </li>
      ))}
    </ul>
  <button className="button cursor-pointer bg-[#e2001a] text-white p-2 rounded-xl py-2 my-2 h-fit ">Get a Free Quote</button>
  
  </div>
</div>



</div>

    </>
  );
}

export default Navbar;