'use client'
import Image from 'next/image';
import { BiCopy } from 'react-icons/bi';

const CryptoTokenInfo = () => {
  return (
    <div className="min-h-screen bg-[#212121] text-white flex flex-col items-center justify-center md:py-24 py-12">
      {/* Eye Icon */}
      <div className="mb-6">
      <Image
          src="/3.png" // Replace with your image path
          alt="Crypto Token Image"
          width={100}
          height={100}
          className="object-cover rounded-full"
        />
      </div>

      {/* Token Details */}
      <div className="text-center space-y-3 mb-6">
        <h3 className="text-xl font-semibold">Max supply</h3>
        <p className="text-lg">1,000,000,000</p>

        <h3 className="text-xl font-semibold">Network</h3>
        <p className="text-lg">Solana</p>

        <h3 className="text-xl font-semibold">Contract address:</h3>
        <p className="text-sm break-all">
          YAFAJvJjUv9MVAKcTE7Y8ouo45QNKVK6fCMzdxt2tjPs
          <button
            className="ml-2 text-gray-400 hover:text-gray-200"
            onClick={() => navigator.clipboard.writeText('YAFAJvJjUv9MVAKcTE7Y8ouo45QNKVK6fCMzdxt2tjPs')}
          >
            <span><BiCopy></BiCopy></span>
          </button>
        </p>
      </div>

      {/* Image */}
      <div className="mb-4">
        <Image
          src="/4.png" // Replace with your image path
          alt="Crypto Token Image"
          width={450}
          height={450}
          className="object-cover w-[450px] h-[450px] rounded-full"
        />
      </div>

      {/* Roadmap Button */}
      <button className="bg-[#00985F] md:mt-[-50px]  md:w-[290px] text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600 transition">
        Roadmap
      </button>
    </div>
  );
};

export default CryptoTokenInfo;
