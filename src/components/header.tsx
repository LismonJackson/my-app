"use client"
import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/header.module.css";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [nightMode, setNightMode] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleNightMode = () => {
    setNightMode(!nightMode);
    // Additional logic to toggle night mode
  };

  return (
    <nav className="bg-black p-4">
      <div className={`flex items-center justify-between px-20 ${styles.px_10}`}>
        <Link href="/main" className={`font_amaranth_sm ${styles.font_white} font-bold text-lg`}>Home</Link>
        <div className="hidden md:flex">

          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className={`font_amaranth_sm ${styles.font_white} mx-4 font-bold text-lg`}>Discord</a>


          <a href="https://twitter.com/WonkCoinSol" target="_blank" rel="noopener noreferrer" className={`font_amaranth_sm ${styles.font_white} mx-4 font-bold text-lg`}>Twitter</a>
          {/* <button className="text-white ml-10" onClick={toggleNightMode}>
          {nightMode ? '🌙' : '☀️'}
        </button> */}
        </div>
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <svg
              className={`w-6 h-6 fill-current transition-transform transform ${showMenu ? 'rotate-90' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <rect x="4" y="5" width="16" height="2" />
              <rect x="4" y="11" width="16" height="2" />
              <rect x="4" y="17" width="16" height="2" />
            </svg>
          </button>
        </div>
      </div>
      {showMenu && (
        <div className={`md:hidden mt-2 pl-4 ${styles.transitionSmooth}`}>
       
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className={`font_amaranth_sm block ${styles.font_white} my-2 font-bold text-lg`}>Discord</a>

      
            <a href="https://twitter.com/WonkCoinSol" target="_blank" rel="noopener noreferrer" className={`font_amaranth_sm block ${styles.font_white} my-2 font-bold text-lg`}>Twitter</a>
            {/* <button className=" font-bold text-white" onClick={toggleNightMode}>
          {nightMode ? 'Dark Mode 🌙' : 'Light Mode☀️'}
        </button> */}
        </div>
      )}
    </nav>
  );
};

export default Header;
