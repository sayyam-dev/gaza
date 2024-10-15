import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#212121] md:px-20 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Left side: Logo and social icons */}
          <div className="flex flex-col md:flex-col gap-4 items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="text-2xl font-bold"> <img
                src="/gaza/logo.svg" 
                alt="App Logo"
                className="w-[50px] h-[50px]"
              /></div> 
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400"><FaInstagram size={24} /></a>
              <a href="#" className="text-white hover:text-gray-400"><FaFacebook size={24} /></a>
              <a href="#" className="text-white hover:text-gray-400"><FaTwitter size={24} /></a>
            </div>
          </div>

          {/* Middle: Navigation links */}
          <div className="flex space-x-8 text-center md:w-80 md:ml-56">
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-gray-400">Our mission</a>
              <a href="#" className="hover:text-gray-400">Community</a>
              <a href="#" className="hover:text-gray-400">Policy</a>
              <a href="#" className="hover:text-gray-400">Privacy</a>
            </div>
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-gray-400">Roadmap</a>
              <a href="#" className="hover:text-gray-400">FAQ</a>
              <a href="#" className="hover:text-gray-400">About us</a>
              <a href="#" className="hover:text-gray-400">Buy now</a>
            </div>
          </div>

          {/* Right side: Newsletter form */}
          <div className="text-center md:text-left">
            <p className="mb-4">Join our newsletter to stay tuned with your <br /> daily news and promotions</p>
            <form className="flex items-center space-x-2">
              <input 
                type="email" 
                placeholder="enter your email" 
                className="px-4 py-2 rounded-md text-black focus:outline-none" 
              />
              <button 
                type="submit" 
                className="bg-[#00985F] text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-8 text-center md:px-20 ">
          <p>© Gaza Relief 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
