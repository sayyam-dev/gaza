'use client'
import React from 'react';
import { useState } from "react";
import Image from 'next/image';


export default function Empowerment() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="relative md:h-[1024px] h-[900px] bg-cover bg-center" style={{ backgroundImage: "url('1.jpeg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <header className="relative z-10 flex items-center justify-between p-6 md:px-28">
          <div className="md:w-[400px]">
            <div className="md:w-[400px]">
              <img
                src="/gaza/logo.svg" 
                alt="App Logo"
                className="w-[50px] h-[50px]"
              />
            </div>

          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-14 text-white md:w-[500px]">
            <a href="#" className="hover:text-green-400">Home</a>
            <a href="#" className="hover:text-green-400">About us</a>
            <a href="#" className="hover:text-green-400">Overview</a>
            <a href="#" className="hover:text-green-400">Roadmap</a>
            <a href="#" className="hover:text-green-400">FAQ</a>
          </nav>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>

          <button className="hidden md:block bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
            Buy now
          </button>
        </header>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-black text-white md:hidden z-10">
            <nav className="flex flex-col items-center space-y-4 py-6">
              <a href="#" className="hover:text-green-400">Home</a>
              <a href="#" className="hover:text-green-400">About us</a>
              <a href="#" className="hover:text-green-400">Overview</a>
              <a href="#" className="hover:text-green-400">Roadmap</a>
              <a href="#" className="hover:text-green-400">FAQ</a>
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
                Buy now
              </button>
            </nav>
          </div>
        )}

        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-2xl mx-auto text-white md:ml-14 md:mt-[-500px]">

            {/* Heading Section */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center md:text-left md:ml-9">
              Empowerment
              <br />
              <span className="flex justify-center md:justify-start gap-2 mt-2 ">
                <span>in</span>
                <span className="flex">
                  <span className="text-[#00985F]">G</span>
                  <span className="text-white">a</span>
                  <span className="text-red-500">z</span>
                  <span className="text-white">a</span>
                </span>
              </span>
            </h1>

            {/* Description Text */}
            <p className="mb-6 text-lg sm:text-xl px-2 sm:px-0 text-center md:text-left md:ml-10">
              Built on the Solana blockchain, GazaRelief combines the power of <br className="hidden sm:block" />
              digital assets, including NFTs, with grassroots philanthropy to <br className="hidden sm:block" />
              bring immediate aid and long-term development to Gaza.
            </p>

            {/* Button */}
            <div className="flex justify-center md:block">
              <button className="bg-[#D00E26] sm:w-64 w-40 h-14 sm:h-16 rounded-[60px] md:rounded-[63px] text-white py-3 px-6 hover:bg-[#631821] md:ml-[-280px]">
                Join Now
              </button>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}
