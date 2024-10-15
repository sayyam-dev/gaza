import React from 'react'

export default function GazaReliefMission() {
  return (
    <>
      <div className="bg-[#D00E26] md:px-14 text-white px-6 py-12  lg:px-24">
      {/* Header */}
      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-300 mb-4">
        Gaza Relief Mission
      </h3>

      {/* Main Heading */}
      <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
        Our mission is to create a system of economic independence for the people of Palestine. <br />
        <span className="text-4xl md:text-6xl">GazaRelief is a beacon of hope for a brighter future</span>
      </h1>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-300">
        GazaRelief aims to foster a unique community where contributors can actively participate in Gaza's advancement 
        through various initiatives <br /> — whether through direct aid, economic development, or cultural and academic support.
      </p>
    </div>

    </>
  )
}
