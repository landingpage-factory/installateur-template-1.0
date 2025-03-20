import React from "react";

const EmergencyBanner = () => (
  <div className="bg-[#BAE83A] text-[#1D1D1B] py-2 px-4 text-center font-bold flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
    <a href="tel:08912345679" className="anker-link-banner text-sm md:text-base">🔧 24/7 Notdienst: 089 / 123 456 79</a>
    <a href="/kontakt" className="anker-link-banner text-sm md:text-base">📅 Termin vereinbaren</a>
  </div>
);

export default EmergencyBanner;
