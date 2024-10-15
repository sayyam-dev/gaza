'use client';
import Image from 'next/image';

export default function CommunitySection() {
  return (
    <div className="relative bg-[#393939] text-white md:py-28 py-12 px-4">
      <div className="max-w-6xl mx-auto flex md:ml-[70px] flex-col md:flex-row items-center justify-between md:w-[1400px]">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/2.png" // Change to the correct path for your image
            alt="Gaza Relief Illustration"
            width={600}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>
        {/* Text Content */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-[48px] font-bold mb-4 flex flex-col"><span>Together we are</span> <span className='md:mt-[-20px] mt-[-25px]'> stronger</span></h2>
          <p className="text-lg mb-6 md:w-[680px]">
            GazaRelief is a decentralized, community-driven project dedicated to humanitarian and academic empowerment in Gaza. Built on the Solana blockchain, GazaRelief combines the power of digital assets, including NFTs, with grassroots philanthropy to bring immediate aid and long-term development to Gaza. Through our $GZT token, GazaRelief aims to foster a unique community where contributors can actively participate in Gaza’s advancement through various initiatives—whether through direct aid, economic development, or cultural and academic support.
          </p>
          <div className="flex space-x-4 justify-center items-center">
            <button className="bg-transparent border-2   md:w-[290px] border-[#007A49] hover:bg-[#007A49] text-white py-2 px-4 rounded-md">
              Join our community
            </button>
            <button className="bg-[#007A49] md:w-[290px]  hover:bg-[#20835b] text-white py-2 px-4 rounded-md">
              Buy now
            </button>
          </div>
        </div>

        
      </div>
    </div>
  );
}
