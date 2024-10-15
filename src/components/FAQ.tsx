'use client'
import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-[#393939] text-white py-16">
        <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        
        <div className="w-16 h-1 bg-[#00985F] mx-auto mb-8"></div>
      <div className="container mx-auto px-4 md:w-[1400px] bg--500 md:px:20">
        <p className="md:text-left md:w-[1330px] md:mb-24 md:h-[64px] text-center text-lg mb-8 px-2 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni deserunt odio quam ipsam dignissimos amet non at ipsa, a nam, enim neque expedita nesciunt sint obcaecati aut rerum itaque. Veritatis temporibus maxime doloribus, dolore minima ad dignissimos molestias adipisci animi deserunt unde libero eaque perspiciatis nulla dolorem. Unde consequuntur harum rerum, maxime quia laborum ad vel doloremque velit rem molestiae nisi ratione culpa, expedita commodi atque perspiciatis? At, nam nemo?
        </p>

        <div className="space-y-4 max-w-3xl mx-auto">
          {['How do I upgrade my subscription Plan?', 
            'How do I upgrade my subscription Plan?', 
            'How do I upgrade my subscription Plan?'].map((question, index) => (
            <div key={index} className="bg-[#393939] md:w-[1330px] md:ml-[-280px] rounded-lg overflow-hidden border border-white">
              <button 
                onClick={() => toggleFAQ(index)} 
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-[#393939]">
                <span>{question}</span>
                <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 bg-[#252525]">
                  <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum purus ac purus convallis volutpat.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
