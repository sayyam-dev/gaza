import React from "react";
import Empowerment from "@/components/Empowerment";
import CommunitySection from "@/components/CommunitySection";
import CryptoTokenInfo from "@/components/CryptoTokenInfo";
import GazaReliefMission from "@/components/GazaReliefMission";
import OurMission from "@/components/OurMission";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* first rectangle */}
      <Empowerment />
      {/* first rectangle */}


      {/* second rectangle */}
        <CommunitySection/>
      {/* second rectangle */}

      {/* third rectangle */}
        <CryptoTokenInfo/>
      {/* third rectangle */}

      {/* fourth rectangle */}
        <GazaReliefMission/>
      {/* fourth rectangle */}

      {/* fifth rectangle */}
        <OurMission/>
      {/* fifth rectangle */}

      {/* sixth rectangle */}
        <FAQ/>
      {/* sixth rectangle */}

      {/* seven rectangle */}
        <Footer/>
      {/* seven rectangle */}
    </>
  );
}

