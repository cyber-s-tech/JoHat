import React from 'react'
import FeatureProperties from './FeatureProperties'
import RecentSales from './RecentSales'
import HowWeWorks from './HowWeWorks'
import WhoWeAre from './WhoWeAre'
import FAQSection from './FaqSection'

const HomeComponents = () => {
  return (
    <div>
      <WhoWeAre/>
      <FeatureProperties/>
      <HowWeWorks/>
      <RecentSales/>
      <FAQSection/>

    </div>
  )
}

export default HomeComponents