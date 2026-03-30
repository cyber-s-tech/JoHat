import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HomeBanner from './HomeBanner'
import FeatureProperties from './FeatureProperties'
import RecentSales from './RecentSales'
import HowWeWorks from './HowWeWorks'
import Services from './Services'
import WhoWeAre from './WhoWeAre'
import HomeownerStories from './HomeownerStories'
import FAQSection from './FaqSection'

const HomeComponents = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#feature-properties") {
      const scrollToSection = () => {
        const section = document.getElementById("feature-properties");

        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        } else {
          // retry if not loaded yet
          setTimeout(scrollToSection, 100);
        }
      };

      scrollToSection();
    }
  }, [location]);

  return (
    <div>
      <HomeBanner/>
      <Services/>
      <WhoWeAre/>
      <FeatureProperties/>
      <HowWeWorks/>
      <RecentSales/>
      <HomeownerStories/>
      <FAQSection/>

    </div>
  )
}

export default HomeComponents