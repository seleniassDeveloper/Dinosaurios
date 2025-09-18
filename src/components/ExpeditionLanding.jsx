// src/pages/Home.jsx
import "../css/ExpeditionLanding.css";
// import { useTranslation } from "react-i18next";

import HeroSection from "../../components/Home/HeroSection";
import WhatWereDoing from "../../components/Home/WhatWereDoing";
import YourRole from "../../components/Home/YourRole";
import LivePreview from "../../components/Home/LivePreview";
import WhyItMatters from "../../components/Home/WhyItMatters";
import DiscoveryHighlights from "../../components/Home/DiscoveryHighlights";

export default function Home() {
  // const { t } = useTranslation();

  return (
    <div className="expedition-landing">
      <HeroSection />

      {/* <YourRole /> */}
      {/* <LivePreview /> */}
      {/* <WhyItMatters /> */}
     {/* <DiscoveryHighlights />      */}
      <WhatWereDoing />
      {/*  <AntarcticaExpedition />
      <Sponsors />
      <StayConnected /> */}
    </div>
  );
}
