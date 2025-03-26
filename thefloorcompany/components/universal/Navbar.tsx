'use client'
import React, { useState } from "react";
import Image from "next/image";
import Menu from '../../public/icons/Menu.svg'
import Down from '../../public/icons/Down.svg'
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
    const [open, setOpen] = useState(false);
    const navlinks = {
      "Residential": "/",
      "Commercial": "/commercial",
      "Services": "/services",
      "Gallery": "/gallery",
      "Contact": "/contact"
    }
    
    // Animation variants
    const menuVariants = {
      closed: {
        opacity: 0,
        height: 0,
        transition: {
          duration: 0.3,
          staggerChildren: 0.05,
          staggerDirection: -1,
          when: "afterChildren"
        }
      },
      open: {
        opacity: 1,
        height: "auto",
        transition: {
          duration: 0.3,
          staggerChildren: 0.1,
          staggerDirection: 1,
          when: "beforeChildren"
        }
      }
    };

    const itemVariants = {
      closed: {
        opacity: 0,
        y: -10,
        transition: { duration: 0.2 }
      },
      open: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.2 }
      }
    };

    const buttonHoverVariants = {
      initial: { scale: 1 },
      hover: { scale: 1.05, transition: { duration: 0.2 } }
    };

    const downIconVariants = {
      initial: { rotate: 0 },
      hover: { rotate: 180, transition: { duration: 0.3 } }
    };

  return (
    <>
    <motion.div 
      className="sticky top-0 nav h-fit w-full bg-white text-white z-20 md:hidden block"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="nav__container flex justify-between px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image className="cursor-pointer" src="/images/logos/logo.png" alt="logo" width={100} height={70} />
        </motion.div>
        <div className="right__buttons flex space-x-4">
          <motion.button 
            className="button cursor-pointer bg-[#e2001a] text-white p-2 rounded-xl py-2 my-2 h-fit"
            variants={buttonHoverVariants}
            initial="initial"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Quote
          </motion.button>
          {/* Removed animation from menu icon, back to original implementation */}
          <Image 
            className="cursor-pointer" 
            onClick={() => setOpen(!open)} 
            src={Menu} 
            alt="menu" 
            width={24} 
            height={24} 
          />
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            className="absolute top-auto right-0 w-full bg-white min-h-64 text-bgwhite p-4 z-10"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="dropdown">
              <ul className="flex flex-col space-y-2">
                {Object.entries(navlinks).map(([key, value], index) => (
                  <motion.div 
                    key={key}
                    className="nav__item flex w-full h-fit p-4 border-b border-[#e2001a] text-black z-30 justify-between"
                    variants={itemVariants}
                    whileHover={{ backgroundColor: "#f8f8f8", x: 5 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <li>
                      <a href={value}>{key}</a>
                    </li>
                    <motion.div
                      variants={downIconVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      <Image src={Down} alt="down" width={24} height={24} />
                    </motion.div>
                  </motion.div>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>

    <motion.div 
      className="sticky top-0 nav h-fit w-full bg-white text-bgwhite z-20 md:block hidden"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="nav__container flex justify-between px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image className="cursor-pointer" src="/images/logos/logo.png" alt="logo" width={100} height={70} />
        </motion.div>
        <div className="right__buttons flex space-x-4">
          <ul className="flex space-x-4 items-center align-middle">
            {Object.entries(navlinks).map(([key, value], index) => (
              <motion.li 
                key={key}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <motion.a 
                  className="cursor-pointer hover:text-[#e2001a] text-md" 
                  href={value}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {key}
                </motion.a>
              </motion.li>
            ))}
          </ul>
          <motion.button 
            className="button cursor-pointer bg-[#e2001a] text-white p-2 rounded-xl py-2 my-2 h-fit"
            variants={buttonHoverVariants}
            initial="initial"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Quote
          </motion.button>
        </div>
      </div>
    </motion.div>
    </>
  );
}

export default Navbar;