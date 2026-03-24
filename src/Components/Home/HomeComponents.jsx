import React from 'react'
import FeatureProperties from './FeatureProperties'
import RecentSales from './RecentSales'
import HowWeWorks from './HowWeWorks'
import WhoWeAre from './WhoWeAre'
import HomeownerStories from './HomeownerStories'

const HomeComponents = () => {
  return (
    <div>
      <WhoWeAre/>
      <FeatureProperties/>
      <HowWeWorks/>
      <RecentSales/>
      <HomeownerStories/>
    </div>
  )
}

export default HomeComponents