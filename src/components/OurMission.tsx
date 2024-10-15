'use client'
import React from 'react';
import { IoIosWater } from "react-icons/io";
import { BiSolidDonateBlood } from "react-icons/bi";
import { FaBluetoothB } from "react-icons/fa";
import { GrCube } from "react-icons/gr";

const OurMission = () => {
  return (
    <section
      className="bg-[#212121] text-white py-16"
      style={{
        backgroundImage: `url('/5.png'), url('/6.png')`,
        backgroundPosition: 'calc(40% - 300px) 100px, calc(60% + 300px) 100px',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundSize: '650px, 740px', // Adjust the size of the background images
      }}
    >
      <div className="container mx-auto text-center md:py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg mb-8">
          Holding $Yafa is a statement.<br />
          It's a representation of a beautiful past and a better future.
        </p>
        <div className="w-16 h-1 mx-auto bg-[#FF3B0B] rounded-md md:mt-[-15px] mb-8"></div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:px-12 lg:px-24 md:mt-28">
          {/* First Palestinian Blockchain */}
          <div className="bg-[#2A2A2A] opacity-95 rounded-lg p-6 md:w-[297px] md:h-[320px] mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="mb-4">
              <div className="w-16 h-16 bg-[#232424] shadow-sm shadow-gray-100 rounded-full flex items-center justify-center mx-auto md:ml-0">
                <GrCube className='w-[40px] h-[40px] text-[#00985F]'/>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 md:text-left md:mt-6">First Palestinian Blockchain</h3>
            <p className='md:text-left'>
              Yafa will develop and then migrate to its own network, for greater security & sovereignty over its own value creation.
            </p>
          </div>

          {/* Utility */}
          <div className="bg-[#2A2A2A] opacity-95 rounded-lg p-6 md:w-[297px] md:h-[320px] mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="mb-4">
              <div className="w-16 h-16 bg-[#232424] shadow-sm shadow-gray-100 rounded-full flex items-center justify-center mx-auto md:ml-0">
                <FaBluetoothB className='w-[40px] h-[40px] text-[#00985F]'/>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 md:text-left md:mt-6">Utility</h3>
            <p className='md:text-left'>
              Yafa aims to become one of the most widely used currencies among Palestinians for day-to-day transactions.
            </p>
          </div>

          {/* Charity */}
          <div className="bg-[#2A2A2A] opacity-95 rounded-lg p-6 md:w-[297px] md:h-[320px] mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="mb-4">
              <div className="w-16 h-16 bg-[#232424] shadow-sm shadow-gray-100 rounded-full flex items-center justify-center mx-auto md:ml-0">
                <BiSolidDonateBlood className='w-[40px] h-[40px] text-[#00985F]'/>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 md:text-left md:mt-6">Charity</h3>
            <p className='md:text-left'>
              Yafa aims to become a primary vehicle for people globally to make charitable contributions to Palestine-related causes and organizations.
            </p>
          </div>

          {/* By Palestinians */}
          <div className="bg-[#2A2A2A] opacity-95 rounded-lg p-6 md:w-[297px] md:h-[320px] mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="mb-4">
              <div className="w-16 h-16 bg-[#232424] shadow-sm shadow-gray-100 rounded-full flex items-center justify-center mx-auto md:ml-0">
                <IoIosWater className='w-[40px] h-[40px] text-[#00985F]' />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 md:text-left md:mt-6">By Palestinians</h3>
            <p className='md:text-left'>
              Yafa is created by Palestinians for Palestinians & Palestine liberation supporters. Yafa tokenizes one of the most powerful movements in modern history.
            </p>
          </div>
        </div>
      </div>

      {/* Add the media query here for background image behavior */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            background-position: center top, center 200px;
            background-size: 300px, 300px; /* Resize images for smaller screens */
          }
        }
      `}</style>
    </section>
  );
};

export default OurMission;
